export default function BogolanDivider({
  tone = "clay",
  className = "",
}: {
  tone?: "clay" | "bone" | "indigo";
  className?: string;
}) {
  const color =
    tone === "clay"
      ? "var(--color-clay)"
      : tone === "indigo"
      ? "var(--color-indigo)"
      : "var(--color-bone-dim)";

  // A single repeatable motif unit, referencing the diamond / stepped-triangle
  // linework common to Malian bogolan cloth — rendered thin and quiet, as a
  // structural rule rather than decoration.
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`w-full overflow-hidden ${className}`}
      style={{ height: "18px" }}
    >
      <svg
        width="100%"
        height="18"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 720 18"
      >
        <defs>
          <pattern
            id={`bogolan-${tone}`}
            width="36"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 9 L9 0 L18 9 L9 18 Z"
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
            <path
              d="M18 9 L27 0 L36 9 L27 18 Z"
              fill="none"
              stroke={color}
              strokeWidth="1"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="720" height="18" fill={`url(#bogolan-${tone})`} />
      </svg>
    </div>
  );
}
