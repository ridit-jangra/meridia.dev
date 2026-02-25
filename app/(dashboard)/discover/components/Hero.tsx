"use client";

import { DitherCursor } from "@/components/custom/DitherCursor";
import { Home, Pen, Store } from "lucide-react";
import Grainient from "@/components/react-bits/Grainient";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <div
      style={{ width: "full", height: "100vh", position: "relative" }}
      className="p-6 sm:p-10 md:p-16 lg:p-20 bg-[#0a0a0a]"
    >
      <Grainient
        className="rounded-[3rem] sm:rounded-[4rem] lg:rounded-[5rem]"
        color1="#0B0F2F"
        color2="#1C2E4A"
        color3="#2A5BFF"
        timeSpeed={2.4}
        colorBalance={-0.27}
        warpStrength={3}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={40}
        blendAngle={-49}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={1.3}
        grainAmount={0.04}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />

      <DitherCursor
        gravity={0.02}
        baseSize={2000}
        spawn={19}
        grid={15}
        color="#ff8c42"
      />

      <div className="absolute top-0 left-0 w-full sm:w-[80%] md:w-[65%] lg:w-250 h-auto sm:h-auto lg:h-55 bg-[#0A0A0A] rounded-br-[3rem] sm:rounded-br-[4rem] lg:rounded-br-[5rem] p-8 sm:p-10 lg:p-12 text-white/60">
        <div className="absolute top-20 rotate-180 -right-18 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>
        <div className="absolute top-55 rotate-180 right-62 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden z-10">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>
      </div>

      <div className="absolute top-20 left-0 w-full sm:w-[80%] md:w-[65%] lg:w-170 h-auto sm:h-auto lg:h-65 bg-[#0A0A0A] rounded-br-[3rem] sm:rounded-br-[4rem] lg:rounded-br-[5rem] p-8 sm:p-10 lg:p-12 text-white/60">
        <div className="absolute top-65 rotate-180 left-20 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>
      </div>

      <span className="absolute top-20 left-30 text-white text-[5.6rem] z-20">
        Built for Developers <br />
        in the AI Era
      </span>

      <span className="absolute text-white text-[2rem] bottom-30 left-30 font-medium z-5">
        A{" "}
        <span className="relative italic font-regular after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-white/80 z-5">
          platform
        </span>{" "}
        that builds with you.
      </span>

      <div className="bg-[#0a0a0a] z-20 p-2 absolute right-[6%] bottom-[13%] h-[70vh] flex flex-col border border-white/20 px-2 rounded-full py-4 gap-4">
        <span
          className="text-white cursor-pointer hover:bg-neutral-700 p-2 rounded-full transition-colors"
          onClick={() => router.push("/")}
        >
          <Home />
        </span>
        <span
          className="text-white cursor-pointer hover:bg-neutral-700 p-2 rounded-full transition-colors"
          onClick={() => router.push("/download")}
        >
          <Store />
        </span>
        <span
          className="text-white cursor-pointer hover:bg-neutral-700 p-2 rounded-full transition-colors"
          onClick={() => router.push("/about")}
        >
          <Pen />
        </span>
      </div>
    </div>
  );
}
