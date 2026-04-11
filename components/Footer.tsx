import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col gap-10 w-full text-white px-5 sm:px-10 md:px-16 lg:px-20 pb-16 sm:pb-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
        <div className="flex flex-col gap-4 shrink-0">
          <span className="text-xl font-medium flex gap-2 items-center">
            <Image
              src={"/logos/meridia-black.svg"}
              alt="meridia"
              width={30}
              height={30}
            />
            Meridia
          </span>
          <p className="text-base sm:text-[18px] text-white/70 max-w-sm">
            Build with intention. <br />
            Let AI assist — not replace.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 border border-white/20 w-full">
          <div className="p-5 sm:p-7 hover:bg-[#1a1a1a] transition-colors border-b sm:border-b-0 border-r border-white/10">
            <span className="font-medium text-sm sm:text-base">Product</span>
            <ul className="mt-3 sm:mt-4 text-white/60 flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
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

          <div className="p-5 sm:p-7 hover:bg-[#1a1a1a] transition-colors border-b sm:border-b-0 sm:border-r border-white/10">
            <span className="font-medium text-sm sm:text-base">Developers</span>
            <ul className="mt-3 sm:mt-4 text-white/60 flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
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

          <div className="col-span-2 sm:col-span-1 p-5 sm:p-7 hover:bg-[#1a1a1a] transition-colors">
            <span className="font-medium text-sm sm:text-base">Company</span>
            <ul className="mt-3 sm:mt-4 text-white/60 flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
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

      <span
        className="text-white/10 font-bold select-none text-center leading-none
        text-[5rem] xs:text-[7rem] sm:text-[8rem] md:text-[14rem] lg:text-[18rem] xl:text-[17rem] 2xl:text-[15rem]"
      >
        MERIDIA
      </span>
    </div>
  );
}
