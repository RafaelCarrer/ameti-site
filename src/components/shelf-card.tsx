import Link from "next/link";
import type { ShelfItem } from "@/content/site-copy";

export function ShelfCard({ item }: { item: ShelfItem }) {
  const isLinked = Boolean(item.href);
  return (
    <article className={`shelf-card${isLinked ? " shelf-card--linked" : ""}`}>
      <span className="shelf-number" aria-hidden="true">
        № {item.number}
      </span>
      <h3 className="shelf-name">
        {isLinked ? (
          <Link href={item.href!}>
            {item.name}
            <span className="shelf-go" aria-hidden="true">
              {" "}
              →
            </span>
          </Link>
        ) : (
          item.name
        )}
      </h3>
      <span className="shelf-status">{item.status}</span>
      <p className="shelf-copy">{item.copy}</p>
      {isLinked && item.ctaLabel ? (
        <Link href={item.href!} className="shelf-cta">
          {item.ctaLabel}
        </Link>
      ) : null}
    </article>
  );
}
