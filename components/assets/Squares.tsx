export function Squares() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="40"
        y="140"
        width="40"
        height="40"
        stroke="#383838"
        strokeWidth="1.5"
        className="dark:stroke-neutral-700"
      ></rect>
      <rect
        x="90"
        y="100"
        width="40"
        height="40"
        stroke="#383838"
        strokeWidth="1.5"
        className="dark:stroke-neutral-700"
      ></rect>
      <rect x="140" y="60" width="40" height="40" fill="#5227FF"></rect>
      <circle cx="200" cy="35" r="20" stroke="#5227FF" strokeWidth="2"></circle>
    </svg>
  );
}
