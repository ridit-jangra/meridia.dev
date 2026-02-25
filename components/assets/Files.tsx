export function Files() {
  return (
    <div className="relative flex h-full items-center justify-center mask-r-from-80% mask-l-from-80%">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden">
        <Line opacity={0} x="800%" />
        <Line opacity={0.18} x="760%" />
        <Line opacity={0.42} x="690%" />
        <Line opacity={0.78} x="560%" />
        <Line opacity={1} x="430%" />
      </div>

      <div className="relative z-10 flex items-end gap-12">
        {/* Workspace Folder */}
        <div className="relative cursor-pointer" style={{ perspective: 1000 }}>
          <div
            className="relative"
            style={{ width: 78, height: 56, transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#1a2a4a] to-[#0c1220] shadow-sm ring-1 ring-white/10">
              <div
                className="absolute left-2 rounded-t-md bg-gradient-to-b from-[#294a8a] to-[#17315f]"
                style={{ top: -8, width: 30, height: 11 }}
              />
              <div className="absolute inset-x-2 top-8 h-px bg-white/10" />
            </div>

            <FileThumb
              z={10}
              transform="translateX(calc(-50% + 0px)) translateY(-10px) rotate(-4deg)"
              title="main.ts"
              tag="TS"
            />
            <FileThumb
              z={11}
              transform="translateX(calc(-50% + 0px)) translateY(-8px)"
              title="workspace.json"
              tag="CFG"
            />
            <FileThumb
              z={12}
              transform="translateX(calc(-50% + 0px)) translateY(-6px) rotate(4deg)"
              title="agent.md"
              tag="MD"
            />

            <div
              className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-xl bg-gradient-to-b from-[#162a4d] to-[#0c1220] shadow-sm ring-1 ring-white/10"
              style={{
                transformStyle: "preserve-3d",
                zIndex: 20,
                transform: "rotateX(-25deg)",
              }}
            >
              <div className="absolute top-2 right-2 left-2 h-px bg-white/10" />
              <div className="absolute bottom-2 left-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-cyan-400/60 to-blue-500/60" />
            </div>
          </div>
        </div>

        {/* File Preview Panel */}
        <div className="relative">
          <div
            className="relative rounded-xl bg-gradient-to-b from-white/10 to-white/5 shadow-sm ring-1 ring-white/10"
            style={{ width: 62, height: 78 }}
          >
            <div className="absolute inset-x-2 top-2 h-4 rounded-lg bg-black/40 ring-1 ring-white/10">
              <div className="flex h-full items-center justify-center gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-2 w-px bg-white/25" />
                ))}
              </div>
            </div>

            <div className="absolute right-2 bottom-2 left-2 flex flex-col gap-1.5">
              <DocRow />
              <DocRow />
              <DocRow mini />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ opacity, x }: { opacity: number; x: string }) {
  return (
    <div className="relative h-px w-full">
      <div className="absolute inset-0 border-t border-dashed border-white/10" />
      <div
        className="absolute top-0 h-px w-14 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{ opacity, transform: `translateX(${x})` }}
      />
    </div>
  );
}

function FileThumb({
  z,
  transform,
  title,
  tag,
}: {
  z: number;
  transform: string;
  title: string;
  tag: string;
}) {
  return (
    <div
      className="absolute top-2 left-1/2 origin-bottom overflow-hidden rounded-lg bg-black/60 shadow-sm ring-1 ring-white/12"
      style={{ zIndex: z, transform, width: 42, height: 26 }}
    >
      <div className="flex h-full w-full items-center justify-between px-2">
        <span className="text-[8px] text-white/80 truncate">{title}</span>
        <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
          {tag}
        </span>
      </div>
    </div>
  );
}

function DocRow({ mini }: { mini?: boolean }) {
  return (
    <div
      className="rounded-lg bg-black/35 ring-1 ring-white/10"
      style={{ height: mini ? 10 : 14 }}
    >
      <div className="mt-1 ml-1.5 h-0.5 w-6 rounded-full bg-white/25" />
      {!mini && (
        <div className="mt-1 ml-1.5 h-0.5 w-10 rounded-full bg-white/15" />
      )}
    </div>
  );
}
