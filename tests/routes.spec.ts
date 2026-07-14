import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "out");

// --- Canonical prompt (source of truth in the digita repo) ---
function canonicalPrompt(): string {
  let s = readFileSync(
    join(root, "..", "digita", "prompt", "digita.en.md"),
    "utf8"
  ).replace(/\r\n/g, "\n");
  s = s.replace(/^<!--[\s\S]*?-->\n\n/, "");
  s = s.replace(/\n+$/, "");
  return s;
}

function storedPrompt(): string {
  const ts = readFileSync(join(root, "src", "content", "digita-prompt.ts"), "utf8");
  const m = ts.match(/DIGITA_PROMPT = (".*");/);
  assert.ok(m, "DIGITA_PROMPT literal not found");
  return JSON.parse(m![1]);
}

test("prompt integrity: stored prompt matches canonical exactly", () => {
  const canonical = canonicalPrompt();
  const stored = storedPrompt();
  assert.equal(stored, canonical);
  assert.equal(stored.length, 3950);
  assert.ok(stored.startsWith("# Digita v1.0"));
  assert.ok(stored.endsWith("Always follow the header and the fixed rules."));
});

// --- Built static output ---
// Note: /prep now redirects to https://prep.md (see vercel.json); the PREP
// standard lives at its own site, so this repo no longer ships a PREP page.
const builtPages = [
  { file: "index.html", must: ["Small tools. One job each. Kept sharp.", "Rafael Carrer", "Explore Digita", "Explore PREP.md", "PREP.md", "Read the standard"] },
  { file: "digita/index.html", must: ["Turn any AI chat into a menu-driven guided program", "Copy the Digita prompt", "github.com/RafaelCarrer/digita"] },
  { file: "about/index.html", must: ["Mise en place", "kitchen manager in London", "github.com/RafaelCarrer"] },
];

for (const page of builtPages) {
  test(`route built: ${page.file}`, () => {
    const p = join(out, page.file);
    assert.ok(existsSync(p), `${page.file} was not built`);
    const html = readFileSync(p, "utf8");
    for (const needle of page.must) {
      assert.ok(html.includes(needle), `${page.file} missing: ${needle}`);
    }
  });
}

test("SEO titles present in built pages", () => {
  assert.ok(
    readFileSync(join(out, "index.html"), "utf8").includes(
      "AMETI — Small Tools. One Job Each. Kept Sharp."
    )
  );
  assert.ok(
    readFileSync(join(out, "digita/index.html"), "utf8").includes(
      "Digita by AMETI — A Menu-Driven Interface for AI"
    )
  );
  assert.ok(
    readFileSync(join(out, "about/index.html"), "utf8").includes(
      "About AMETI — Mise en Place for Digital Work"
    )
  );
});

test("no forbidden routes were built", () => {
  for (const bad of ["login", "dashboard", "platform", "ecosystem", "pricing"]) {
    assert.ok(!existsSync(join(out, bad)), `forbidden route built: ${bad}`);
  }
});

test("built digita page contains the full prompt", () => {
  const html = readFileSync(join(out, "digita/index.html"), "utf8");
  // The prompt header line must be present in the rendered code block.
  assert.ok(html.includes("Digita v1.0 — navigate by typing numbers"));
});
