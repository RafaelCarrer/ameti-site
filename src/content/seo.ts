// SEO metadata — transcribed exactly from the WEBSITE area document.
// Do not rewrite. Open Graph reuses these values.

export interface RouteSeo {
  path: string;
  canonical: string;
  title: string;
  description: string;
}

export const seo: Record<"home" | "digita" | "about", RouteSeo> = {
  home: {
    path: "/",
    canonical: "https://ameti.app",
    title: "AMETI — Small Tools. One Job Each. Kept Sharp.",
    description:
      "AMETI builds focused interfaces over existing AI models. Explore Digita and small tools designed for one clear job, with human review built in.",
  },
  digita: {
    path: "/digita",
    canonical: "https://ameti.app/digita",
    title: "Digita by AMETI — A Menu-Driven Interface for AI",
    description:
      "Copy Digita’s open-source prompt to turn ChatGPT, Claude, Gemini, or another compatible AI chat into a guided, menu-driven program.",
  },
  about: {
    path: "/about",
    canonical: "https://ameti.app/about",
    title: "About AMETI — Mise en Place for Digital Work",
    description:
      "Meet AMETI and founder Rafael Carrer, a kitchen manager in London who builds focused interfaces that bring mise en place to work with existing AI.",
  },
};
