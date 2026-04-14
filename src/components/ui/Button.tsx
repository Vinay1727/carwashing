import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary: "btn-primary text-white px-8 py-3",
    outline:
      "border border-[rgba(14,165,233,0.4)] text-[#38bdf8] hover:bg-[rgba(14,165,233,0.1)] hover:border-[#0ea5e9] px-8 py-3",
    ghost:
      "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] px-4 py-2",
  };

  const sizes = {
    sm: "text-sm px-5 py-2",
    md: "text-sm px-8 py-3",
    lg: "text-base px-10 py-4",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
