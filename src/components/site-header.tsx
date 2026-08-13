import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logoWhiteUrl from "@/assets/logo-heidi-white-raw.png";
import { PHONE, PHONE_HREF } from "@/lib/site";

/** Header used on the inner pages (servicii, blog). The home page has its own
 *  transparent-on-scroll variant with the same links, so navigation stays identical. */
export function SiteHeader({ active }: { active?: "servicii" | "blog" }) {
  const cls = (key: "servicii" | "blog") =>
    active === key ? "text-teal" : "text-foreground/80 hover:text-teal";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-deep/80 backdrop-blur-xl border-b border-white/5">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="HEIDI — Lucrări Subacvatice, pagina principală">
          <img src={logoWhiteUrl} alt="HEIDI Lucrări Subacvatice" className="h-9 w-auto" width={220} height={60} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Navigare principală">
          <Link to="/" className="text-foreground/80 hover:text-teal">Acasă</Link>
          <Link to="/servicii" className={cls("servicii")}>Servicii</Link>
          <Link to="/blog" className={cls("blog")}>Blog</Link>
          <a href="/#contact" className="text-foreground/80 hover:text-teal">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-teal-glow"
        >
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{PHONE}</span>
          <span className="sr-only sm:hidden">Sunați la {PHONE}</span>
        </a>
      </div>
    </header>
  );
}
