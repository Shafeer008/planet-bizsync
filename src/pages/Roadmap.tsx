import { roadmap } from "../data/roadmap";

export default function Roadmap() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-white p-10 shadow-sm">

        <h1 className="text-5xl font-bold text-slate-900">
          {roadmap.title}
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          {roadmap.subtitle}
        </p>

      </div>

      {/* Roadmap Phases */}

      <div className="space-y-6">

        {roadmap.phases.map((phase) => (

          <div
            key={phase.phase}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>

                <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                  {phase.phase}
                </span>

                <h2 className="mt-4 text-2xl font-semibold">
                  {phase.title}
                </h2>

              </div>

              <span className="text-slate-500">
                {phase.duration}
              </span>

            </div>

            <ul className="mt-6 space-y-3">

              {phase.goals.map((goal) => (

                <li
                  key={goal}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />

                  <span>{goal}</span>
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

      {/* Milestones */}

      <div>

        <h2 className="mb-6 text-3xl font-semibold">
          Key Milestones
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {roadmap.milestones.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-3xl font-bold text-slate-900">
                {item.target}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}