"use client";

import { DitherCursor } from "@/components/DitherCursor";
import { ArrowUpRight, Home, Pen, Store } from "lucide-react";
import Grainient from "@/components/Grainient";
// import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Discover() {
  const list: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const li: Variants = {
    hidden: { opacity: 0, x: 22 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div
      style={{ width: "full", height: "100vh", position: "relative" }}
      className="p-6 sm:p-10 md:p-16 lg:p-20 bg-[#0a0a0a]"
    >
      {/* <div className="absolute top-[13%] bg-transparent flex items-center justify-between w-[92%] px-6 sm:px-10 md:px-16 lg:px-20 text-white z-500">
        <span className="text-lg sm:text-xl md:text-2xl cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Meridia
        </span>
        <div className="flex items-center gap-2 z-50">
          <button className="bg-white/20 rounded-full font-jetbrains text-sm sm:text-base px-4 sm:px-5 py-2 hover:bg-white/25 transition-colors cursor-pointer">
            Start Building
          </button>
        </div>
      </div> */}

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

      <div className="bg-[#0a0a0a] z-20 p-2 absolute right-[6%] bottom-[13%] h-[70vh] flex flex-col border border-white/20 px-2 rounded-full py-4 gap-4">
        <span className="text-white cursor-pointer hover:bg-neutral-700 p-2 rounded-full transition-colors">
          <Home />
        </span>
        <span className="text-white cursor-pointer hover:bg-neutral-700 p-2 rounded-full transition-colors">
          <Store />
        </span>
        <span className="text-white cursor-pointer hover:bg-neutral-700 p-2 rounded-full transition-colors">
          <Pen />
        </span>
      </div>
    </div>
  );
}
