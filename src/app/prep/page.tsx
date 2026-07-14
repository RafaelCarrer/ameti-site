import type { Metadata } from "next";
import { CopyPromptButton } from "@/components/copy-prompt-button";
import { prep } from "@/content/site-copy";
import { seo } from "@/content/seo";
import { PREP_PROMPT } from "@/content/prep-prompt";

export const metadata: Metadata = {
  title: seo.prep.title,
  description: seo.prep.description,
  alternates: { canonical: seo.prep.canonical },
  openGraph: {
    title: seo.prep.title,
    description: seo.prep.description,
    url: seo.prep.canonical,
  },
};

export default function PrepPage() {
  return (
    <div className="wrap">
      <section className="hero">
        <p className="eyebrow">{prep.hero.eyebrow}</p>
        <h1>{prep.hero.headline}</h1>
        <p>{prep.hero.body}</p>
        <div className="cta-row">
          <CopyPromptButton
            text={PREP_PROMPT}
            label="Copy the PREP prompt"
            fallbackId="prep-prompt-fallback-hero"
          />
          <a
            href={prep.hero.secondaryCtaHref}
            rel="noopener noreferrer"
            className="cta cta--ghost"
          >
            {prep.hero.secondaryCtaLabel}
          </a>
        </div>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading" className="section-heading">
          {prep.problem.heading}
        </h2>
        <p className="prose">{prep.problem.body}</p>
      </section>

      <section aria-labelledby="core-heading">
        <h2 id="core-heading" className="section-heading">
          {prep.core.heading}
        </h2>
        <div className="code-block">
          <pre>{prep.core.tree}</pre>
        </div>
        <p className="prose">{prep.core.body}</p>
      </section>

      <section aria-labelledby="how-heading">
        <h2 id="how-heading" className="section-heading">
          {prep.how.heading}
        </h2>
        <ol className="ordered-steps">
          {prep.how.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="note">{prep.how.note}</p>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="prompt-heading">
        <h2 id="prompt-heading" className="section-heading">
          {prep.prompt.heading}
        </h2>
        <p className="prompt-intro">{prep.prompt.intro}</p>
        <div className="code-block">
          <pre>{PREP_PROMPT}</pre>
        </div>
        <CopyPromptButton
          text={PREP_PROMPT}
          label="Copy the PREP prompt"
          fallbackId="prep-prompt-fallback-block"
        />
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="relation-heading">
        <h2 id="relation-heading" className="section-heading">
          {prep.relation.heading}
        </h2>
        <p className="prose">{prep.relation.body}</p>
      </section>

      <section className="callout" aria-labelledby="attribution-heading">
        <h2 id="attribution-heading" className="section-heading">
          An open standard, made from real work
        </h2>
        <p className="prose">{prep.attribution.body}</p>
        <div className="cta-row">
          <a
            href={prep.attribution.secondaryCtaHref}
            rel="noopener noreferrer"
            className="text-link"
          >
            {prep.attribution.secondaryCtaLabel}
          </a>
        </div>
        <p className="note">{prep.attribution.closingLine}</p>
      </section>
    </div>
  );
}
