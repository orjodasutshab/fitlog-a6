"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import type { Tab, Workout } from "@/lib/types";

type PlanContextValue = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (w: Workout) => void;
  saveForLater: (w: Workout) => void;
  removeItem: (list: Tab, id: Workout["id"]) => void;
  markDone: (id: Workout["id"]) => void;
  isPlanFull: boolean;
  hydrated: boolean;
  tab: Tab;
  setTab: (t: Tab) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);
const MAX_PLAN = 5;

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [tab, setTab] = useState<Tab>("plan");

  useEffect(() => {
    // Intentional: this only flips a one-time "mounted" flag so the UI can
    // show a brief loader before the first client render, it does not sync
    // with any external state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  const addToPlan = (w: Workout) => {
    if (plan.some((p) => p.id === w.id)) return toast("Already in today's plan");
    if (plan.length >= MAX_PLAN) return toast.error("Plan is full. Finish a lift first.");
    setPlan([...plan, { ...w, done: false }]);
    toast.success("Added to today's plan");
  };
  const saveForLater = (w: Workout) => {
    if (saved.some((s) => s.id === w.id)) return toast("Already saved");
    setSaved([...saved, w]);
    toast.success("Saved for later");
  };
  const removeItem = (list: Tab, id: Workout["id"]) => {
    if (list === "plan") setPlan((prev) => prev.filter((x) => x.id !== id));
    else setSaved((prev) => prev.filter((x) => x.id !== id));
    toast.success("Workout removed");
  };
  const markDone = (id: Workout["id"]) => {
    setPlan((prev) => prev.map((p) => (p.id === id ? { ...p, done: true } : p)));
    toast.success("Marked as done");
  };

  return (
    <PlanContext.Provider
      value={{ plan, saved, addToPlan, saveForLater, removeItem, markDone, isPlanFull: plan.length >= MAX_PLAN, hydrated, tab, setTab }}
    >
      {children}
    </PlanContext.Provider>
  );
}


export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
