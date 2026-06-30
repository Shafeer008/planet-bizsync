import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function InfoCard({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-3xl bg-white shadow-sm p-8">

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      {children}

    </div>
  );
}