import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid items-center gap-8 rounded-2xl border border-base-300 bg-base-200 p-6 sm:p-10 lg:grid-cols-2">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Workout Library</p>
        <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">Train with intent. Log every set.</h1>
        <p className="mt-4 max-w-md text-base-content/70">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
        <a href="#library" className="btn btn-primary mt-6"><ArrowDown size={16} />BROWSE WORKOUTS</a>
      </div>
      <img src="/banner.png" alt="Muscle anatomy on a preacher curl machine" className="mx-auto max-h-80 w-full object-contain lg:max-h-96" />
    </section>
  );
}
