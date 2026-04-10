"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <div className="relative w-full px-5 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20 lg:px-20 lg:py-24 flex flex-col gap-6">
      <div className="flex flex-col w-max">
        <span
          className="
            text-white/80 italic relative z-10
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            leading-tight
            after:content-[''] after:absolute after:left-0 after:w-full after:h-px
            after:bg-white/80 after:-bottom-1 sm:after:-bottom-2
          "
        >
          You code. AI assists.
        </span>
      </div>

      <button
        className="
          bg-white text-black font-jetbrains rounded-full
          text-sm sm:text-base md:text-lg
          px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3
          hover:bg-white/90 transition-colors cursor-pointer w-max
        "
        onClick={() => router.push("/download")}
      >
        Download Meridia
      </button>

      <div className="mt-8 sm:mt-10 w-full">
        <Image
          src="https://github.com/ridit-jangra/Meridia/raw/main/public/preview/ss-7.png"
          alt="Meridia preview"
          width={1920}
          height={1080}
          className="w-full h-auto border rounded-md border-white/13"
          priority
        />
      </div>
    </div>
  );
}
