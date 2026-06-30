import InfoCard from "../components/docs/InfoCard";
import TwoColumn from "../components/docs/TwoColumn";

import { problem } from "../data/problem";

export default function Problem() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] text-white p-10 shadow-sm">

        <h1 className="text-5xl font-bold">
          {problem.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {problem.subtitle}
        </p>

      </div>

      {/* Core Problem */}

      <InfoCard title="Core Problem">

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <p className="text-lg leading-8 text-slate-700">
            {problem.coreProblem}
          </p>

        </div>

      </InfoCard>

      {/* Business Pain & Worker Pain */}

      <TwoColumn

        left={

          <InfoCard title="Business Owner's Pain">

            <ul className="space-y-4">

              {problem.businessPain.map((item) => (

                <li
                  key={item}
                  className="flex gap-3"
                >

                  <span className="text-[#1290FF] font-bold">
                    →
                  </span>

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </InfoCard>

        }

        right={

          <InfoCard title="Worker's Pain">

            <ul className="space-y-4">

              {problem.workerPain.map((item) => (

                <li
                  key={item}
                  className="flex gap-3"
                >

                  <span className="text-[#1290FF] font-bold">
                    →
                  </span>

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </InfoCard>

        }

      />

      {/* Why Now */}

      <InfoCard title="Why This Problem Exists Now">

        <div className="space-y-4">

          {problem.whyNow.map((item) => (

            <div
              key={item}
              className="flex gap-3 rounded-xl bg-slate-50 p-4"
            >

              <span className="text-[#1290FF] font-bold">
                →
              </span>

              <p>{item}</p>

            </div>

          ))}

        </div>

      </InfoCard>

      {/* Current Solution */}

      <div className="rounded-3xl border-l-4 border-amber-500 bg-amber-50 p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          The Current "Solution" in Detail
        </h2>

        <div className="mt-8 space-y-6">

          {problem.currentSolution.map((step) => (

            <div
              key={step.step}
              className="rounded-xl bg-white p-5 shadow-sm"
            >

              <div className="flex items-center gap-3">

                <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
                  {step.step}
                </span>

                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>

              </div>

              <p className="mt-3 leading-7 text-slate-600">
                {step.text}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-100 p-6">

          <p className="text-lg font-semibold text-amber-900">
            {problem.currentSolutionSummary}
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          Key Statistics
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {problem.stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <h2 className="text-4xl font-bold text-[#1290FF]">
                {item.value}
              </h2>

              <p className="mt-4 font-medium">
                {item.title}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {item.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}