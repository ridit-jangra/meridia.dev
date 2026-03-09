"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MeridiaLogo from "../../../public/logos/meridia-black.svg";
import { Badge } from "@/components/ui/badge";
import {
  AppWindow,
  Download,
  DownloadIcon,
  Pentagon,
  Apple,
} from "lucide-react";
import Image from "next/image";
import TargetCursor from "@/components/react-bits/TargetCursor";
import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";

const DarkVeil = dynamic(() => import("@/components/react-bits/DarkVeil"), {
  ssr: false,
});

const ease = [0.16, 1, 0.3, 1] as const;

const page: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const up: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
};

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type Release = {
  id: number;
  tag_name: string;
  name: string | null;
  draft: boolean;
  prerelease: boolean;
  assets: ReleaseAsset[];
};

type VersionItem = {
  v: string;
  prerelease: boolean;
  win: { label: string; url: string }[];
  mac: { label: string; url: string }[];
  linux: { label: string; url: string }[];
};

function cleanVersion(tag: string) {
  return tag.replace(/^v/i, "").trim();
}

function pickLabel(name: string) {
  const lower = name.toLowerCase();

  const arch =
    lower.includes("arm64") || lower.includes("aarch64")
      ? "ARM64"
      : lower.includes("x64") ||
          lower.includes("amd64") ||
          lower.includes("x86_64")
        ? "x64"
        : "";

  if (lower.includes(".appimage"))
    return `Linux AppImage${arch ? ` (${arch})` : ""}`;
  if (lower.includes(".deb")) return `Linux .deb${arch ? ` (${arch})` : ""}`;
  if (lower.includes(".rpm")) return `Linux .rpm${arch ? ` (${arch})` : ""}`;

  if (lower.includes(".dmg")) return `macOS .dmg${arch ? ` (${arch})` : ""}`;
  if (
    lower.includes(".zip") &&
    (lower.includes("mac") || lower.includes("darwin") || lower.includes("osx"))
  )
    return `macOS .zip${arch ? ` (${arch})` : ""}`;
  if (
    lower.includes("mac") ||
    lower.includes("darwin") ||
    lower.includes("osx")
  )
    return `macOS${arch ? ` (${arch})` : ""}`;

  if (lower.includes(".msi")) return `Windows .msi${arch ? ` (${arch})` : ""}`;
  if (lower.includes(".exe")) return `Windows .exe${arch ? ` (${arch})` : ""}`;
  if (
    lower.includes(".zip") &&
    (lower.includes("win") || lower.includes("windows"))
  )
    return `Windows .zip${arch ? ` (${arch})` : ""}`;

  if (lower.includes("win") || lower.includes("windows"))
    return `Windows${arch ? ` (${arch})` : ""}`;

  return name;
}

function isWindowsAsset(name: string) {
  const n = name.toLowerCase();
  if (n.endsWith(".blockmap") || n.endsWith(".yml") || n.endsWith(".yaml"))
    return false;
  return (
    n.includes("win") ||
    n.includes("windows") ||
    n.endsWith(".exe") ||
    n.endsWith(".msi") ||
    (n.endsWith(".zip") && (n.includes("win") || n.includes("windows")))
  );
}

function isMacAsset(name: string) {
  const n = name.toLowerCase();
  if (n.endsWith(".blockmap") || n.endsWith(".yml") || n.endsWith(".yaml"))
    return false;
  return (
    n.includes("mac") ||
    n.includes("darwin") ||
    n.includes("osx") ||
    n.endsWith(".dmg") ||
    (n.endsWith(".zip") &&
      (n.includes("mac") || n.includes("darwin") || n.includes("osx")))
  );
}

function isLinuxAsset(name: string) {
  const n = name.toLowerCase();
  if (n.endsWith(".blockmap") || n.endsWith(".yml") || n.endsWith(".yaml"))
    return false;
  return (
    n.includes("linux") ||
    n.endsWith(".appimage") ||
    n.endsWith(".deb") ||
    n.endsWith(".rpm") ||
    n.endsWith(".tar.gz") ||
    n.endsWith(".tgz")
  );
}

