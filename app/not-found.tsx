"use client";

import { Circles } from "@/components/assets/Circles";
import { Lines } from "@/components/assets/Lines";
import { Squares } from "@/components/assets/Squares";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col items-center justify-center gap-12 bg-[#0A0A0A] text-white px-6"
    >
      <motion.div
        variants={item}
        className="flex flex-col"
        style={{ lineHeight: "5rem" }}
      >
        <p className="text-white/40 text-[3.5rem]">Oops!</p>
        <p className="text-white text-[4rem] font-medium">
          That page doesn't seem to exist
          <br /> in our workspace.
        </p>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-black rounded-full mt-8 px-10 py-4 text-xl font-medium hover:bg-white/90 transition-colors cursor-pointer w-max mx-auto"
          onClick={() => router.push("/")}
        >
          Return to Home
        </motion.button>
      </motion.div>

      <motion.div
        variants={container}
        className="flex gap-7 items-center flex-wrap justify-center"
      >
        <motion.div
          variants={card}
          whileHover={{ scale: 1.02 }}
          className="bg-[#171717] p-8 rounded-[2.5rem] w-[320px] hover:bg-[#262626] transition-colors"
        >
          <Circles />
          <div className="flex items-center justify-between group w-full mt-6">
            <span className="text-xl font-medium">Developer Journal</span>
            <span className="p-3 rounded-full bg-white text-black group-hover:scale-[1.1] transition-transform duration-300 ease-out transform-gpu">
              <ArrowUpRight />
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={card}
          whileHover={{ scale: 1.02 }}
          className="bg-[#171717] p-8 rounded-[2.5rem] w-[320px] hover:bg-[#262626] transition-colors"
        >
          <Lines />
          <div className="flex items-center justify-between group w-full mt-6">
            <span className="text-xl font-medium">Release Notes</span>
            <span className="p-3 rounded-full bg-white text-black group-hover:scale-[1.1] transition-transform duration-300 ease-out transform-gpu">
              <ArrowUpRight />
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={card}
          whileHover={{ scale: 1.02 }}
          className="bg-[#171717] p-8 rounded-[2.5rem] w-[320px] hover:bg-[#262626] transition-colors"
        >
          <Squares />
          <div className="flex items-center justify-between group w-full mt-6">
            <span className="text-xl font-medium">Product Updates</span>
            <span className="p-3 rounded-full bg-white text-black group-hover:scale-[1.1] transition-transform duration-300 ease-out transform-gpu">
              <ArrowUpRight />
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
