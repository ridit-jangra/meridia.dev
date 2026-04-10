"use client";

import { useRouter } from "next/navigation";

export function Menu() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between bg-[#0A0A0A] px-5 sm:px-10 md:px-16 lg:px-20 pt-6 sm:pt-8 md:pt-10">
      <span className="flex text-white items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-mono cursor-pointer hover:underline">
        <img
          src={"./logos/meridia-black.svg"}
          alt="meridia"
          width={32}
          height={32}
          // className="sm:w-[40px] sm:h-[40px]"
        />
        Meridia
      </span>
      <button
        className="bg-white text-black text-sm sm:text-base md:text-lg rounded-full font-jetbrains px-4 sm:px-5 py-1 sm:py-1.5 hover:bg-white/90 transition-colors cursor-pointer w-max"
        onClick={() => router.push("/download")}
      >
        Download
      </button>
    </div>
  );
}
