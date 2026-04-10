export function RealTime() {
  const messages = [
    {
      text: "Refactor the auth middleware to support role-based access.",
      name: "You",
      // img: "/avatars/user.png",
      reverse: true,
    },
    {
      text: "Found 3 files using the current middleware. Should I update all of them?",
      name: "Meridia",
      // img: "/avatars/ai.png",
      reverse: false,
    },
    {
      text: "Yes. But keep backward compatibility for legacy routes.",
      name: "You",
      // img: "/avatars/user.png",
      reverse: true,
    },
    {
      text: "Done. Added a fallback layer and updated route guards.",
      name: "Meridia",
      // img: "/avatars/ai.png",
      reverse: false,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-between rounded-xl p-6 shadow-sm shadow-black/5 ring-1 ring-black/5 dark:bg-neutral-950 dark:shadow-white/5 dark:ring-white/5">
      <div className="h-48 w-full overflow-visible rounded-md">
        <div className="flex h-full flex-col justify-center gap-2">
          {messages.map((msg, i) => (
            <MessageBubble key={i} {...msg} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  text,
  name,
  // img,
  reverse,
}: {
  text: string;
  name: string;
  // img: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-2 ${reverse ? "flex-row-reverse" : ""}`}
    >
      {/* <img
        alt={name}
        src={img}
        className="size-5 shrink-0 rounded-full object-cover"
      /> */}

      <div
        className={`rounded-lg px-3 py-1.5 text-xs shadow-sm ring-1 ${
          reverse
            ? "bg-white text-black ring-black/10"
            : "bg-[#1E1E1E] text-neutral-200 ring-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
