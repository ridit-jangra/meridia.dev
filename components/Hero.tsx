"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <div
      style={{ width: "full", position: "relative" }}
      className="p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col gap-4"
    >
      <div className="flex flex-col w-max">
        <span
          className="text-white/80 relative italic z-5
                   text-[1.15rem] xs:text-[1.35rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem]
                   after:content-[''] after:absolute after:left-0 after:w-full after:h-px after:bg-white/80
                   after:bottom-1 sm:after:bottom-3"
        >
          You code. AI assists.
        </span>
      </div>

      <button
        className="bg-white text-black text-base sm:text-lg md:text-xl rounded-full font-jetbrains px-5 sm:px-6 md:px-7 py-2 hover:bg-white/90 transition-colors cursor-pointer w-max"
        onClick={() => router.push("/download")}
      >
        Download Meridia
      </button>

      <Image
        src={
          "https://github.com/ridit-jangra/Meridia/raw/main/public/preview/ss-7.png"
        }
        alt="preview"
        width={1920}
        height={1080}
        className="mt-10 border rounded-md border-white/13"
      />
    </div>
  );
}
