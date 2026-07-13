import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <Link href="/" className="wordmark" aria-label="AMETI — home">
          AMETI
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/digita">Digita</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
