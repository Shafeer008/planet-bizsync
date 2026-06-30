import { mvp } from "../data/mvp";

export default function MVP() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white">

        <h1 className="text-5xl font-bold">
          {mvp.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {mvp.subtitle}
        </p>

      </div>

      {/* Constraint */}

      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">

        <h2 className="font-bold text-red-700">
          The MVP Constraint
        </h2>

        <p className="mt-4 leading-8 text-red-700">
          {mvp.constraint}
        </p>

      </div>

      {/* Features */}

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          What's Included in the MVP
        </h2>

        <div className="space-y-5">

          {mvp.features.map((feature) => (

            <div
              key={feature.step}
              className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-[#1290FF]">

                {feature.step}

              </div>

              <div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Excluded */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Deliberately Excluded from MVP
        </h2>

        <div className="mt-6 space-y-4">

          {mvp.excluded.map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >

              <span className="font-bold text-red-500">
                ✕
              </span>

              <span className="text-slate-600">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}