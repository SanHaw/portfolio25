import { Link, NavLink } from 'react-router-dom';

const base = 'px-3 py-2 rounded hover:bg-stone-100';
const active = 'text-stone-900 font-medium';
const inactive = 'text-stone-600';

export default function Navbar() {
  return (
    <header className="border-b border-stone-200 sticky top-0 bg-white/70 backdrop-blur z-50">
      <nav className="mx-auto max-w-[var(--page-max)] px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">portfolio25</Link>
        <div className="flex gap-2">
          <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>Contact</NavLink>

          {/* Present but will 404 (per your requirement) */}
          <NavLink to="/projects/example" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>Individual</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>Blog</NavLink>
        </div>
      </nav>
    </header>
  );
}
