import React from "react";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

const FinalResultPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <div className="flex-1 p-6 md:p-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Final Interview Result</h1>
          <p className="text-slate-400 mt-2">
            Here’s your complete AI-powered interview performance summary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-slate-400 text-sm">Overall Score</p>
            <h2 className="text-4xl font-bold text-blue-400 mt-3">84%</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-slate-400 text-sm">Communication</p>
            <h2 className="text-4xl font-bold text-emerald-400 mt-3">8.5</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-slate-400 text-sm">Confidence</p>
            <h2 className="text-4xl font-bold text-purple-400 mt-3">7.9</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-slate-400 text-sm">Technical Depth</p>
            <h2 className="text-4xl font-bold text-pink-400 mt-3">8.2</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-4">AI Summary</h2>
              <p className="text-slate-300 leading-relaxed">
                You performed strongly overall. Your communication was clear,
                your answers were mostly structured, and you showed a good grasp
                of core technical concepts. To improve further, focus on adding
                more real-world examples and slightly deeper explanations in
                technical questions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Strengths</h2>
              <div className="space-y-3 text-slate-300">
                <p>• Good clarity while explaining answers</p>
                <p>• Maintained decent confidence throughout</p>
                <p>• Strong understanding of frontend fundamentals</p>
                <p>• Answer structure was mostly interview-ready</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Areas to Improve</h2>
              <div className="space-y-3 text-slate-300">
                <p>• Add practical examples in each answer</p>
                <p>• Avoid repeating similar phrases too often</p>
                <p>• Improve answer depth for advanced React concepts</p>
                <p>• Be slightly more concise in long explanations</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-xl font-semibold mb-5">Performance Breakdown</h2>
              <div className="space-y-5">
                {[
                  ["Problem Solving", "80%"],
                  ["React Knowledge", "88%"],
                  ["Communication", "85%"],
                  ["Confidence", "79%"],
                  ["Time Management", "83%"],
                ].map(([label, score]) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{label}</span>
                      <span className="text-slate-400">{score}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: score }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button text="Retry Interview" />
              <Button
                text="Go to Dashboard"
                className="bg-white/10 hover:bg-white/20 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalResultPage;