import { ScrollArea } from "../ui/scroll-area";
import { Header } from "./Header";
import { DocsSidebar } from "./Sidebar";

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter">
      <Header />

      <div className="flex flex-row gap-10 h-[calc(100vh-4.1rem)]">
        <DocsSidebar />

        <ScrollArea className="h-full w-full">
          <main className="min-w-0 flex-1 py-6">{children}</main>
        </ScrollArea>
      </div>
    </div>
  );
}
