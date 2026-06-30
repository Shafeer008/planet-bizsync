import type { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
};

export default function TwoColumn({
  left,
  right,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-8">

      {left}

      {right}

    </div>
  );
}