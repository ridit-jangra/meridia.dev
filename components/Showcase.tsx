// "https://cdn.dribbble.com/userupload/42539386/file/original-e4b00df4bf125ffa9671da03d1b1825d.jpg?resize=1024x1024&vertical=center",
// "https://cdn.dribbble.com/userupload/18419867/file/original-839c938cc10c496749f9f9f74ef8429c.png?resize=1024x1024&vertical=center",
// "https://cdn.dribbble.com/userupload/14788444/file/original-eb0f48cf40a5711bd2058016690fa2b5.jpg?resize=1024x1448&vertical=center",
// "https://cdn.dribbble.com/userupload/5090398/file/original-3efa5ba2bd12634c44d877dfa43280e7.jpg?resize=1024x461&vertical=center",
// "https://cdn.dribbble.com/userupload/6245607/file/original-0df7bfd2e4018c5a6574f41b359fb686.png?resize=1024x768&vertical=center",
// "https://cdn.dribbble.com/userupload/21235016/file/original-17bb05b1d4bb4fef4e9a4e457a133f90.png?resize=752x564&vertical=center",
// "https://cdn.dribbble.com/userupload/9862672/file/original-cb67aa77b4bb8105c42057c1df9102bb.jpg?resize=1024x768&vertical=center",
// "https://cdn.dribbble.com/userupload/44359194/file/54c14d261a862205c214f09f16cdbb5a.webp?resize=1024x772&vertical=center",
// "https://i.pinimg.com/736x/e7/5c/24/e75c24efdd44c5f7acacb4d7d844a04a.jpg",
// "https://i.pinimg.com/736x/26/d7/21/26d72191d5364b318b7d26b265896dac.jpg",
// "https://i.pinimg.com/1200x/d8/4f/b9/d84fb9a7305b5221ac81c191791f2c8b.jpg",

"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const rail: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

export function Showcase() {
  const router = useRouter();

  const items = [
    "https://i.pinimg.com/736x/f5/3d/c7/f53dc7a7b3c8e24686681d08399b69d3.jpg",
    "https://i.pinimg.com/736x/96/8e/fe/968efec514a13c4debc3609132409008.jpg",
    "https://i.pinimg.com/1200x/1e/8c/34/1e8c34fa4a27f2cf55d2a29a56c1132b.jpg",
    "https://i.pinimg.com/736x/d5/42/94/d5429419fb7b46940f68123d28175b36.jpg",
  ];

  const heights = [
    "h-[210px] xs:h-[240px] sm:h-[260px] md:h-[320px] lg:h-[380px]",
    "h-[250px] xs:h-[290px] sm:h-[320px] md:h-[400px] lg:h-[480px]",
    "h-[220px] xs:h-[250px] sm:h-[280px] md:h-[360px] lg:h-[420px]",
    "h-[270px] xs:h-[310px] sm:h-[340px] md:h-[430px] lg:h-[520px]",
  ];

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
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-medium z-5"
        style={{ lineHeight: "1.08" }}
      >
        Code at the speed of thought.
        <br /> Create without limits.
      </motion.span>

      <motion.div variants={item} className="z-5">
        <button
          className="bg-white text-black text-base sm:text-lg md:text-xl rounded-full font-jetbrains px-5 sm:px-6 md:px-7 py-2 hover:bg-white/90 transition-colors cursor-pointer w-max"
          onClick={() => router.push("/discover")}
        >
          Discover Meridia
        </button>
      </motion.div>

      <motion.div
        variants={rail}
        className="relative w-full overflow-hidden mt-2"
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-24 z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-24 z-10" />

        <div
          className="flex flex-row gap-4 sm:gap-5 md:gap-6 items-end horizontal-marquee w-max"
          style={{ ["--duration" as any]: "30s" }}
        >
          {[...items, ...items].map((src, i) => {
            const h = heights[i % heights.length];
            return (
              <motion.div
                key={i}
                variants={card}
                className={`shrink-0 w-[200px] xs:w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] ${h} rounded-3xl overflow-hidden bg-white/5`}
              >
                <Image
                  src={src}
                  alt=""
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                  priority={i < 2}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
