import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

const historyData = [
  {
    id: 1,
    role: "Frontend Developer",
    date: "12 April 2026",
    score: "84%",
    status: "Completed",
  },
  {
    id: 2,
    role: "React Developer",
    date: "08 April 2026",
    score: "79%",
    status: "Completed",
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    date: "02 April 2026",
    score: "88%",
    status: "Completed",
  },
  {
    id: 4,
    role: "JavaScript Developer",
    date: "28 March 2026",
    score: "75%",
    status: "Completed",
  },
];

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <div className="flex-1 p-6 md:p-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Interview History</h1>
            <p className="text-slate-400 mt-2">
              Track all your previous mock interviews and results.
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search interviews..."
              className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none text-white w-64"
            />
            <Button text="Filter" className="bg-white/10 hover:bg-white/20 text-white" />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-5 px-6 py-4 border-b border-white/10 text-sm text-slate-400 font-semibold">
            <p>Role</p>
            <p>Date</p>
            <p>Score</p>
            <p>Status</p>
            <p className="text-right">Action</p>
          </div>

          {historyData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 px-6 py-5 border-b border-white/10 items-center hover:bg-white/5 transition"
            >
              <p className="font-medium">{item.role}</p>
              <p className="text-slate-400">{item.date}</p>
              <p className="text-blue-400 font-semibold">{item.score}</p>
              <p>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">
                  {item.status}
                </span>
              </p>
              <div className="text-right">
                <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-slate-400 text-sm">Total Interviews</p>
            <h2 className="text-4xl font-bold mt-3">12</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-slate-400 text-sm">Average Score</p>
            <h2 className="text-4xl font-bold text-blue-400 mt-3">81%</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className="text-slate-400 text-sm">Best Performance</p>
            <h2 className="text-4xl font-bold text-emerald-400 mt-3">88%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;