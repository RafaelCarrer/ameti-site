"use client";

import { useRef, useState } from "react";
import { DIGITA_PROMPT } from "@/content/digita-prompt";

type Status = "idle" | "copied" | "failed";

export function CopyPromptButton() {
  const [status, setStatus] = useState<Status>("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(DIGITA_PROMPT);
      setStatus("copied");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("failed");
      // Expose the manual-copy fallback and move focus to it.
      requestAnimationFrame(() => {
        const el = textareaRef.current;
        if (el) {
          el.focus();
          el.select();
        }
      });
    }
  }

  const label =
    status === "copied" ? "Copied" : "Copy the Digita prompt";

  return (
    <div className="copy-prompt">
      <button type="button" className="copy-button" onClick={handleCopy}>
        {label}
      </button>
      <span role="status" aria-live="polite" className="copy-status">
        {status === "copied" ? "Prompt copied to your clipboard." : ""}
      </span>

      {status === "failed" ? (
        <div className="copy-fallback">
          <label htmlFor="digita-prompt-fallback">
            Copy did not work automatically. Select all the text below and copy
            it manually.
          </label>
          <textarea
            id="digita-prompt-fallback"
            ref={textareaRef}
            className="copy-fallback-text"
            readOnly
            rows={12}
            value={DIGITA_PROMPT}
          />
        </div>
      ) : null}
    </div>
  );
}
