export default function Loader({ text = "Loading workouts…" }: { text?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-24">
      <span className="loading loading-spinner loading-lg text-primary" />
      <p className="text-sm text-base-content/60">{text}</p>
    </div>
  );
}
