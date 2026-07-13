import Link from "next/link";
import type { Metadata } from "next";
import { ShelfCard } from "@/components/shelf-card";
import { home, shelf } from "@/content/site-copy";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: { canonical: seo.home.canonical },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: seo.home.canonical,
  },
};

export default function HomePage() {
  return (
    <div className="wrap">
      <section className="hero">
        <p className="eyebrow">{home.hero.eyebrow}</p>
        <h1>{home.hero.headline}</h1>
        <p>{home.hero.body}</p>
        <div className="cta-row">
          <Link href={home.hero.ctaHref} className="cta">
            {home.hero.ctaLabel}
          </Link>
        </div>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="shelf-heading">
        <h2 id="shelf-heading" className="section-heading">
          {home.shelf.heading}
        </h2>
        <p className="section-intro">{home.shelf.intro}</p>
        <div className="shelf-grid">
          {shelf.map((item) => (
            <ShelfCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="how-heading">
        <h2 id="how-heading" className="section-heading">
          {home.howItWorks.heading}
        </h2>
        <div className="steps">
          {home.howItWorks.steps.map((step, i) => (
            <div className="step" key={step.heading}>
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.heading}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="callout" aria-labelledby="founder-heading">
        <h2 id="founder-heading" className="section-heading">
          {home.founder.heading}
        </h2>
        <p className="prose">{home.founder.body}</p>
        <div className="cta-row">
          <a
            href={home.founder.linkHref}
            rel="noopener noreferrer"
            className="text-link"
          >
            {home.founder.linkLabel}
          </a>
        </div>
      </section>

      <section aria-labelledby="final-heading">
        <h2 id="final-heading" className="section-heading">
          {home.finalCta.heading}
        </h2>
        <p className="prose">{home.finalCta.body}</p>
        <div className="cta-row">
          <Link href={home.finalCta.ctaHref} className="cta">
            {home.finalCta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
