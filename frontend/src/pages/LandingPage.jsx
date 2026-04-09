import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const features = [
  "Resume Based Questions",
  "AI Powered Feedback",
  "Voice Mock Interviews",
];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2">
        <div>
          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            AI Mock Interview Platform
          </span>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Ace Your <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Interviews</span> with AI
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Practice personalized interviews based on your resume and job description,
            with instant feedback, voice interaction, and detailed reports.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/register">
              <Button className="cursor-pointer">Start Free</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="cursor-pointer">See Dashboard</Button>
            </Link>
          </div>

          <div id="features" className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="glass rounded-3xl p-5">
                <div className="mb-3 text-2xl">✨</div>
                <h3 className="font-semibold">{feature}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Modern AI-driven experience for realistic interview preparation.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass relative overflow-hidden rounded-[2rem] p-8">
          <div className="absolute right-8 top-8 orb h-28 w-28 opacity-90" />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                AI Interviewer
              </span>
              <span className="text-sm text-slate-400">Question 3 / 8</span>
            </div>

            <h3 className="text-2xl font-semibold leading-relaxed">
              Explain useEffect in React and when you would use it.
            </h3>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-400">Your Answer</p>
              <p className="mt-3 text-slate-200">
                useEffect is used to handle side effects like API calls, subscriptions,
                and timers inside functional components...
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="wave-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                8.4 / 10
              </span>
            </div>
          </div>

          <div id="pricing" className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold">Free Plan</h4>
              <p className="mt-2 text-sm text-slate-400">8 AI interview questions</p>
            </div>
            <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5">
              <h4 className="text-lg font-semibold">Premium Plan</h4>
              <p className="mt-2 text-sm text-slate-300">20 questions + deeper feedback</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;