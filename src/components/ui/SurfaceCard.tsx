import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SurfaceCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      rounded-[28px]
      border
      border-slate-200
      bg-white
      p-8
      shadow-sm

      transition-all
      duration-300

      hover:-translate-y-1
      hover:border-slate-300
      hover:shadow-lg

      ${className}
      `}
    >
      {children}
    </div>
  );
}