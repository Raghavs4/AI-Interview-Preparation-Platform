import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b17]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <span className="rounded-xl bg-white/10 px-2 py-1 text-blue-300">AI</span>{" "}
          Interview
        </Link>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <Link to="/history" className="hover:text-white">History</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm text-slate-300 hover:text-white">
            Login
          </Link>
          <Link to="/register">
            <Button className="px-4 py-2 text-sm cursor-pointer">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;