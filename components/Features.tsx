"use client";

import { Collab } from "./assets/Collab";
import { Files } from "./assets/Files";
import { Messages } from "./assets/Messages";
import { RealTime } from "./assets/RealTime";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export function Features() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-white w-full px-6 md:px-12 lg:px-20 py-12 lg:py-14 flex flex-col gap-8"
    >
      <motion.span
        variants={item}
        className="text-4xl md:text-5xl lg:text-[3rem] font-medium z-5"
      >
        Work Together. Instantly.
      </motion.span>

      <motion.div
        variants={item}
        className="flex flex-col lg:flex-row border border-white/20 rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col lg:border-r border-white/20">
          <div className="flex flex-col md:flex-row border-b border-white/20">
            <motion.div
              variants={item}
              className="md:border-r border-white/20 p-6 flex flex-col gap-2 md:w-1/2"
            >
              <RealTime />
              <span className="font-medium text-lg sm:text-xl z-5">
                Context-aware conversations
              </span>
              <span className="text-sm sm:text-[16px] text-white/70 z-5">
                Chat with AI inside your codebase — grounded in your files, not
                guesswork.
              </span>
            </motion.div>

            <motion.div
              variants={item}
              className="p-6 flex flex-col gap-2 md:w-1/2"
            >
              <Files />
              <span className="font-medium text-lg sm:text-xl z-5">
                Workspace-level context
              </span>
              <span className="text-sm sm:text-[16px] text-white/70 z-5">
                AI understands your project structure, history, and intent —
                instantly.
              </span>
            </motion.div>
          </div>

          <motion.div variants={item} className="p-6">
            <div className="flex flex-col gap-2">
              <Messages />
              <span className="font-medium text-lg sm:text-xl z-5">
                Built for real builders
              </span>
              <span className="text-sm sm:text-[16px] text-white/70 z-5">
                Designed for developers who want control — not autopilot.
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="w-full p-6 flex flex-col gap-2">
          <div className="w-full">
            <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-full">
              <Collab />
            </div>
          </div>
          <span className="font-medium text-lg sm:text-xl z-5">
            Human × AI collaboration
          </span>
          <span className="text-sm sm:text-[16px] text-white/70 z-5">
            AI suggests. You decide. The loop stays yours.
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
