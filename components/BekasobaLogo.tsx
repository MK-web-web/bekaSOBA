export interface BekasobaLogoProps {
  className?: string;
  color?: string;
  prefixColor?: string;
  title?: string;
}

/** Vector bekaSOBA wordmark — baobab silhouette in B counter. */
export default function BekasobaLogo({
  className = "",
  color = "#0F6B4D",
  prefixColor = "#083D2E",
  title = "bekaSOBA",
}: BekasobaLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 196 40"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <defs>
        <mask id="bekasoba-baobab-cut">
          <rect width="196" height="40" fill="white" />
          <path
            fill="black"
            d="M134 12.5c0-3.2 2.4-5.8 5.4-5.8 1.2 0 2.2.4 3 1-.8 1.2-1.2 2.6-1.2 4 0 2.8 1.8 5 4.4 5.8-.6 1.4-2 2.4-3.6 2.4-2.8 0-5-2.2-5-5.2 0-1.4.4-2.6 1-3.6-1.2-.6-2-1.8-2-3.2zm5.4 8.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2z"
          />
          <rect x="137.2" y="22.5" width="2.4" height="7" rx="0.3" fill="black" />
        </mask>
      </defs>

      <text
        x="0"
        y="27"
        fill={prefixColor}
        fontFamily="'Work Sans', 'Helvetica Neue', Arial, sans-serif"
        fontSize="15"
        fontWeight="500"
      >
        beka
      </text>

      <text
        x="48"
        y="30"
        fill={color}
        fontFamily="'Work Sans', 'Helvetica Neue', Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.5"
      >
        S
      </text>
      <text
        x="66"
        y="30"
        fill={color}
        fontFamily="'Work Sans', 'Helvetica Neue', Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.5"
      >
        O
      </text>
      <text
        x="88"
        y="30"
        fill={color}
        fontFamily="'Work Sans', 'Helvetica Neue', Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.5"
        mask="url(#bekasoba-baobab-cut)"
      >
        B
      </text>
      <text
        x="108"
        y="30"
        fill={color}
        fontFamily="'Work Sans', 'Helvetica Neue', Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.5"
      >
        A
      </text>
    </svg>
  );
}
