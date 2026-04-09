import Sidebar from "../components/Sidebar";
import ResumeUpload from "../components/ResumeUpload";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const CreateInterviewPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-10">
        <div className="mb-8">
          <p className="text-sm text-blue-300">Create Interview</p>
          <h1 className="mt-2 text-3xl font-semibold">Set up your mock interview</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-[2rem] p-6">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Job Role</label>
                <input
                  type="text"
                  placeholder="Frontend Developer"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Job Description</label>
                <textarea
                  rows="8"
                  placeholder="Paste job description here..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
                  <option>Technical</option>
                  <option>HR</option>
                  <option>Mixed</option>
                </select>

                <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
                  <option>Medium</option>
                  <option>Easy</option>
                  <option>Hard</option>
                </select>
              </div>

              <Button onClick={() => navigate("/live-interview")} className="cursor-pointer">
                Generate Interview
              </Button>
            </div>
          </div>

          <ResumeUpload />
        </div>
      </main>
    </div>
  );
};

export default CreateInterviewPage;