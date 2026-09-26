export default function Logo() {
  return (
    <span className="flex items-center gap-2">
      <img src="/logo.png" alt="FitLog logo" className="h-7 w-7 object-contain" />
      <span className="hidden font-display text-lg font-bold tracking-widest sm:inline">FITLOG</span>
    </span>
  );
}
