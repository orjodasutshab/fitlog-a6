import Link from "next/link";
import type { Workout } from "@/lib/types";
import Tags from "@/components/Tags";
import Stats from "@/components/Stats";

export default function WorkoutCard({ w }: { w: Workout }) {
  return (
    <Link href={`/workout/${w.id}`} className="card overflow-hidden border border-base-300 bg-base-200 transition hover:border-primary">
      <figure className="aspect-[16/10]"><img src={w.image} alt={w.name} className="h-full w-full object-cover" /></figure>
      <div className="card-body gap-2 p-4">
        <Tags list={w.muscleGroups} />
        <h3 className="font-display text-lg font-bold uppercase">{w.name}</h3>
        <p className="text-sm text-base-content/60">{w.equipment}</p>
        <Stats w={w} />
      </div>
    </Link>
  );
}
