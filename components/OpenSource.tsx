"use client";

import { motion, type Variants } from "framer-motion";

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
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

export function OpenSource() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-white bg-neutral-900 w-full h-[50vh] mb-20 px-6 md:px-12 lg:px-20 py-12 lg:py-14 flex flex-col gap-8 items-center justify-center"
    >
      <motion.span
        variants={item}
        className="font-medium text-[4rem] text-center z-5"
      >
        Proudly{" "}
        <span className="relative pb-2 italic text-white/80 hover:text-indigo-500 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-3 after:w-full after:h-px after:bg-white/80">
          Open Source
        </span>
      </motion.span>

      <motion.a
        variants={item}
        className="bg-white text-black text-2xl rounded-3xl font-jetbrains px-7 py-3 hover:bg-white/90 transition-colors cursor-pointer z-5"
        href="https://github.com/ridit-jangra/Meridia"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </motion.a>
    </motion.div>
  );
}
