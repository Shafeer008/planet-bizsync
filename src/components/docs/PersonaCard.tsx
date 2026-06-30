type Persona = {
  initials: string;
  color: string;
  name: string;
  role: string;
  location: string;
  badges: string[];
  points: string[];
};

type Props = {
  persona: Persona;
};

export default function PersonaCard({ persona }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">

      <div className="flex items-center gap-5">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold ${persona.color}`}
        >
          {persona.initials}
        </div>

        <div>

          <h3 className="text-2xl font-bold">
            {persona.name}
          </h3>

          <p className="text-slate-500">
            {persona.role} • {persona.location}
          </p>

        </div>

      </div>

      <div className="mt-6 flex flex-wrap gap-2">

        {persona.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
          >
            {badge}
          </span>
        ))}

      </div>

      <div className="mt-6 space-y-4">

        {persona.points.map((point) => (
          <div
            key={point}
            className="flex gap-3"
          >
            <span className="font-bold text-[#1290FF]">
              →
            </span>

            <p className="text-slate-700 leading-7">
              {point}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}