// Publication copy — transcribed exactly from the WEBSITE area document
// (Final Page Copy). Do not rewrite, shorten, or invent claims.

export const GITHUB_FOUNDER = "https://github.com/RafaelCarrer";
export const GITHUB_DIGITA = "https://github.com/RafaelCarrer/digita";
export const TAGLINE = "Small tools. One job each. Kept sharp.";

export interface ShelfItem {
  number: string;
  name: string;
  status: string;
  copy: string;
  href?: string;
  ctaLabel?: string;
}

export const shelf: ShelfItem[] = [
  {
    number: "001",
    name: "Digita",
    status: "Open source · Published",
    copy: "A focused interface for completing one defined job with the AI model you already use.",
    href: "/digita",
    ctaLabel: "Explore Digita",
  },
  {
    number: "002",
    name: "AMETI OS",
    status: "In development",
    copy: "The next tool on the shelf is being prepared. No release date is promised.",
  },
  {
    number: "003",
    name: "Kitchen operations system",
    status: "Private · In service",
    copy: "A working internal system shaped by day-to-day kitchen operations. It is not a public product.",
  },
];

export const home = {
  hero: {
    eyebrow: "AMETI",
    headline: "Small tools. One job each. Kept sharp.",
    body: "AMETI builds interfaces for AI — focused apps that guide you through one job at a time instead of making you figure everything out. They work with existing models, including ChatGPT, Claude, and Gemini.",
    ctaLabel: "Explore Digita",
    ctaHref: "/digita",
  },
  shelf: {
    heading: "Tools with a clear place and a clear job.",
    intro:
      "Each AMETI tool starts with a recurring problem found in real work. The shelf shows what is ready, what is being prepared, and what remains private.",
  },
  howItWorks: {
    heading: "Guidance around the model, not another model.",
    steps: [
      {
        heading: "Start with one job.",
        body: "Choose a focused task instead of beginning with an empty chat and an open-ended prompt.",
      },
      {
        heading: "Use the model you already have.",
        body: "AMETI interfaces are designed to work over existing AI models rather than replace them.",
      },
      {
        heading: "Review before you use the result.",
        body: "The interface provides structure and a useful first result. You remain responsible for checking, editing, and approving the final output.",
      },
    ],
  },
  founder: {
    heading: "Made from real work.",
    body: "Rafael Carrer is a kitchen manager in London who builds tools for recurring problems he meets in service. The same mise en place principle guides AMETI: prepare the right thing, put it in the right place, and make it ready when the work begins.",
    linkLabel: "View Rafael Carrer on GitHub",
    linkHref: GITHUB_FOUNDER,
  },
  finalCta: {
    heading: "Start with the tool that is ready.",
    body: "Digita is AMETI shelf item № 001 — open source, published, and ready to explore.",
    ctaLabel: "Explore Digita",
    ctaHref: "/digita",
  },
};

export const about = {
  hero: {
    eyebrow: "About AMETI",
    headline: "Tools prepared before service.",
    body: "AMETI builds small interfaces for AI, each designed to guide one job from a clear starting point to a result a person can review.",
    ctaLabel: "View Rafael Carrer’s work on GitHub",
    ctaHref: GITHUB_FOUNDER,
  },
  beginning: {
    heading: "Built in London, shaped by the kitchen.",
    body: "AMETI was started by Rafael Carrer, a kitchen manager in London who builds his own tools when recurring work needs a clearer system. The kitchen is not decoration for the brand. It is where the method was learned: prepare before service, keep every tool in its place, and remove friction from the work that follows.",
  },
  principle: {
    heading: "Mise en place for digital work.",
    body: "Mise en place means putting each thing in its place before it is needed. AMETI applies that discipline to AI: define the job, arrange the steps, guide the input, and make the result easier to review. The model supplies capability. The interface supplies order.",
  },
  builds: {
    heading: "Interfaces for AI, not another AI model.",
    body: "AMETI tools work with existing models such as ChatGPT, Claude, and Gemini. They do not compete with those models, promise a separate platform, or ask people to replace the tools they already use. Each product is a focused layer for one recurring job, with a human responsible for the final decision.",
  },
  shelfToday: {
    heading: "The shelf today.",
    items: [
      "Digita — Open source · Published. A focused interface for one defined job, ready to explore.",
      "AMETI OS — In development. Work is continuing without a promised release date.",
      "Kitchen operations system — Private · In service. A real internal tool, not a public product.",
    ],
  },
  closing: {
    heading: "Small tools. One job each. Kept sharp.",
    body: "AMETI grows one useful interface at a time. No premature platform. No empty shelf. Just tools with a real job and a clear place.",
    ctaLabel: "View Rafael Carrer’s work on GitHub",
    ctaHref: GITHUB_FOUNDER,
  },
};

export const digita = {
  hero: {
    eyebrow: "AMETI shelf item № 001 · Open source · Published",
    headline: "Turn any AI chat into a menu-driven guided program.",
    body: "Digita replaces the blank prompt box with a sequence of numbered choices. Start with a goal or start without one; Digita helps clarify the context, shows useful paths, and guides the conversation towards a result you can review.",
    secondaryCtaLabel: "View Digita on GitHub",
    secondaryCtaHref: GITHUB_DIGITA,
  },
  who: {
    heading: "Guidance when you know AI can help, but not what to ask.",
    body: "Digita is for people who want help writing, creating, researching, planning, analysing information, or solving a problem without having to design the right prompt first. It is also for developers who want to inspect or adapt a small open-source interface pattern.",
    models:
      "Designed for ChatGPT, Claude, Gemini, and other instruction-following chat LLMs. Digita is text, not a separate AI model, plugin, API, account system, or independent platform.",
  },
  job: {
    heading: "Move from an unclear goal to a reviewable result, one numbered decision at a time.",
    body: "Digita turns a normal AI chat into a menu-driven program. Each response presents a short set of numbered choices, keeps the working context visible, tolerates free-form questions, and funnels the task towards a result. Reserved options let the user view context, update it, or start a new task without losing the interaction structure.",
  },
  howItWorks: {
    steps: [
      "Copy the complete prompt below.",
      "Paste it into a Project’s instructions in ChatGPT or Claude, or send it as the first message in any compatible chat.",
      "Say what you want, or let Digita ask. Then choose numbered options to refine the task.",
      "Review the result, refine it if needed, and export long work when the model supports that action.",
    ],
    setupNote:
      "No plugin, API, or separate account is required. Digita runs as text inside the AI chat you already use.",
  },
  prompt: {
    heading: "Copy-ready prompt",
    intro: "Copy the complete prompt below.",
  },
  expectedOutput: {
    heading: "A guided result with its context intact.",
    body: "Digita should return a usable result for the chosen task, followed by options to finish, refine, or export it. When the user finishes, it provides a portable summary of the decisions, learning, and result. Long conversations receive a continuation option so the work can move to a fresh chat with a compact handoff.",
  },
  review: {
    heading: "Review before you use it.",
    body: "Digita structures the conversation; the underlying AI model still generates the content. Check facts, calculations, sources, permissions, sensitive information, and any decision that affects people, money, safety, or published work. The human user remains responsible for the final result.",
  },
  attribution: {
    body: "Digita was created by Rafael Carrer, a kitchen manager in London who builds his own tools, and is AMETI shelf item № 001. It is published under the MIT License as a focused interface over existing AI models.",
    primaryCtaLabel: "Copy the Digita prompt",
    secondaryCtaLabel: "View the open-source project on GitHub",
    secondaryCtaHref: GITHUB_DIGITA,
    closingLine: "Small tools. One job each. Kept sharp.",
  },
};
