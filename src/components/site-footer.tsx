import { GITHUB_FOUNDER, TAGLINE } from "@/content/site-copy";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span className="footer-tagline">{TAGLINE}</span>
        <a href={GITHUB_FOUNDER} rel="noopener noreferrer" className="footer-link">
          github.com/RafaelCarrer
        </a>
      </div>
    </footer>
  );
}
