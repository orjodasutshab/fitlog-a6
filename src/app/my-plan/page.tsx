"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { sortList } from "@/lib/api";
import type { SortKey } from "@/lib/types";
import { usePlan } from "@/context/PlanContext";
import Loader from "@/components/Loader";
import SortSelect from "@/components/SortSelect";
import Stats from "@/components/Stats";

export default function MyPlan() {

  const { plan, saved, removeItem, markDone, hydrated, tab, setTab } = usePlan();
  
  const [sortBy, setSortBy] = useState<SortKey>("Duration");
  
  const list = useMemo(() => sortList(tab === "plan" ? plan : saved, sortBy), [tab, plan, saved, sortBy]);

  const metrics = [
  
    ["Exercises", plan.length],
    ["Minutes", plan.reduce((s, w) => s + w.duration, 0)],
  
    ["Calories", plan.reduce((s, w) => s + w.caloriesBurned, 0)],
  ];

  
  return (
    <>
  
      <h1 className="font-display text-4xl font-bold uppercase">My Plan</h1>
  
      <p className="text-sm text-base-content/60">Cap of five lifts for today. Finish them, then load more.</p>

      <div className="stats stats-vertical mt-6 w-full border border-base-300 bg-base-200 sm:stats-horizontal">
  
        {metrics.map(([label, val]) => (
          <div key={label} className="stat">
  
            <div className="stat-title text-xs uppercase tracking-wider">{label}</div>
  
            <div className="stat-value font-display text-primary">{val}</div>
  
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
  
        <div role="tablist" className="tabs tabs-boxed bg-base-200">
  
          <button role="tab" className={`tab ${tab === "plan" ? "tab-active" : ""}`} onClick={() => setTab("plan")}>Today&apos;s Plan</button>
  
          <button role="tab" className={`tab ${tab === "saved" ? "tab-active" : ""}`} onClick={() => setTab("saved")}>Saved</button>
  
        </div>
        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-6 space-y-3">
  
        {!hydrated ? <Loader /> : list.length === 0 ? (
  
  <div className="flex flex-col items-center gap-2 py-16 text-center">
  
            <h2 className="font-display text-2xl font-bold uppercase">Nothing here yet</h2>
  
            <p className="text-sm text-base-content/60">Browse the library and add a lift to get today moving.</p>
  
            <Link href="/" className="btn btn-primary btn-sm mt-3">Go to workouts</Link>
  
          </div>
  
) : list.map((w) => (
          <div key={w.id} className="flex flex-wrap items-center gap-4 rounded-xl border border-base-300 bg-base-200 p-3">

            <img src={w.image} alt={w.name} className="h-16 w-24 rounded-lg object-cover" />
            <div className="min-w-0 flex-1">

              <h3 className="font-display text-lg font-bold uppercase">{w.name}{w.done && <span className="badge badge-success badge-sm ml-2 align-middle">Done</span>}</h3>
              <p className="text-sm text-base-content/60">{w.equipment}</p>

              <Stats w={w} />
            </div>
            <div className="flex items-center gap-2">

              <Link href={`/workout/${w.id}`} className="btn btn-ghost btn-sm">View Details</Link>
              {tab === "plan" && (
                <button className="btn btn-primary btn-sm" disabled={w.done} onClick={() => markDone(w.id)}><Check size={14} />Mark as Done</button>

)}
              <button className="btn btn-ghost btn-sm btn-square" aria-label="Remove" onClick={() => removeItem(tab, w.id)}><X size={16} /></button>

            </div>
          </div>

))}
      </div>
    </>
  );
}
