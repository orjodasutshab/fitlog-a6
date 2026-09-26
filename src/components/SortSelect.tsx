"use client";
import type { SortKey } from "@/lib/types";

export default function SortSelect({ value, onChange }: { value: SortKey; onChange: (v: SortKey) => void }) {
  return (
    <label className="flex items-center gap-2 text-sm text-base-content/60">
      Sort By
      <select value={value} onChange={(e) => onChange(e.target.value as SortKey)} className="select select-bordered select-sm bg-base-200">
        <option>Duratsion</option><option>Rat</option>
      </select>
    </label>
  );
}
