import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <h1 className="font-display text-7xl font-bold text-primary">404</h1>
      <h2 className="font-display text-2xl font-bold uppercase">Page not found</h2>
      <p className="text-base-content/60">That page doesn&apos;t exist. Head back to the library.</p>
      <Link href="/" className="btn btn-primary mt-3">Go to workouts</Link>
    </div>
  );
}
