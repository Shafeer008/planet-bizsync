import { premium } from "../data/premium";

export default function Premium() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {premium.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {premium.subtitle}
        </p>

      </div>

      {/* Phase 2 & Phase 3 */}

      <div className="grid gap-6 lg:grid-cols-2">

        {[premium.phase2, premium.phase3].map((phase) => (

          <div
            key={phase.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <h2 className="text-xl font-bold uppercase text-slate-600">
              {phase.title}
            </h2>

            <div className="mt-6 space-y-4">

              {phase.features.map((feature) => (

                <div
                  key={feature}
                  className="flex gap-3"
                >

                  <span className="font-bold text-[#1290FF]">
                    →
                  </span>

                  <p className="leading-7">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* Long-Term Vision */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-xl font-bold uppercase text-slate-600">
          {premium.longTerm.title}
        </h2>

        <div className="mt-6 space-y-4">

          {premium.longTerm.features.map((feature) => (

            <div
              key={feature}
              className="flex gap-3"
            >

              <span className="font-bold text-[#1290FF]">
                →
              </span>

              <p className="leading-7">
                {feature}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}