export default function Page() {
  const [versions, setVersions] = useState<VersionItem[]>([]);
  const [latest, setLatest] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/ridit-jangra/Meridia/releases?per_page=20",
          { headers: { Accept: "application/vnd.github+json" } },
        );
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = (await res.json()) as Release[];

        const releases = data.filter((r) => !r.draft);

        const mapped: VersionItem[] = releases.map((r) => {
          const v = cleanVersion(r.tag_name || r.name || "");
          const win = r.assets
            .filter((a) => isWindowsAsset(a.name))
            .map((a) => ({
              label: pickLabel(a.name),
              url: a.browser_download_url,
            }));

          const mac = r.assets
            .filter((a) => isMacAsset(a.name))
            .map((a) => ({
              label: pickLabel(a.name),
              url: a.browser_download_url,
            }));

          const linux = r.assets
            .filter((a) => isLinuxAsset(a.name))
            .map((a) => ({
              label: pickLabel(a.name),
              url: a.browser_download_url,
            }));

          return { v, prerelease: r.prerelease, win, mac, linux };
        });

        const filtered = mapped.filter(
          (m) => m.v && (m.win.length || m.mac.length || m.linux.length),
        );
        setVersions(filtered);
        setLatest(filtered[0]?.v ?? "");
      } catch {
        setVersions([]);
        setLatest("");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  const latestWindowsUrl = useMemo(() => {
    const v = versions.find((x) => x.v === latest) ?? versions[0];
    if (!v) return "";
    return v.win[0]?.url ?? "";
  }, [versions, latest]);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="fixed inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <motion.div
        variants={page}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-12 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-20"
      >
        <motion.div
          variants={up}
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16 pb-10 sm:pb-14 md:pb-20 border-b border-white/13 text-white"
        >
          <motion.div variants={fade} className="shrink-0">
            <Image
              src={MeridiaLogo}
              alt="Meridia"
              width={150}
              height={150}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px]"
              priority
            />
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.span
              variants={up}
              className="text-[1.9rem] sm:text-[2.1rem] md:text-[2.3rem] font-medium"
            >
              Download Meridia
            </motion.span>

            <motion.span
              variants={up}
              className="text-white/80 text-[1.05rem] sm:text-[1.15rem] md:text-[1.3rem] mb-1"
            >
              Available for Windows, macOS, and Linux.
            </motion.span>

            <motion.a
              variants={up}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={latestWindowsUrl || undefined}
              className={`bg-white cursor-target text-black rounded-full py-2 px-6 hover:bg-white/85 transition-colors cursor-pointer flex items-center justify-center gap-2 w-max ${
                !latestWindowsUrl ? "pointer-events-none opacity-60" : ""
              }`}
            >
              Download for Windows <DownloadIcon />
            </motion.a>

            {loading && (
              <span className="text-white/50 text-sm sm:text-base mt-2">
                Loading versions from GitHub…
              </span>
            )}
          </div>
        </motion.div>

        <motion.div variants={up} className="mt-6 sm:mt-8">
          <Accordion
            type="single"
            collapsible
            defaultValue={latest}
            value={latest || undefined}
            onValueChange={(v) => setLatest(v)}
            className="w-full text-white/80 border-b border-white/13 py-1 pt-2"
          >
            {versions.map((version) => (
              <AccordionItem
                value={version.v}
                key={version.v}
                className="border-white/13 cursor-pointer"
              >
                <AccordionTrigger className="text-xl sm:text-2xl cursor-target">
                  <span className="flex items-center gap-3 sm:gap-4">
                    {version.v}
                    {version.v === (latest || versions[0]?.v) && (
                      <Badge
                        className="text-[12px] sm:text-[13px] px-3 py-0.5 mt-1"
                        variant="secondary"
                      >
                        Latest
                      </Badge>
                    )}
                    {version.prerelease && (
                      <Badge
                        className="text-[12px] sm:text-[13px] px-3 py-0.5 mt-1"
                        variant="destructive"
                      >
                        Pre-release
                      </Badge>
                    )}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 sm:gap-5">
                  {/* Windows */}
                  <div className="bg-neutral-900 rounded-2xl w-full">
                    <span className="flex items-center gap-2 text-base sm:text-lg pb-2 pt-4 border-b border-white/13 px-4 mb-1">
                      <AppWindow />
                      Windows
                    </span>
                    <div className="flex flex-col">
                      {version.win.length ? (
                        version.win.map((w) => (
                          <a
                            key={w.url}
                            href={w.url}
                            className="w-full text-[14px] sm:text-[15px] cursor-target px-4 py-3 hover:bg-neutral-800 transition-colors last:rounded-b-2xl cursor-pointer flex items-center justify-between text-white/30 hover:text-white/90"
                          >
                            <p className="text-white/90">{w.label}</p>
                            <Download size={21} />
                          </a>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-white/40 text-sm">
                          No Windows builds found for this release.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* macOS */}
                  <div className="bg-neutral-900 rounded-2xl w-full">
                    <span className="flex items-center gap-2 text-base sm:text-lg pb-2 pt-4 border-b border-white/13 px-4 mb-1">
                      <Apple />
                      macOS
                    </span>
                    <div className="flex flex-col">
                      {version.mac.length ? (
                        version.mac.map((w) => (
                          <a
                            key={w.url}
                            href={w.url}
                            className="w-full cursor-target text-[14px] sm:text-[15px] px-4 py-3 hover:bg-neutral-800 transition-colors last:rounded-b-2xl cursor-pointer flex items-center justify-between text-white/30 hover:text-white/90"
                          >
                            <p className="text-white/90">{w.label}</p>
                            <Download size={21} />
                          </a>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-white/40 text-sm">
                          No macOS builds found for this release.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Linux */}
                  <div className="bg-neutral-900 rounded-2xl w-full">
                    <span className="flex items-center gap-2 text-base sm:text-lg pb-2 pt-4 border-b border-white/13 px-4 mb-1">
                      <Pentagon />
                      Linux
                    </span>
                    <div className="flex flex-col">
                      {version.linux.length ? (
                        version.linux.map((w) => (
                          <a
                            key={w.url}
                            href={w.url}
                            className="w-full cursor-target text-[14px] sm:text-[15px] px-4 py-3 hover:bg-neutral-800 transition-colors last:rounded-b-2xl cursor-pointer flex items-center justify-between text-white/30 hover:text-white/90"
                          >
                            <p className="text-white/90">{w.label}</p>
                            <Download size={21} />
                          </a>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-white/40 text-sm">
                          No Linux builds found for this release.
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {!loading && versions.length === 0 && (
            <div className="mt-6 text-white/60">
              No releases found (or GitHub rate-limited this request). Try again
              later.
            </div>
          )}
        </motion.div>
      </motion.div>

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
    </div>
  );
}
