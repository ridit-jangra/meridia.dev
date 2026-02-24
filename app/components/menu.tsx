export function Menu() {
  return (
    <div className="fixed top-[13%] bg-transparent flex items-center justify-between w-full text-white px-35 z-500">
      <span className="text-2xl cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
        Meridia
      </span>
      <div className="flex items-center gap-2 z-50">
        <button className="bg-white/20 rounded-full px-5 py-2 hover:bg-white/25 transition-colors cursor-pointer">
          Download
        </button>
      </div>
    </div>
  );
}
