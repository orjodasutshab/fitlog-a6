"use client";
import { useEffect, useMemo, useState } from "react";
import { API, sortList } from "@/lib/api";
import type { SortKey, Workout } from "@/lib/types";
import Loader from "@/components/Loader";
import SortSelect from "@/components/SortSelect";
import WorkoutCard from "@/components/WorkoutCard";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("Duration");

  useEffect(() => {
    fetch(API).then((r) => r.json()).then(setWorkouts).catch(() => setError(true)).finally(() => setLoading(false));
  }, []);
  const sorted = useMemo(() => sortList(workouts, sortBy), [workouts, sortBy]);

  return (
    <section id="library" className="scroll-mt-6 pt-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase">The Library</h2>
          <p className="text-sm text-base-content/60">Twelve lifts covering every major muscle group.</p>
        </div>
        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>
      {loading ? <Loader /> : error ? (
        <p className="py-16 text-center text-error">Could not load workouts. Refresh the page to try again.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((w) => <WorkoutCard key={w.id} w={w} />)}
        </div>
      )}
    </section>
  );
}
