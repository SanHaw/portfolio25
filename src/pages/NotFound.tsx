import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const loc = useLocation();
  return (
    <section className="mx-auto max-w-[var(--page-max)] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3 text-stone-700">
        The page <code className="px-2 py-1 bg-stone-100 rounded">{loc.pathname}</code> doesn’t exist yet.
      </p>
      <Link to="/" className="inline-block mt-6 px-4 py-2 rounded bg-stone-900 text-white hover:opacity-90">
        Go Home
      </Link>
    </section>
  );
}
