import React from "react";
import Sidebar from "../components/Sidebar";
import QuestionCard from "../components/QuestionCard";
import VoiceRecorder from "../components/VoiceRecoder";
import FeedbackCard from "../components/FeedbackCard";
import Button from "../components/Button";

const LiveInterviewPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <div className="flex-1 p-6 md:p-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Live Interview</h1>
            <p className="text-slate-400 mt-2">
              Answer the AI-generated question with confidence.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-3">
              <p className="text-sm text-slate-400">Time Left</p>
              <h2 className="text-xl font-bold text-blue-400">12:45</h2>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-3">
              <p className="text-sm text-slate-400">Progress</p>
              <h2 className="text-xl font-bold text-emerald-400">3 / 8</h2>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[37%] bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-6">
            <QuestionCard />
            <VoiceRecorder />

            <div className="glass rounded-3xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Your Answer (Preview)</h3>
              <p className="text-slate-300 leading-relaxed">
                useEffect is used for side effects like fetching data or updating the DOM,
                while useMemo is used to optimize performance by memoizing expensive calculations...
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-end">
              <Button
                text="Previous"
                className="bg-white/10 hover:bg-white/20 text-white"
              />
              <Button text="Next Question" />
              <Button
                text="Submit Interview"
                className="bg-emerald-600 hover:bg-emerald-700"
              />
            </div>
          </div>

          <div className="space-y-6">
            <FeedbackCard />

            <div className="glass rounded-3xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Interview Tips</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>• Speak clearly and confidently</p>
                <p>• Keep your answer structured</p>
                <p>• Give at least one practical example</p>
                <p>• Avoid unnecessary filler words</p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Performance Snapshot</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Clarity</p>
                  <div className="w-full h-2 bg-white/10 rounded-full">
                    <div className="w-[82%] h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Confidence</p>
                  <div className="w-full h-2 bg-white/10 rounded-full">
                    <div className="w-[70%] h-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Technical Depth</p>
                  <div className="w-full h-2 bg-white/10 rounded-full">
                    <div className="w-[76%] h-full bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveInterviewPage;