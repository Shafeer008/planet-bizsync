import type { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

type Props = {
  children: ReactNode;
};

export default function DocumentationLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 overflow-y-auto p-8">

          <div className="mx-auto max-w-7xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}