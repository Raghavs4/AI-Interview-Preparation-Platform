import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Interviews", value: "12" },
  { label: "Avg Score", value: "7.8" },
  { label: "Questions Answered", value: "54" },
  { label: "Current Plan", value: "Premium" },
];

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-blue-300">Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold">Welcome back, Raghav</h1>
          </div>
          <Link to="/create-interview">
            <Button className="cursor-pointer">Start New Interview</Button>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="glass rounded-3xl p-6">
              <p className="text-sm text-slate-400">{item.label}</p>
              <h2 className="mt-3 text-3xl font-semibold">{item.value}</h2>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass rounded-3xl p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Recent Interviews</h3>
              <Link to="/history" className="text-sm text-blue-300">View all</Link>
            </div>

            <div className="space-y-3">
              {["Frontend Developer", "SDE Intern", "React Developer"].map((role, i) => (
                <div key={role} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div>
                    <p className="font-medium">{role}</p>
                    <p className="text-sm text-slate-400">Completed • {8 - i}/10 score</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                    Done
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold">Performance Trend</h3>
            <div className="mt-6 flex h-64 items-end justify-between gap-3">
              {[35, 48, 42, 60, 74, 68, 82].map((h, idx) => (
                <div key={idx} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-blue-500 to-violet-500"
                    style={{ height: `${h * 2}px` }}
                  />
                  <span className="text-xs text-slate-500">W{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;