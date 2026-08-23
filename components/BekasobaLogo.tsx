import Image from "next/image";

export interface BekasobaLogoProps {
  className?: string;
  title?: string;
  /** Use mint variant optimized for dark backgrounds (footer). */
  variant?: "default" | "light";
  /** @deprecated PNG wordmark uses fixed brand green; prop ignored. */
  color?: string;
  /** @deprecated PNG wordmark uses fixed brand green; prop ignored. */
  prefixColor?: string;
}

/** bekaSOBA wordmark — final brand asset with baobab-in-B mark. */
export default function BekasobaLogo({
  className = "",
  title = "bekaSOBA",
  variant = "default",
}: BekasobaLogoProps) {
  const src =
    variant === "light" ? "/bekasoba-logo-light.png" : "/bekasoba-logo.png";

  return (
    <Image
      src={src}
      alt={title}
      width={1200}
      height={250}
      className={className}
      priority
    />
  );
}
