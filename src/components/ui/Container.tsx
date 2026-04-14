import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("container", className)}
      {...props}
    >
      {children}
    </div>
  );
}
