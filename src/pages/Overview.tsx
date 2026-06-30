import { overview } from "../data/overview";

export default function Overview() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {overview.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {overview.subtitle}
        </p>

      </div>

      {/* Description */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          What is Planet BizSync?
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          {overview.description}
        </p>

      </div>

      {/* Mission & Vision */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-[#1290FF]">
            Mission
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {overview.mission}
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-[#1290FF]">
            Vision
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {overview.vision}
          </p>

        </div>

      </div>

      {/* Why */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Why Planet BizSync?
        </h2>

        <ul className="mt-6 space-y-4">

          {overview.why.map((item) => (

            <li
              key={item}
              className="rounded-xl bg-slate-50 p-4"
            >
              ✅ {item}
            </li>

          ))}

        </ul>

      </div>

      {/* Modules */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Core Modules
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {overview.modules.map((module) => (

            <div
              key={module}
              className="rounded-xl bg-[#1290FF]/10 p-5 text-center font-semibold"
            >
              {module}
            </div>

          ))}

        </div>

      </div>

      {/* Technology */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Technology Stack
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">

          {overview.technologies.map((tech) => (

            <span
              key={tech}
              className="rounded-full bg-[#1290FF] px-4 py-2 text-white"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
}