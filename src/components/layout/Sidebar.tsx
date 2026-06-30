import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-72 border-r border-slate-200 bg-white shadow-sm flex flex-col">

      {/* Progress */}

      <div className="border-b border-slate-200 px-6 py-6">

        <div className="flex items-center justify-between">

          <span className="text-sm font-semibold text-slate-700">
            Documentation Progress
          </span>

          <span className="text-sm text-slate-500">
            12 / 13
          </span>

        </div>

        <div className="mt-4 h-2 rounded-full bg-slate-200">

          <div
            className="h-2 rounded-full bg-slate-900"
            style={{ width: "92%" }}
          />

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >

              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>

            </NavLink>

          );

        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 px-6 py-5">

        <p className="font-semibold text-slate-700">
          Planet BizSync
        </p>

        <p className="text-xs text-slate-500">
          Version 1.0
        </p>

      </div>

    </aside>
  );
}