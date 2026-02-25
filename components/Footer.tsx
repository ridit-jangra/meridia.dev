import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col gap-10 w-full text-white px-6 md:px-12 lg:px-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 z-5">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-medium flex gap-2 items-center">
            <Image
              src={"/logos/meridia-black.svg"}
              alt="meridia"
              width={30}
              height={30}
            />
            Meridia
          </span>

          <p className="text-[18px] text-white/70 max-w-sm">
            Build with intention. <br />
            Let AI assist — not replace.
          </p>
        </div>

        <div className="flex flex-col md:flex-row border border-white/20 w-full z-5">
          <div className="p-7 hover:bg-[#1a1a1a] transition-colors border-b md:border-b-0 md:border-r border-white/10 md:w-1/3">
            <span className="font-medium">Product</span>
            <ul className="mt-4 text-white/60 flex flex-col gap-3">
              <li className="cursor-pointer hover:text-white transition-colors">
                How It Works
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Workflows
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Context Engine
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Download
              </li>
            </ul>
          </div>

          <div className="p-7 hover:bg-[#1a1a1a] transition-colors border-b md:border-b-0 md:border-r border-white/10 md:w-1/3">
            <span className="font-medium">Developers</span>
            <ul className="mt-4 text-white/60 flex flex-col gap-3">
              <li className="cursor-pointer hover:text-white transition-colors">
                Documentation
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                API Reference
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                GitHub
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Changelog
              </li>
            </ul>
          </div>

          <div className="p-7 hover:bg-[#1a1a1a] transition-colors md:w-1/3">
            <span className="font-medium">Company</span>
            <ul className="mt-4 text-white/60 flex flex-col gap-3">
              <li className="cursor-pointer hover:text-white transition-colors">
                Vision
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                About
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Contact
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Privacy
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span className="text-white/10 font-bold text-[25rem] text-center select-none z-5">
        MERIDIA
      </span>
    </div>
  );
}
