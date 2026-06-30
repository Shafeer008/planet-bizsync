import type { ReactNode } from "react";

type HeroBannerProps = {
  title: string;
  subtitle: string;
  description?: string;
  children?: ReactNode;
};

export default function HeroBanner({
  title,
  subtitle,
  description,
  children,
}: HeroBannerProps) {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#1290FF] to-blue-600 p-12 text-white shadow-lg">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
        Startup Documentation
      </p>

      <h1 className="mt-4 text-5xl font-semibold tracking-tight">
        {title}
      </h1>

      <p className="mt-3 text-2xl text-blue-100">
        {subtitle}
      </p>

      {description && (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
          {description}
        </p>
      )}

      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}

    </section>
  );
}