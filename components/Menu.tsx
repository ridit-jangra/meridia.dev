"use client";

import { useRouter } from "next/navigation";

export function Menu() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between bg-[#0A0A0A] px-20 pt-10">
      <span className="flex text-white items-center gap-3 text-2xl font-mono cursor-pointer hover:underline">
        <img
          src={"./logos/meridia-black.svg"}
          alt="meridia"
          width={40}
          height={40}
        />
        Meridia
      </span>
      <button
        className="bg-white text-black text-base sm:text-lg md:text-lg rounded-full font-jetbrains px-5 py-1 hover:bg-white/90 transition-colors cursor-pointer w-max"
        onClick={() => router.push("/download")}
      >
        Download
      </button>
    </div>
  );
}
