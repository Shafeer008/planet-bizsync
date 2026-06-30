import { moat } from "../data/moat";

export default function Moat() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {moat.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {moat.subtitle}
        </p>

      </div>

      {/* Moats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {moat.moats.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
          >

            <h2 className="text-xl font-bold text-slate-700">
              {item.title}
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {item.description}
            </p>

          </div>

        ))}

      </div>

      {/* Bottom Callout */}

      <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">

        <h2 className="text-xl font-bold text-blue-900">
          {moat.advantage.title}
        </h2>

        <p className="mt-4 leading-8 text-blue-900">
          {moat.advantage.description}
        </p>

      </div>

    </div>
  );
}