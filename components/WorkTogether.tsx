"use client";

import { Badge } from "./ui/badge";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const section: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const title: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
};

export function WorkTogether() {
  return (
    <motion.div
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-white w-full px-6 md:px-12 lg:px-20 py-12 lg:py-14 flex flex-col gap-8"
    >
      <motion.span
        variants={title}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-medium z-5"
      >
        You code. AI collaborates.
      </motion.span>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
      >
        <motion.div
          variants={item}
          className="group bg-[#0E1221] p-6 rounded-3xl min-h-[14rem] sm:min-h-[16rem] md:min-h-0 md:h-72 flex flex-col justify-between cursor-pointer"
        >
          <Badge className="z-5 bg-[#0A0A0A] text-base sm:text-lg">
            How it works
          </Badge>

          <p className="z-5 text-lg sm:text-xl md:text-2xl transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.02] font-medium">
            See how Meridia collaborates without taking control.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="group bg-[#071411] p-6 rounded-3xl min-h-[14rem] sm:min-h-[16rem] md:min-h-0 md:h-72 flex flex-col justify-between cursor-pointer"
        >
          <Badge className="z-5 bg-[#0A0A0A] text-base sm:text-lg">
            Workflows
          </Badge>

          <p className="z-5 text-lg sm:text-xl md:text-2xl transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.02] font-medium">
            Shape the loop: prompts, context, and tools — your way.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="group bg-[#1F0812] p-6 rounded-3xl min-h-[14rem] sm:min-h-[16rem] md:min-h-0 md:h-72 flex flex-col justify-between cursor-pointer lg:col-span-2"
        >
          <Badge className="z-5 bg-[#0A0A0A] text-base sm:text-lg">
            Get started
          </Badge>

          <p className="z-5 text-lg sm:text-xl md:text-2xl transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.02] font-medium">
            Start building in minutes. Stay fast. Stay in charge.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
