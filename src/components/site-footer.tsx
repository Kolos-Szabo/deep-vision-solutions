import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoWhiteUrl from "@/assets/logo-heidi-white-raw.png";
import anpcAsset from "@/assets/ANPC.png";
import { EMAIL, PHONE, PHONE_HREF } from "@/lib/site";

/** `home` renders in-page anchors for the sections of the home page;
 *  on inner pages the same links point back to /#section, so they never dead-end. */
export function SiteFooter({ home = false }: { home?: boolean }) {
  const p = home ? "" : "/";

  return (
    <footer className="border-t border-white/5 bg-deep">
      <div className="container-x py-16 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <img src={logoWhiteUrl} alt="HEIDI Lucrări Subacvatice" className="h-10 w-auto" width={220} height={60} />
          <p className="mt-5 text-sm text-foreground/65 max-w-sm leading-relaxed">
            HEIDI execută lucrări subacvatice industriale în România din 1993: inspecții,
            reparații, sudură subacvatică, expertize tehnice și intervenții pe infrastructura critică.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-foreground/50">Navigare</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={`${p}#servicii`} className="hover:text-teal text-foreground/80">Servicii</a></li>
            <li><Link to="/servicii" className="hover:text-teal text-foreground/80">Toate serviciile</Link></li>
            <li><a href={`${p}#de-ce-noi`} className="hover:text-teal text-foreground/80">De ce HEIDI</a></li>
            <li><a href={`${p}#proiecte`} className="hover:text-teal text-foreground/80">Proiecte</a></li>
            <li><a href={`${p}#proces`} className="hover:text-teal text-foreground/80">Proces</a></li>
            <li><Link to="/blog" className="hover:text-teal text-foreground/80">Blog</Link></li>
            <li><a href={`${p}#contact`} className="hover:text-teal text-foreground/80">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-foreground/50">Contact</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={PHONE_HREF} className="hover:text-teal text-foreground/80 inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />{PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-teal text-foreground/80 inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />{EMAIL}
              </a>
            </li>
            <li className="text-foreground/70 inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />Acoperire națională
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col items-center gap-4">
          <a
            href="https://anpc.ro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ANPC — Autoritatea Națională pentru Protecția Consumatorilor (se deschide într-o filă nouă)"
          >
            <img
              src={anpcAsset}
              alt="ANPC — Autoritatea Națională pentru Protecția Consumatorilor"
              width={800}
              height={194}
              loading="lazy"
              className="h-14 sm:h-16 w-auto rounded-lg border border-white/10 bg-white"
            />
          </a>
          <div className="w-full flex flex-wrap justify-between gap-4 text-xs text-foreground/50">
            <span>© {new Date().getFullYear()} HEIDI · LucrariSubacvatice.ro · Toate drepturile rezervate.</span>
            <span>Lucrări subacvatice profesionale · România · din 1993</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
