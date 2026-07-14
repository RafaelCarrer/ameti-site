import type { Metadata } from "next";
import { CopyPromptButton } from "@/components/copy-prompt-button";
import { digita } from "@/content/site-copy";
import { seo } from "@/content/seo";
import { DIGITA_PROMPT } from "@/content/digita-prompt";

export const metadata: Metadata = {
  title: seo.digita.title,
  description: seo.digita.description,
  alternates: { canonical: seo.digita.canonical },
  openGraph: {
    title: seo.digita.title,
    description: seo.digita.description,
    url: seo.digita.canonical,
  },
};

export default function DigitaPage() {
  return (
    <div className="wrap">
      <section className="hero">
        <p className="eyebrow">{digita.hero.eyebrow}</p>
        <h1>{digita.hero.headline}</h1>
        <p>{digita.hero.body}</p>
        <div className="cta-row">
          <CopyPromptButton
            text={DIGITA_PROMPT}
            label="Copy the Digita prompt"
            fallbackId="digita-prompt-fallback-hero"
          />
          <a
            href={digita.hero.secondaryCtaHref}
            rel="noopener noreferrer"
            className="cta cta--ghost"
          >
            {digita.hero.secondaryCtaLabel}
          </a>
        </div>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="who-heading">
        <h2 id="who-heading" className="section-heading">
          {digita.who.heading}
        </h2>
        <p className="prose">{digita.who.body}</p>
        <p className="prose">{digita.who.models}</p>
      </section>

      <section aria-labelledby="job-heading">
        <h2 id="job-heading" className="section-heading">
          {digita.job.heading}
        </h2>
        <p className="prose">{digita.job.body}</p>
      </section>

      <section aria-labelledby="howto-heading">
        <h2 id="howto-heading" className="section-heading">
          How it works
        </h2>
        <ol className="ordered-steps">
          {digita.howItWorks.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="note">{digita.howItWorks.setupNote}</p>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="prompt-heading">
        <h2 id="prompt-heading" className="section-heading">
          {digita.prompt.heading}
        </h2>
        <p className="prompt-intro">{digita.prompt.intro}</p>
        <div className="code-block">
          <pre>{DIGITA_PROMPT}</pre>
        </div>
        <CopyPromptButton
          text={DIGITA_PROMPT}
          label="Copy the Digita prompt"
          fallbackId="digita-prompt-fallback-block"
        />
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="output-heading">
        <h2 id="output-heading" className="section-heading">
          {digita.expectedOutput.heading}
        </h2>
        <p className="prose">{digita.expectedOutput.body}</p>
      </section>

      <section aria-labelledby="review-heading">
        <h2 id="review-heading" className="section-heading">
          {digita.review.heading}
        </h2>
        <p className="prose">{digita.review.body}</p>
      </section>

      <section className="callout" aria-labelledby="attribution-heading">
        <h2 id="attribution-heading" className="section-heading">
          Made by Rafael Carrer
        </h2>
        <p className="prose">{digita.attribution.body}</p>
        <div className="cta-row">
          <a
            href={digita.attribution.secondaryCtaHref}
            rel="noopener noreferrer"
            className="text-link"
          >
            {digita.attribution.secondaryCtaLabel}
          </a>
        </div>
        <p className="note">{digita.attribution.closingLine}</p>
      </section>
    </div>
  );
}
