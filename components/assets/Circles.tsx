export function Circles() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="120"
        cy="120"
        r="80"
        stroke="#383838"
        strokeWidth="1.5"
        className="dark:stroke-neutral-700"
      ></circle>
      <circle
        cx="120"
        cy="120"
        r="60"
        stroke="#383838"
        strokeWidth="1.5"
        className="dark:stroke-neutral-700"
      ></circle>
      <circle
        cx="120"
        cy="120"
        r="40"
        stroke="#5227FF"
        strokeWidth="2"
      ></circle>
      <circle cx="120" cy="120" r="20" fill="#5227FF"></circle>
    </svg>
  );
}
