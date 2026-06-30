import { risks } from "../data/risk";

export default function Risks() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {risks.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {risks.subtitle}
        </p>

      </div>

      {/* Risk List */}

      <div className="rounded-3xl bg-white shadow-sm overflow-hidden">

        {risks.risks.map((risk, index) => (

          <div
            key={risk.title}
            className={`flex gap-6 p-8 ${
              index !== risks.risks.length - 1 ? "border-b" : ""
            }`}
          >

            {/* Risk Level */}

            <div className="w-20 shrink-0">

              <span
                className={`inline-block rounded-full px-4 py-2 text-sm font-semibold
                ${
                  risk.color === "red"
                    ? "bg-red-100 text-red-700"
                    : risk.color === "yellow"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {risk.level}
              </span>

            </div>

            {/* Content */}

            <div className="flex-1">

              <h3 className="text-xl font-bold">
                {risk.title}
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                <span className="font-semibold text-slate-800">
                  Mitigation:
                </span>{" "}
                {risk.mitigation}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}