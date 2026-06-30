import type { LucideIcon } from "lucide-react";
import SurfaceCard from "./SurfaceCard";

type MetricCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

export default function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: MetricCardProps) {
  return (
    <SurfaceCard>

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <Icon
          size={22}
          className="text-[#1290FF]"
        />

      </div>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>

    </SurfaceCard>
  );
}