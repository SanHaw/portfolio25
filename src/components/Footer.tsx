export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-12">
      <div className="mx-auto max-w-[var(--page-max)] px-4 py-6 text-sm text-stone-500">
        © {new Date().getFullYear()} sarahhaw. All rights reserved.
      </div>
    </footer>
  );
}
