"use client";

import { DitherCursor } from "@/components/custom/DitherCursor";
import { ArrowUpRight } from "lucide-react";
import ShinyText from "./react-bits/ShinyText";
import Grainient from "@/components/react-bits/Grainient";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";

export function Hero() {
  const router = useRouter();

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
      className="p-6 sm:p-10 md:p-16 lg:p-20"
    >
      <div className="absolute top-[13%] bg-transparent flex items-center justify-between w-[92%] px-6 sm:px-10 md:px-16 lg:px-20 text-white z-500">
        <span className="text-lg sm:text-xl md:text-2xl cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Meridia
        </span>
        <div className="flex items-center gap-2 z-50">
          <button
            className="bg-white/20 rounded-full font-jetbrains text-sm sm:text-base px-4 sm:px-5 py-2 hover:bg-white/25 transition-colors cursor-pointer"
            onClick={() => router.push("/download")}
          >
            Start Building
          </button>
        </div>
      </div>

      <Grainient
        className="rounded-[3rem] sm:rounded-[4rem] lg:rounded-[5rem]"
        color1="#2f4f76"
        color2="#366c77"
        color3="#3f6f67"
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

      <div className="absolute bottom-0 right-0 w-full sm:w-[80%] md:w-[65%] lg:w-220 h-auto sm:h-auto lg:h-100 bg-[#0A0A0A] rounded-tl-[3rem] sm:rounded-tl-[4rem] lg:rounded-tl-[5rem] p-8 sm:p-10 lg:p-12 text-white/60">
        <div className="absolute bottom-[20%] -left-[9%] w-16 sm:w-20 h-16 sm:h-20 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>
        <div className="absolute -top-[20.1%] right-[9.1%] w-16 sm:w-20 h-16 sm:h-20 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>

        <motion.ul
          variants={list}
          initial="hidden"
          animate="show"
          className="absolute right-[8%] sm:right-[10%] lg:right-[12%] bottom-[20%] text-base sm:text-lg lg:text-xl flex flex-col gap-3 sm:gap-4 lg:gap-5 items-end z-10"
        >
          {["Documentation", "API Reference", "Get Started"].map((t) => (
            <motion.li
              key={t}
              variants={li}
              whileHover={{ y: -2, opacity: 1 }}
              whileTap={{ scale: 0.98 }}
              className="hover:text-white cursor-pointer flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => {
                router.push(t === "Documentation" ? "/docs" : "/");
              }}
            >
              {t}
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ArrowUpRight size={18} className="sm:hidden" />
                <ArrowUpRight size={21} className="hidden sm:block" />
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <span
        className="absolute bottom-[22%] left-[5%] sm:left-[6%] lg:left-[7%] text-white text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] z-10"
        onClick={() => router.push("/")}
      >
        <ShinyText
          text="Meridia"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="font-medium font-jetbrains"
        />
      </span>

      <span className="text-[1.5rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] text-white/80 absolute bottom-[12%] left-[5%] sm:left-[6%] lg:left-[7%] italic after:content-[''] after:absolute after:left-0 after:bottom-3 after:w-full after:h-px after:bg-white/80 z-5">
        You code. AI assists.
      </span>
    </div>
  );
}
