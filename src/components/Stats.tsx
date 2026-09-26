import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/lib/types";

export default function Stats({ w }: { w: Workout }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-base-content/70">
      <span className="flex items-center gap-1"><Clock size={13} className="text-primary" />{w.duration} min</span>
      <span className="flex items-center gap-1"><Flame size={13} className="text-primary" />{w.caloriesBurned} kcal</span>
      <span className="flex items-center gap-1"><Star size={13} className="text-primary" />{w.rating}</span>
    </div>
  );
}
