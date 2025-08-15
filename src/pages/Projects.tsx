import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section className="mx-auto max-w-[var(--page-max)] px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
      <p className="mt-3 text-stone-700">Overview of projects. Replace with your grid/list.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-xl p-4 hover:shadow">
            <h3 className="font-semibold">Project {i}</h3>
            <p className="text-sm text-stone-600 mt-1">Short description.</p>
            {/* Will go to 404 */}
            <Link to={`/projects/project-${i}`} className="inline-block mt-3 text-blue-600 underline">
              View project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
