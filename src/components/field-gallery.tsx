import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FIELD_PHOTOS, GALLERY_CATEGORIES, type GalleryCategory, type GalleryPhoto } from "@/lib/gallery";

/** Photo grid + accessible lightbox. `filters` shows category chips. */
export function PhotoGallery({ photos, filters = false, eagerCount = 0 }: { photos: GalleryPhoto[]; filters?: boolean; eagerCount?: number }) {
  const [cat, setCat] = useState<GalleryCategory | "all">("all");
  const list = useMemo(() => (cat === "all" ? photos : photos.filter((p) => p.cat === cat)), [photos, cat]);
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const len = list.length;
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

  const p = open !== null ? list[open] : null;
  const btn = "inline-flex h-11 w-11 items-center justify-center rounded-full bg-deep/80 ring-1 ring-white/20 text-foreground hover:text-teal hover:ring-teal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal";
  const counts = (id: GalleryCategory | "all") => (id === "all" ? photos.length : photos.filter((x) => x.cat === id).length);

  return (
    <>
      {filters && (
        <div role="group" aria-label="Filtrează fotografiile după categorie" className="mt-8 flex flex-wrap gap-2">
          {[{ id: "all" as const, label: "Toate fotografiile" }, ...GALLERY_CATEGORIES].map((c) => (
            <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}
              className={`min-h-11 rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${cat === c.id ? "bg-teal text-primary-foreground ring-teal" : "bg-surface text-foreground/85 ring-white/10 hover:ring-teal/50 hover:text-teal"}`}>
              {c.label} <span className="opacity-70">({counts(c.id)})</span>
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" aria-live="polite">{len} fotografii afișate</p>
      <ul className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {list.map((ph, i) => (
          <li key={ph.id}>
            <button type="button" onClick={(e) => { trigger.current = e.currentTarget; setOpen(i); }}
              aria-label={`Mărește fotografia ${i + 1} din ${len}: ${ph.alt}`}
              className="group block w-full overflow-hidden rounded-xl border border-white/8 bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
              <img src={ph.sm} srcSet={`${ph.sm} 800w, ${ph.lg} 1600w`} sizes="(max-width: 1024px) 50vw, 33vw"
                alt={ph.alt} width={800} height={500} loading={i < eagerCount ? "eager" : "lazy"} decoding="async"
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
    </>
  );
}

export function FieldGallery() {
  return (
    <div className="mt-20">
      <h3 className="font-display text-2xl md:text-3xl font-semibold">Galerie foto din teren</h3>
      <p className="mt-3 max-w-2xl text-muted-foreground">Imagini reale de pe un șantier la un lac de acumulare: pregătirea echipei, echiparea scafandrului și lucrul de pe ponton.{" "}
        <a href="/galerie-foto" className="text-teal hover:text-teal-glow underline-offset-4 hover:underline">Vedeți toată galeria foto</a>
      </p>
      <PhotoGallery photos={FIELD_PHOTOS} />
    </div>
  );
}
