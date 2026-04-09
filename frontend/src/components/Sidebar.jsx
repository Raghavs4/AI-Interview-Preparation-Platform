import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Create Interview", path: "/create-interview" },
    { name: "Live Interview", path: "/live-interview" },
    { name: "History", path: "/history" },
    { name: "Subscription", path: "/subscription" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white/5 border-r border-white/10 shadow-sm p-6">
      <h2 className="text-2xl font-bold text-white mb-8">AI Interview</h2>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 py-3 rounded-xl font-medium transition ${
              location.pathname === link.path
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                : "text-slate-300 hover:bg-white/5"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;