import {
  BookOpen,
  FileText,
  Gauge,
  Sparkles,
} from "lucide-react";

import HeroBanner from "../components/ui/HeroBanner";
import MetricCard from "../components/ui/MetricCard";
import SurfaceCard from "../components/ui/SurfaceCard";

import { dashboard } from "../data/dashboard";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <HeroBanner
        title="🚀 Planet BizSync"
        subtitle="Business Workforce Platform"
        description={dashboard.description}
      >

        <div className="flex gap-4">

          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-[#1290FF] transition hover:scale-105">
            View Documentation
          </button>

          <button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
            Presentation Mode
          </button>

        </div>

      </HeroBanner>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          title="Documentation"
          value="13"
          subtitle="Completed Sections"
          icon={BookOpen}
        />

        <MetricCard
          title="Progress"
          value="92%"
          subtitle="Project Ready"
          icon={Gauge}
        />

        <MetricCard
          title="Pages"
          value="14"
          subtitle="Documentation"
          icon={FileText}
        />

        <MetricCard
          title="Version"
          value="1.0"
          subtitle="Latest Build"
          icon={Sparkles}
        />

      </div>

      {/* Bottom */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Quick Navigation */}

        <SurfaceCard>

          <h2 className="text-2xl font-semibold tracking-tight">
            Quick Navigation
          </h2>

          <div className="mt-6 grid gap-4">

            {dashboard.quickLinks.map((item) => (

              <button
                key={item}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition-all hover:border-[#1290FF] hover:bg-[#1290FF] hover:text-white"
              >

                <span className="font-medium">
                  {item}
                </span>

                <span>→</span>

              </button>

            ))}

          </div>

        </SurfaceCard>

        {/* Progress */}

        <SurfaceCard>

          <h2 className="text-2xl font-semibold tracking-tight">
            Documentation Progress
          </h2>

          <div className="mt-8 h-4 rounded-full bg-slate-200">

            <div
              className="h-4 rounded-full bg-gradient-to-r from-[#1290FF] to-blue-500"
              style={{
                width: `${dashboard.progress}%`,
              }}
            />

          </div>

          <div className="mt-6 flex justify-between">

            <div>

              <p className="text-4xl font-bold text-[#1290FF]">
                {dashboard.progress}%
              </p>

              <p className="text-slate-500">
                Completed
              </p>

            </div>

            <div className="text-right">

              <p className="text-4xl font-bold">
                13
              </p>

              <p className="text-slate-500">
                Sections
              </p>

            </div>

          </div>

        </SurfaceCard>

      </div>

      {/* Recent Updates */}

      <SurfaceCard>

        <h2 className="text-2xl font-semibold tracking-tight">
          Recent Updates
        </h2>

        <div className="mt-8 space-y-5">

          {dashboard.updates.map((item) => (

            <div
              key={item}
              className="flex items-center gap-4"
            >

              <div className="h-3 w-3 rounded-full bg-[#1290FF]" />

              <p className="text-slate-700">
                {item}
              </p>

            </div>

          ))}

        </div>

      </SurfaceCard>

    </div>
  );
}