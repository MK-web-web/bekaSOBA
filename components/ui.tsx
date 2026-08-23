import Link from "next/link";
import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-utility text-[11px] tracking-[0.18em] uppercase text-clay mb-3">
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium tracking-wide transition-colors duration-200 rounded-sm";
  const styles = {
    primary: "bg-indigo text-bone hover:bg-indigo-deep",
    secondary: "bg-clay text-bone hover:bg-clay-deep",
    ghost: "border border-line text-ink hover:border-clay hover:text-clay",
  };
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
