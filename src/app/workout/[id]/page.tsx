"use client";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Plus, Bookmark } from "lucide-react";
import { API } from "@/lib/api";
import type { Workout } from "@/lib/types";
import { usePlan } from "@/context/PlanContext";
import Loader from "@/components/Loader";
import Tags from "@/components/Tags";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const { addToPlan, saveForLater, isPlanFull } = usePlan();
  const [w, setW] = useState<Workout | null>(null);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => (d && d.id ? setW(d) : setMissing(true)))
      .catch(() => setMissing(true));
  }, [id]);

  if (missing) notFound();
  if (!w) return <Loader text="Loading workout…" />;

  const specs = [
    ["Equipment", w.equipment], ["Difficulty", w.difficulty], ["Sets", w.sets], ["Reps", w.reps],
    ["Duration", `${w.duration} min`], ["Calories", `${w.caloriesBurned} kcal`], ["Rating", w.rating],
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <img src={w.image} alt={w.name} className="aspect-square w-full rounded-2xl border border-base-300 object-cover" />
      <div>
        <h1 className="font-display text-4xl font-bold uppercase">{w.name}</h1>
        <p className="mt-2 text-base-content/70">{w.description}</p>
        <div className="mt-3"><Tags list={w.muscleGroups} /></div>

        <dl className="mt-6 divide-y divide-base-300 rounded-xl border border-base-300 bg-base-200 text-sm">
          {specs.map(([k, v]) => (
            <div key={k} className="flex justify-between px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-base-content/60">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-8 font-display text-xl font-bold uppercase">Instructions</h2>
        <ol className="mt-3 space-y-3">
          {w.instructions.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm text-base-content/80">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-content">{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="btn btn-primary" disabled={isPlanFull} onClick={() => addToPlan(w)}><Plus size={16} />Add to today&apos;s plan</button>
          <button className="btn btn-outline" onClick={() => saveForLater(w)}><Bookmark size={16} />Save for later</button>
        </div>
      </div>
    </div>
  );
}
