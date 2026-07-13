import type { Metadata } from "next";
import { about } from "@/content/site-copy";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: seo.about.canonical },
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: seo.about.canonical,
  },
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <section className="hero">
        <p className="eyebrow">{about.hero.eyebrow}</p>
        <h1>{about.hero.headline}</h1>
        <p>{about.hero.body}</p>
        <div className="cta-row">
          <a
            href={about.hero.ctaHref}
            rel="noopener noreferrer"
            className="cta"
          >
            {about.hero.ctaLabel}
          </a>
        </div>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="beginning-heading">
        <h2 id="beginning-heading" className="section-heading">
          {about.beginning.heading}
        </h2>
        <p className="prose">{about.beginning.body}</p>
      </section>

      <section aria-labelledby="principle-heading">
        <h2 id="principle-heading" className="section-heading">
          {about.principle.heading}
        </h2>
        <p className="prose">{about.principle.body}</p>
      </section>

      <section aria-labelledby="builds-heading">
        <h2 id="builds-heading" className="section-heading">
          {about.builds.heading}
        </h2>
        <p className="prose">{about.builds.body}</p>
      </section>

      <hr className="section-rule" />

      <section aria-labelledby="shelf-today-heading">
        <h2 id="shelf-today-heading" className="section-heading">
          {about.shelfToday.heading}
        </h2>
        <ul className="plain-list">
          {about.shelfToday.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="callout" aria-labelledby="closing-heading">
        <h2 id="closing-heading" className="section-heading">
          {about.closing.heading}
        </h2>
        <p className="prose">{about.closing.body}</p>
        <div className="cta-row">
          <a
            href={about.closing.ctaHref}
            rel="noopener noreferrer"
            className="text-link"
          >
            {about.closing.ctaLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
