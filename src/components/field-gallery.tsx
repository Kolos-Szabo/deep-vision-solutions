import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const imgs = import.meta.glob("@/assets/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const get = (n: string) => Object.entries(imgs).find(([k]) => k.endsWith(`/${n}.webp`))?.[1] ?? "";

const PHOTOS = [
  { n: "vedere-aeriana-turn-priza-lac-acumulare-ponton", alt: "Vedere aeriană a unui turn de priză pe un lac de acumulare, cu pasarelă de acces și pontonul echipei de scafandri alături." },
  { n: "ponton-de-lucru-scafandri-langa-turn-priza-lac", alt: "Ponton de lucru cu echipa de scafandri și echipamente, ancorat lângă pila de beton a unui turn de priză." },
  { n: "echipa-scafandri-ponton-lac-acumulare-vedere-drona", alt: "Vedere de sus a echipei cu căști de protecție pe ponton, asistând un scafandru care intră în apă cu furtunul ombilical." },
  { n: "verificare-echipamente-scufundare-inainte-de-imersie", alt: "Specialist care verifică un instrument de scufundare lângă cutii de comunicații galbene, înainte de imersie." },
  { n: "pregatire-scafandru-ponton-turn-priza-baraj", alt: "Membri ai echipei cu vestă de salvare și cască pregătind un scafandru echipat cu butelie de rezervă pe ponton." },
  { n: "echipare-scafandru-furtun-ombilical-ponton", alt: "Echipa ajustează furtunul ombilical al scafandrului complet echipat, pe ponton, lângă lacul de acumulare." },
  { n: "intrare-in-apa-scafandru-langa-perete-beton-baraj", alt: "Scafandru cu furtun ombilical intrând în apă de pe ponton, lângă un perete de beton." },
  { n: "scafandru-cu-casca-si-lanterne-la-suprafata-apei", alt: "Scafandru cu mască integrală și lanterne montate, la suprafața apei, legat de ombilicalul tricolor." },
  { n: "scafandru-la-suprafata-langa-ponton-de-lucru", alt: "Scafandru la suprafață lângă marginea pontonului, cu furtunuri ombilicale pe punte." },
].map((p) => ({ ...p, lg: get(p.n), sm: get(`${p.n}-800`) }));

export function FieldGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const len = PHOTOS.length;
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + len) % len)), [len]);
  const close = useCallback(() => { setOpen(null); trigger.current?.focus(); }, []);

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        const f = document.querySelectorAll<HTMLElement>("#lightbox button");
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open === null, go, close]);

  const p = open !== null ? PHOTOS[open] : null;
  const btn = "inline-flex h-11 w-11 items-center justify-center rounded-full bg-deep/80 ring-1 ring-white/20 text-foreground hover:text-teal hover:ring-teal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal";

  return (
    <div className="mt-20">
      <h3 className="font-display text-2xl md:text-3xl font-semibold">Galerie foto din teren</h3>
      <p className="mt-3 max-w-2xl text-muted-foreground">Imagini reale de pe un șantier la un lac de acumulare: pregătirea echipei, echiparea scafandrului și lucrul de pe ponton.</p>
      <ul className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {PHOTOS.map((ph, i) => (
          <li key={ph.n}>
            <button type="button" onClick={(e) => { trigger.current = e.currentTarget; setOpen(i); }}
              aria-label={`Mărește fotografia ${i + 1} din ${len}: ${ph.alt}`}
              className="group block w-full overflow-hidden rounded-xl border border-white/8 bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
              <img src={ph.sm} srcSet={`${ph.sm} 800w, ${ph.lg} 1600w`} sizes="(max-width: 1024px) 50vw, 33vw"
                alt={ph.alt} width={800} height={450} loading="lazy" decoding="async"
                className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            </button>
          </li>
        ))}
      </ul>

      {p && (
        <div id="lightbox" role="dialog" aria-modal="true" aria-label="Galerie foto mărită"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/95 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}>
          <figure className="flex max-h-full max-w-6xl flex-col items-center">
            <img src={p.lg} alt={p.alt} className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain" />
            <figcaption className="mt-4 max-w-3xl text-center text-sm text-foreground/80">
              <span className="text-teal font-semibold mr-2">{open! + 1} din {len}</span>{p.alt}
            </figcaption>
          </figure>
          <button ref={closeRef} type="button" onClick={close} aria-label="Închide galeria" className={`${btn} absolute top-4 right-4`}><X className="h-5 w-5" /></button>
          <button type="button" onClick={() => go(-1)} aria-label="Fotografia precedentă" className={`${btn} absolute left-3 top-1/2 -translate-y-1/2`}><ChevronLeft className="h-6 w-6" /></button>
          <button type="button" onClick={() => go(1)} aria-label="Fotografia următoare" className={`${btn} absolute right-3 top-1/2 -translate-y-1/2`}><ChevronRight className="h-6 w-6" /></button>
        </div>
      )}
    </div>
  );
}
