import { gtm } from "../data/gtm";

export default function GTM() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {gtm.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {gtm.subtitle}
        </p>

      </div>

      {/* Cold Start */}

      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">

        <h2 className="text-xl font-bold text-red-700">
          {gtm.coldStart.title}
        </h2>

        <p className="mt-4 leading-8 text-red-700">
          {gtm.coldStart.description}
        </p>

      </div>

      {/* GTM Timeline */}

      <div className="rounded-3xl bg-white shadow-sm overflow-hidden">

        {gtm.phases.map((phase, index) => (

          <div
            key={phase.step}
            className={`flex gap-6 p-8 ${
              index !== gtm.phases.length - 1 ? "border-b" : ""
            }`}
          >

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1290FF] text-xl font-bold text-white">

              {phase.step}

            </div>

            <div>

              <h3 className="text-xl font-bold">
                {phase.title}
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {phase.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Paid Acquisition */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Paid Acquisition (Month 4+)
        </h2>

        <div className="mt-6 space-y-4">

          {gtm.paidAcquisition.map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >

              <span className="font-bold text-[#1290FF]">
                →
              </span>

              <p className="leading-7">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}