import { market } from "../data/market";

export default function Market() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {market.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {market.subtitle}
        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {market.stats.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl bg-white p-8 text-center shadow-sm border border-slate-200"
          >

            <h2 className="text-4xl font-bold text-[#1290FF]">
              {item.value}
            </h2>

            <p className="mt-4 text-slate-500">
              {item.title}
            </p>

          </div>

        ))}

      </div>

      {/* Market Sizing */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Realistic Market Sizing (Bottom-Up)
        </h2>

        <div className="mt-6 rounded-2xl border border-slate-200 p-8">

          <h3 className="text-xl font-bold uppercase text-slate-600">
            {market.marketSizing.title}
          </h3>

          <div className="mt-6 space-y-4">

            {market.marketSizing.points.map((point) => (

              <div
                key={point}
                className="flex gap-3"
              >
                <span className="text-[#1290FF] font-bold">
                  →
                </span>

                <span>{point}</span>

              </div>

            ))}

          </div>

          <h3 className="mt-10 text-xl font-bold uppercase text-slate-600">
            {market.yearOne.title}
          </h3>

          <div className="mt-6 space-y-4">

            {market.yearOne.points.map((point) => (

              <div
                key={point}
                className="flex gap-3"
              >
                <span className="text-[#1290FF] font-bold">
                  →
                </span>

                <span>{point}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Revenue Models */}

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          Revenue Model Options
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {market.revenueModels.map((model) => (

            <div
              key={model.title}
              className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200"
            >

              <h3 className="text-xl font-bold uppercase text-slate-600">
                {model.title}
              </h3>

              <div className="mt-6 space-y-4">

                {model.points.map((point) => (

                  <div
                    key={point}
                    className="flex gap-3"
                  >
                    <span className="text-[#1290FF] font-bold">
                      →
                    </span>

                    <span>{point}</span>

                  </div>

                ))}

              </div>

              <div
                className={`mt-8 rounded-xl p-5 ${
                  model.color === "green"
                    ? "bg-green-50 text-green-700"
                    : "bg-orange-50 text-orange-700"
                }`}
              >
                {model.note}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}