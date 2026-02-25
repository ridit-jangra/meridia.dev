import { BeAmongFirst } from "@/components/BeAmongFirst";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WorkTogether } from "@/components/WorkTogether";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A]">
      <Hero />
      <WorkTogether />
      <Showcase />
      <Features />
      <BeAmongFirst />
      <Footer />
    </div>
  );
}
