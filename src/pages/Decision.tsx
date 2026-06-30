import { decision } from "../data/decision";

export default function Decision() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {decision.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {decision.subtitle}
        </p>

      </div>

      {/* Rule */}

      <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-8">

        <h2 className="text-xl font-bold text-amber-800">
          {decision.rule.title}
        </h2>

        <p className="mt-4 leading-8 text-amber-800">
          {decision.rule.description}
        </p>

      </div>

      {/* Questions */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Questions to Answer Through Customer Discovery
        </h2>

        <div className="mt-6 space-y-4">

          {decision.questions.map((question) => (

            <div
              key={question}
              className="flex gap-3"
            >

              <span className="font-bold text-[#1290FF]">
                →
              </span>

              <p className="leading-7">
                {question}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Green & Red Flags */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Green */}

        <div className="rounded-3xl border-l-4 border-green-500 bg-green-50 p-8">

          <h2 className="text-2xl font-bold text-green-800">
            Green Light Conditions
          </h2>

          <div className="mt-6 space-y-4">

            {decision.greenFlags.map((item) => (

              <div
                key={item}
                className="flex gap-3"
              >

                <span className="font-bold text-green-700">
                  ✓
                </span>

                <p className="leading-7 text-green-800">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Red */}

        <div className="rounded-3xl border-l-4 border-red-500 bg-red-50 p-8">

          <h2 className="text-2xl font-bold text-red-800">
            Red Flags
          </h2>

          <div className="mt-6 space-y-4">

            {decision.redFlags.map((item) => (

              <div
                key={item}
                className="flex gap-3"
              >

                <span className="font-bold text-red-700">
                  ✕
                </span>

                <p className="leading-7 text-red-800">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Action Plan */}

      <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">

        <h2 className="text-2xl font-bold text-blue-900">
          Your Next 7 Days of Action
        </h2>

        <div className="mt-6 space-y-4">

          {decision.actionPlan.map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >

              <span className="font-bold text-[#1290FF]">
                →
              </span>

              <p className="leading-7 text-blue-900">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}