import { vision } from "../data/vision";

export default function Vision() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white">

        <h1 className="text-5xl font-bold">
          {vision.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {vision.subtitle}
        </p>

      </div>

      {/* Vision */}

      <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">

        <h2 className="text-xl font-bold text-blue-900">
          Vision (3-Year)
        </h2>

        <p className="mt-4 leading-8 text-blue-900">
          {vision.vision}
        </p>

      </div>

      {/* Tagline */}

      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">

        <h2 className="text-2xl font-bold">
          The Product in One Line
        </h2>

        <p className="mt-8 text-3xl font-semibold italic">
          {vision.tagline}
        </p>

      </div>

      {/* Milestones */}

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          What Success Looks Like
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {vision.milestones.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-sm"
            >

              <p className="text-slate-500">
                {item.title}
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#1290FF]">
                {item.value}
              </h2>

              <p className="mt-3 text-slate-500">
                {item.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Network Effects */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          The Network Effect Thesis
        </h2>

        <div className="mt-6 space-y-4">

          {vision.networkEffects.map((item) => (

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