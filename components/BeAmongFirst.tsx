export function BeAmongFirst() {
  return (
    <div className="text-white w-full h-[70vh] px-6 md:px-12 lg:px-20 py-12 lg:py-14 flex flex-col gap-8 items-center justify-center">
      <span className="font-medium text-[4rem] text-center z-5">
        Be among the first
        <br /> to try{" "}
        <span className="relative pb-2 italic text-white/80 hover:text-indigo-500 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-3 after:w-full after:h-px after:bg-white/80">
          Meridia
        </span>
      </span>
      <button className="bg-white text-black text-2xl rounded-3xl font-jetbrains px-7 py-3 hover:bg-white/90 transition-colors cursor-pointer z-5">
        Get Early Access
      </button>
    </div>
  );
}
