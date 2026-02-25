import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (p) => <h1 className="text-4xl font-medium tracking-tight" {...p} />,
    h2: (p) => (
      <h2
        className="mt-10 text-2xl font-medium tracking-tight scroll-mt-28"
        {...p}
      />
    ),
    p: (p) => <p className="mt-4 text-white/70 leading-relaxed" {...p} />,
    a: (p) => <a className="text-indigo-300 hover:underline" {...p} />,
    ul: (p) => <ul className="mt-4 list-disc pl-6 text-white/70" {...p} />,
    li: (p) => <li className="mt-2" {...p} />,
    code: (p) => (
      <code className="rounded bg-white/10 px-1 py-0.5 text-white" {...p} />
    ),
    pre: (p) => (
      <pre
        className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm"
        {...p}
      />
    ),
    ...components,
  };
}
