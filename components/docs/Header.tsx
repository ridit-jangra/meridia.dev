"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between text-white p-4 border-b border-b-white/13 px-20">
      <span
        className="group hover:text-white cursor-pointer text-2xl flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        onClick={() => router.push("/")}
      >
        Meridia
        <ArrowUpRight
          size={20}
          className="text-white/70 opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </span>
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-3">
          <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
            About
          </li>
        </ul>
        {/* <input type="text" /> */}
      </div>
    </div>
  );
}
