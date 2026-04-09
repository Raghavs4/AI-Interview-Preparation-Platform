import { Link } from "react-router-dom";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <p className="text-sm text-blue-300">Welcome back</p>
        <h1 className="mt-2 text-3xl font-semibold">Login to continue</h1>
        <p className="mt-2 text-sm text-slate-400">
          Continue your interview preparation
        </p>

        <form className="mt-8 space-y-4">
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

          <Button className="w-full">Sign In</Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-300 hover:text-blue-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;