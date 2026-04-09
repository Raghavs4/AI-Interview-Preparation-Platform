import { Link } from "react-router-dom";
import Button from "../components/Button";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <p className="text-sm text-violet-300">Get Started</p>
        <h1 className="mt-2 text-3xl font-semibold">Create your account</h1>
        <p className="mt-2 text-sm text-slate-400">
          Start your AI interview journey
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          />

          <Button className="w-full">Create Account</Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:text-blue-200">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;