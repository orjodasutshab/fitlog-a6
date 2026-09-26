export default function Tags({ list }: { list: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {list.map((t) => <span key={t} className="badge badge-primary badge-sm font-semibold uppercase">{t}</span>)}
    </div>
  );
}
