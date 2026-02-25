import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MeridiaLogo from "../../../public/logos/meridia-black.svg";
import { Badge } from "@/components/ui/badge";
import { AppWindow, Download, DownloadIcon, Pentagon } from "lucide-react";
import Image from "next/image";
import TargetCursor from "@/components/TargetCursor";
import Beams from "@/components/Beams";
import DarkVeil from "@/components/DarkVeil";

export default function Page() {
  const latest = "2.4";

  const versions = [
    {
      v: "2.4",
      win: [
        {
          label: "Windows (ARM64)",
        },
        {
          label: "Windows (Ax64)",
        },
      ],
      linux: [
        {
          label: "Linux .deb (x64)",
        },
        {
          label: "Linux AppImage (x64)",
        },
      ],
    },
    {
      v: "2.3",
      win: [
        {
          label: "Windows (ARM64)",
        },
        {
          label: "Windows (Ax64)",
        },
      ],
      linux: [
        {
          label: "Linux .deb (x64)",
        },
        {
          label: "Linux AppImage (x64)",
        },
      ],
    },
    {
      v: "2.2",
      win: [
        {
          label: "Windows (ARM64)",
        },
        {
          label: "Windows (Ax64)",
        },
      ],
      linux: [
        {
          label: "Linux .deb (x64)",
        },
        {
          label: "Linux AppImage (x64)",
        },
      ],
    },
    {
      v: "2.1",
      win: [
        {
          label: "Windows (ARM64)",
        },
        {
          label: "Windows (Ax64)",
        },
      ],
      linux: [
        {
          label: "Linux .deb (x64)",
        },
        {
          label: "Linux AppImage (x64)",
        },
      ],
    },
    {
      v: "2.0",
      win: [
        {
          label: "Windows (ARM64)",
        },
        {
          label: "Windows (Ax64)",
        },
      ],
      linux: [
        {
          label: "Linux .deb (x64)",
        },
        {
          label: "Linux AppImage (x64)",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <div className="absolute top-0 w-full px-25 pt-20">
        <div className="flex items-center gap-15 pb-20 border-b border-white/13 text-white">
          <Image src={MeridiaLogo} alt="Meridia" width={150} height={150} />
          <div className="flex flex-col gap-2">
            <span className="text-[2.3rem] font-medium">Download Meridia</span>
            <span className="text-white/80 text-[1.3rem] mb-1">
              Available for Windows, and Linux.
            </span>
            <button className="bg-white cursor-target text-black rounded-full py-2 hover:bg-white/85 transition-colors cursor-pointer flex items-center justify-center gap-2">
              Download for Windows <DownloadIcon />
            </button>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue={latest}
          className="w-full text-white/80 border-b border-white/13 py-1 pt-2"
        >
          {versions.map((version, i) => (
            <AccordionItem
              value={version.v}
              key={i}
              className="border-white/13 cursor-pointer"
            >
              <AccordionTrigger className="text-2xl cursor-target">
                <span className="flex items-center gap-4">
                  {version.v}
                  {version.v === latest && (
                    <Badge
                      className="text-[13px] px-3 py-0.5 mt-1"
                      variant={"secondary"}
                    >
                      Latest
                    </Badge>
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 w-full items-center gap-5">
                <div className="bg-neutral-900 rounded-2xl h-full w-full">
                  <span className="flex items-center gap-2 text-lg pb-2 pt-4 border-b border-white/13 px-4 mb-1">
                    <AppWindow />
                    Windows
                  </span>
                  <div className="flex flex-col">
                    {version.win.map((w, i) => (
                      <span
                        key={i}
                        className="w-full text-[15px] cursor-target px-4 py-3 hover:bg-neutral-800 transition-colors rounded-br-2xl rounded-bl-2xl cursor-pointer flex items-center justify-between text-white/30 hover:text-white/90"
                      >
                        <p className="text-white/90">{w.label}</p>
                        <Download size={21} />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-neutral-900 rounded-2xl h-full w-full">
                  <span className="flex items-center gap-2 text-lg pb-2 pt-4 border-b border-white/13 px-4 mb-1">
                    <Pentagon />
                    Linux
                  </span>
                  <div className="flex flex-col">
                    {version.linux.map((w, i) => (
                      <span
                        key={i}
                        className="w-full cursor-target text-[15px] px-4 py-3 hover:bg-neutral-800 transition-colors rounded-br-2xl rounded-bl-2xl cursor-pointer flex items-center justify-between text-white/30 hover:text-white/90"
                      >
                        <p className="text-white/90">{w.label}</p>
                        <Download size={21} />
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
