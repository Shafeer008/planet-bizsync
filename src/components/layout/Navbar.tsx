import {
  Search,
  Moon,
  MonitorPlay,
  UserCircle2,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Left */}

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            Planet BizSync
          </h1>

          <p className="text-sm text-slate-500">
            Startup Documentation Portal
          </p>

        </div>

        {/* Center */}

        <div className="hidden w-full max-w-xl px-10 lg:block">

          <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search documentation..."
              className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
            <Moon size={18} />
          </button>

          <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
            <MonitorPlay size={18} />
          </button>

          <button className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
            <UserCircle2
              size={32}
              className="text-[#1290FF]"
            />
          </button>

        </div>

      </div>

    </header>
  );
}