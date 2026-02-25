export function Files() {
  return (
    <div className="relative flex h-full items-center justify-center mask-r-from-80% mask-l-from-80%">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden">
        <Line opacity={0} x="800%" />
        <Line opacity={0} x="800%" />
        <Line opacity={0.3525} x="706%" />
        <Line opacity={0.8025} x="586%" />
        <Line opacity={1} x="466%" />
      </div>

      <div className="relative z-10 flex items-end gap-12">
        {/* Folder */}
        <div
          className="relative cursor-pointer"
          style={{ perspective: 1000, opacity: 1, transform: "none" }}
        >
          <div
            className="relative"
            style={{ width: 72, height: 54, transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-amber-400 to-amber-500 shadow-sm dark:from-amber-500 dark:to-amber-600">
              <div
                className="absolute left-1.5 rounded-t-sm bg-gradient-to-b from-amber-300 to-amber-400 dark:from-amber-400 dark:to-amber-500"
                style={{ top: -8, width: 26, height: 10 }}
              />
            </div>

            <FileThumb
              z={10}
              transform="translateX(calc(-50% + 0px)) translateY(-10px) rotate(-3deg)"
              src="https://assets.aceternity.com/avatars/1.webp"
              alt="File 1"
            />
            <FileThumb
              z={11}
              transform="translateX(calc(-50% + 0px)) translateY(-8px)"
              src="https://assets.aceternity.com/avatars/manu.webp"
              alt="File 2"
            />
            <FileThumb
              z={12}
              transform="translateX(calc(-50% + 0px)) translateY(-6px) rotate(3deg)"
              src="https://assets.aceternity.com/avatars/8.webp"
              alt="File 3"
            />

            <div
              className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-lg bg-gradient-to-b from-amber-300 to-amber-400 shadow-sm dark:from-amber-400 dark:to-amber-500"
              style={{
                transformStyle: "preserve-3d",
                zIndex: 20,
                transform: "rotateX(-25deg)",
              }}
            >
              <div className="absolute top-2 right-2 left-2 h-px bg-amber-200/50 dark:bg-amber-300/50" />
            </div>
          </div>
        </div>

        {/* Document */}
        <div className="relative" style={{ opacity: 1, transform: "none" }}>
          <div
            className="relative rounded-lg bg-gradient-to-b from-gray-50 to-gray-50 shadow-sm dark:from-neutral-700 dark:to-neutral-800"
            style={{ width: 56, height: 72 }}
          >
            <div className="absolute inset-x-1.5 top-1.5 h-3 rounded-sm bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-900">
              <div className="flex h-full items-center justify-center gap-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-px bg-neutral-600 dark:bg-neutral-700"
                  />
                ))}
              </div>
            </div>

            <div className="absolute right-1.5 bottom-1.5 left-1.5 flex flex-col gap-1">
              <DocRow />
              <DocRow />
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
      <div className="absolute inset-0 border-t border-dashed border-neutral-200 dark:border-neutral-700" />
      <div
        className="absolute top-0 h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        style={{ opacity, transform: `translateX(${x})` }}
      />
    </div>
  );
}

function FileThumb({
  z,
  transform,
  src,
  alt,
}: {
  z: number;
  transform: string;
  src: string;
  alt: string;
}) {
  return (
    <div
      className="absolute top-1.5 left-1/2 origin-bottom overflow-hidden rounded bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800"
      style={{ zIndex: z, transform, width: 36, height: 24 }}
    >
      <img alt={alt} className="h-full w-full object-cover" src={src} />
    </div>
  );
}

function DocRow() {
  return (
    <div className="h-4 rounded-sm bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-800 dark:ring-white/10">
      <div className="mt-1 ml-1 h-0.5 w-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
    </div>
  );
}
