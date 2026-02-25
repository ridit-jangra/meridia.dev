export function Collab() {
  return (
    <div
      className="relative w-full rounded-lg bg-[#171717] h-[50vh] p-3 shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:ring-white/10"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <div className="flex gap-1">
          <div className="size-2 rounded-full bg-red-400" />
          <div className="size-2 rounded-full bg-yellow-400" />
          <div className="size-2 rounded-full bg-green-400" />
        </div>

        <div className="ml-2 flex gap-1">
          <div className="h-2 w-10 rounded bg-[#404040] dark:bg-neutral-700" />
          <div className="h-2 w-8 rounded bg-[#404040] dark:bg-neutral-800" />
        </div>
      </div>

      <div className="flex gap-2">
        {/* Line Numbers */}
        <div className="flex flex-col items-end gap-1.5 pr-1 text-[8px] text-neutral-400 dark:text-neutral-600">
          {Array.from({ length: 15 }, (_, i) => (
            <span key={i} className="leading-none">
              {i + 1}
            </span>
          ))}
        </div>

        {/* Code Lines */}
        <div className="flex-1">
          <CodeLine
            width="60%"
            color="bg-purple-400/60 dark:bg-purple-500/50"
          />
          <CodeLine padding={8} width="75%" />
          <CodeLine
            padding={8}
            width="50%"
            color="bg-blue-400/60 dark:bg-blue-500/50"
          />
          <CodeLine padding={16} width="80%" />
          <CodeLine
            padding={16}
            width="45%"
            color="bg-emerald-400/60 dark:bg-emerald-500/50"
          />
          <CodeLine padding={16} width="65%" />
          <CodeLine padding={8} width="30%" />
          <CodeLine
            width="20%"
            color="bg-purple-400/60 dark:bg-purple-500/50"
          />
          <CodeLine width="0%" color="bg-transparent" />
          <CodeLine width="55%" color="bg-amber-400/60 dark:bg-amber-500/50" />
          <CodeLine padding={8} width="70%" />
          <CodeLine
            padding={8}
            width="40%"
            color="bg-blue-400/60 dark:bg-blue-500/50"
          />
          <CodeLine padding={16} width="85%" />
          <CodeLine padding={8} width="25%" />
          <CodeLine width="15%" color="bg-amber-400/60 dark:bg-amber-500/50" />
        </div>
      </div>
    </div>
  );
}

function CodeLine({
  width,
  padding = 0,
  color = "bg-[#404040]",
}: {
  width: string;
  padding?: number;
  color?: string;
}) {
  return (
    <div className="my-1 flex items-center" style={{ paddingLeft: padding }}>
      <div className={`h-1.5 rounded-full ${color}`} style={{ width }} />
    </div>
  );
}
