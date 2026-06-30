import PersonaCard from "../components/docs/PersonaCard";
import { users } from "../data/users";

export default function Users() {
  return (
    <div className="space-y-10">

      {/* Hero */}

      <div className="rounded-3xl bg-[#1290FF] p-10 text-white shadow-sm">

        <h1 className="text-5xl font-bold">
          {users.title}
        </h1>

        <p className="mt-4 text-lg opacity-90">
          {users.subtitle}
        </p>

      </div>

      {/* Business Users */}

      <section>

        <h2 className="mb-6 text-3xl font-bold">
          Side A — Businesses (Paying Customers)
        </h2>

        <div className="space-y-6">

          {users.businesses.map((persona) => (
            <PersonaCard
              key={persona.name}
              persona={persona}
            />
          ))}

        </div>

      </section>

      {/* Worker Users */}

      <section>

        <h2 className="mb-6 text-3xl font-bold">
          Side B — Workers (Platform Supply)
        </h2>

        <div className="space-y-6">

          {users.workers.map((persona) => (
            <PersonaCard
              key={persona.name}
              persona={persona}
            />
          ))}

        </div>

      </section>

    </div>
  );
}