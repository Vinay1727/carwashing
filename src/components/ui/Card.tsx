import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  glow = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "card-hover",
        glow && "glow-blue",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
