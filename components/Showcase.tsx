"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Showcase() {
  const items = [
    "https://cdn.dribbble.com/userupload/46029941/file/f3b0e906d38980bf48e008f5542a58b5.jpg?resize=1024x1693&vertical=center",
    "https://cdn.dribbble.com/userupload/45777759/file/acf14657b38cd25e64bb16b4f201bef8.jpg?resize=1024x1529&vertical=center",
    "https://cdn.dribbble.com/userupload/46068721/file/3910087a60fe6f781ddae7c14daf1804.jpg?resize=1024x1589&vertical=center",
    "https://cdn.dribbble.com/userupload/46030284/file/8dfdc9a8b09fdbd99b010c1dcb279841.jpg?resize=1024x1693&vertical=center",
  ];

  const heights = [
    "h-[260px] md:h-[320px] lg:h-[380px]",
    "h-[320px] md:h-[400px] lg:h-[480px]",
    "h-[280px] md:h-[360px] lg:h-[420px]",
    "h-[340px] md:h-[430px] lg:h-[520px]",
  ];

  return (
    <div className="text-white w-full px-6 md:px-12 lg:px-20 py-12 lg:py-14 flex flex-col gap-8">
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-[3rem] font-medium z-5"
        style={{
          lineHeight: "3.4rem",
        }}
      >
        Code at the speed of thought.
        <br /> Create without limits.
      </motion.span>

      <button className="bg-white text-black text-xl rounded-full font-jetbrains px-7 py-2 hover:bg-white/90 transition-colors cursor-pointer w-max z-5">
        Discover Meridia
      </button>

      <div className="relative w-full overflow-hidden mt-2">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24  z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" />

        <div
          className="flex flex-row gap-6 items-end horizontal-marquee w-max"
          style={{ ["--duration" as any]: "30s" }}
        >
          {[...items, ...items].map((src, i) => {
            const h = heights[i % heights.length];
            return (
              <div
                key={i}
                className={`shrink-0 w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px] ${h} rounded-3xl overflow-hidden bg-white/5`}
              >
                <Image
                  src={src}
                  alt=""
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
