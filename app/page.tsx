import { Hero } from "./components/hero";
import { Menu } from "./components/menu";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Menu />
      <Hero />
    </div>
  );
}
