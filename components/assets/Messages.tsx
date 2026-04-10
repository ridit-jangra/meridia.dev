export function Messages() {
  const testimonials = [
    {
      text: "Meridia feels like a teammate that understands my repo. It suggests the right moves, but I stay in control.",
      name: "Aarav",
      role: "Full-stack Developer",
      // img: "/avatars/dev-1.png",
      z: 10,
    },
    {
      text: "The best part is the workflow. Prompts, context, tools — everything is structured instead of messy chat logs.",
      name: "Meera",
      role: "Frontend Engineer",
      // img: "/avatars/dev-2.png",
      z: 9,
    },
    {
      text: "It doesn’t hallucinate random code. Meridia actually uses project context and asks before changing things.",
      name: "Ishan",
      role: "Backend Engineer",
      // img: "/avatars/dev-3.png",
      z: 8,
    },
    {
      text: "AI suggestions are useful, but the UI makes it feel safe. Nothing happens unless I approve it.",
      name: "Naina",
      role: "Product-minded Developer",
      // img: "/avatars/dev-4.png",
      z: 7,
    },
  ];

  return (
    <div className="h-48 w-full overflow-visible rounded-md md:h-full md:min-h-48">
      <div className="relative flex h-full items-center overflow-hidden mask-x-from-90%">
        <div className="flex items-stretch gap-3 px-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  text,
  name,
  role,
  // img,
  z,
}: {
  text: string;
  name: string;
  role: string;
  // img: string;
  z: number;
}) {
  return (
    <div className="group relative w-56 shrink-0 rounded-xl">
      <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] bg-fixed shadow-sm ring-1 shadow-black/5 ring-black/5 dark:shadow-white/5 dark:ring-white/5" />

      <div
        className="relative flex h-full flex-col rounded-xl bg-[#171717] p-4 shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10"
        style={{ zIndex: z }}
      >
        <p className="mb-3 flex-1 text-xs leading-relaxed text-neutral-100">
          {text}
        </p>

        <div className="flex items-center gap-2">
          {/* <img
            alt={name}
            className="size-5 rounded-full object-cover"
            src={img}
          /> */}
          <div>
            <p className="text-[10px] font-medium text-neutral-100">{name}</p>
            <p className="text-[8px] text-gray-500 dark:text-gray-400">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
