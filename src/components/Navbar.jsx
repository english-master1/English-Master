import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold text-blue-400">
        English Master
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}