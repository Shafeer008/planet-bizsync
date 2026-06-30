import { competitors } from "../data/competitors";

export default function Competitors() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white">

        <h1 className="text-5xl font-bold">
          4. {competitors.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {competitors.subtitle}
        </p>

      </div>

      {/* Honest Verdict */}

      <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-8">

        <h2 className="text-xl font-bold text-amber-900">
          {competitors.verdict.title}
        </h2>

        <p className="mt-4 leading-8 text-amber-900">
          {competitors.verdict.description}
        </p>

      </div>

      {/* Competitor List */}

      <div className="rounded-3xl bg-white shadow-sm overflow-hidden">

        {competitors.competitors.map((item, index) => (

          <div
            key={item.name}
            className={`grid grid-cols-12 gap-6 p-6 ${
              index !== competitors.competitors.length - 1
                ? "border-b"
                : ""
            }`}
          >

            <div className="col-span-3">

              <h3 className="font-bold">
                {item.name}
              </h3>

              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold
                  ${
                    item.color === "red"
                      ? "bg-red-100 text-red-700"
                      : item.color === "green"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >
                {item.badge}
              </span>

            </div>

            <div className="col-span-9 leading-7 text-slate-600">

              {item.description}

            </div>

          </div>

        ))}

      </div>

      {/* Opportunity */}

      <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">

        <h2 className="text-xl font-bold text-green-800">
          {competitors.gap.title}
        </h2>

        <p className="mt-4 leading-8 text-green-800">
          {competitors.gap.description}
        </p>

      </div>

    </div>
  );
}