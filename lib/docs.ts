export type DocItem = {
  title: string;
  items?: {
    title: string;
    href: string;
  }[];
  href?: string;
};

export const docsNav: DocItem[] = [
  { title: "Overview", href: "/docs" },
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Concepts", href: "/docs/concepts" },
];
