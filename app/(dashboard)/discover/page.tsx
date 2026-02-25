"use client";

import { Blogs } from "./components/Blogs";
import { Hero } from "./components/Hero";

export default function Discover() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <Hero />
      <Blogs />
    </div>
  );
}
