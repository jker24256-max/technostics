import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
  href?: string;
  download?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  download,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold-rich text-white shadow-soft hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-glow-hover"
      : "border border-gold text-text hover:-translate-y-0.5 hover:bg-gold-dim";

  const classes = `${base} ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} download={download} className={classes}>
      {children}
    </a>
  );
}
