"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import Logo from "@/components/Logo";

export default function Navbar() {
  const { plan, saved, setTab } = usePlan();
  const pathname = usePathname();

  const link = (href: string, label: string, active: boolean, onClick?: () => void) => (
    <Link href={href} onClick={onClick} className={`btn btn-sm rounded-full ${active ? "btn-primary" : "btn-ghost hover:text-primary"}`}>
      {label}
    </Link>
  );

  return (
    <header className="relative z-30 border-b border-base-300 bg-base-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
        <Link href="/" aria-label="FitLog home">
          <Logo />
        </Link>

        <div className="flex gap-1">
          {link("/", "Workout", pathname === "/")}
          {link("/my-plan", "My Plan", pathname === "/my-plan", () => setTab("plan"))}
        </div>

        <div className="flex gap-2">
          <Link
            href="/my-plan"
            onClick={() => setTab("plan")}
            className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-full bg-primary px-3 text-xs font-semibold text-primary-content transition hover:brightness-90"
          >
            Plan <b>{plan.length}</b>
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setTab("saved")}
            className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-full border border-base-content/60 px-3 text-xs font-semibold transition hover:border-primary hover:text-primary"
          >
            Saved <b>{saved.length}</b>
          </Link>
        </div>
      </nav>
    </header>
  );
}
