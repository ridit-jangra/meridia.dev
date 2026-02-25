import { Circles } from "@/components/assets/Circles";
import { Lines } from "@/components/assets/Lines";
import { Squares } from "@/components/assets/Squares";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-[#0A0A0A] text-white">
      <div className="flex flex-col" style={{ lineHeight: "5rem" }}>
        <p className="text-white/50 text-[4rem]">Oops!</p>
        <p className="text-white text-[4.5rem]">
          That page doesn't seem to exist.
        </p>
        <button className="bg-white text-black rounded-full mt-5 px-10 py-4 text-xl font-medium hover:bg-white/90 transition-colors cursor-pointer w-max">
          Go to homepage
        </button>
      </div>
      <div className="flex gap-7 items-center">
        <div className="bg-[#171717] p-8 rounded-[2.5rem] w-100 hover:bg-[#262626] transition-colors">
          <Circles />
          <div className="flex items-center justify-between group w-full">
            <span className="text-xl font-medium">Blog</span>
            <span className="p-3 rounded-full bg-white text-black group-hover:scale-[1.1] transition-transform duration-300 ease-out transform-gpu">
              <ArrowUpRight />
            </span>
          </div>
        </div>
        <div className="bg-[#171717] p-8 rounded-[2.5rem] w-100 hover:bg-[#262626] transition-colors">
          <Lines />
          <div className="flex items-center justify-between group w-full">
            <span className="text-xl font-medium">Changelog</span>
            <span className="p-3 rounded-full bg-white text-black group-hover:scale-[1.1] transition-transform duration-300 ease-out transform-gpu">
              <ArrowUpRight />
            </span>
          </div>
        </div>
        <div className="bg-[#171717] p-8 rounded-[2.5rem] w-100 hover:bg-[#262626] transition-colors">
          <Squares />
          <div className="flex items-center justify-between group w-full">
            <span className="text-xl font-medium">News</span>
            <span className="p-3 rounded-full bg-white text-black group-hover:scale-[1.1] transition-transform duration-300 ease-out transform-gpu">
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
