import { DitherCursor } from "@/components/DitherCursor";
import Grainient from "@/components/Grainient";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <div
      style={{ width: "full", height: "100vh", position: "relative" }}
      className="p-20"
    >
      <Grainient
        className="rounded-[5rem]"
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
      <div className="absolute bottom-0 right-0 w-220 h-100 bg-black rounded-tl-[5rem] p-12 text-white/60">
        <div className="absolute bottom-[20%] -left-[9%] w-20 h-20 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>
        <div className="absolute -top-[20.1%] right-[9.1%] w-20 h-20 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full rounded-br-[5rem] shadow-[12px_12px_0_18px_black]" />
        </div>

        <ul className="absolute right-[12%] bottom-[20%] text-xl flex flex-col gap-5 items-end z-10">
          <li className="hover:text-white cursor-pointer flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Documentation
            <ArrowUpRight size={21} />
          </li>
          <li className="hover:text-white cursor-pointer flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            API Reference
            <ArrowUpRight size={21} />
          </li>
          <li className="hover:text-white cursor-pointer flex items-center gap-2 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Get Started
            <ArrowUpRight size={21} />
          </li>
        </ul>
      </div>
      <span className="absolute bottom-[20%] left-[7%] text-white text-[7rem] z-10">
        Meridia
      </span>
      <span className="text-[5rem] text-white/80 absolute bottom-[10%] left-[7%] italic">
        You code. AI assists.
      </span>
    </div>
  );
}
