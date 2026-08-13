import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { OFFER_MAILTO, abs } from "@/lib/site";

export const Route = createFileRoute("/servicii/")({
  head: () => ({
    meta: [
      { title: "Servicii subacvatice industriale · HEIDI România" },
      {
        name: "description",
        content:
          "Toate serviciile subacvatice HEIDI: inspecții, sudură subacvatică, betonări sub apă, reparații la baraje, curățare rezervoare și grătare, lucrări cu ROV, căutări și recuperări, expertize tehnice.",
      },
      {
        name: "keywords",
        content:
          "servicii scafandri, lucrari subacvatice servicii, firma scafandri Romania, scufundari utilitare servicii, sudura subacvatica, inspectii ROV, betonari sub apa",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Servicii subacvatice industriale · HEIDI" },
      {
        property: "og:description",
        content:
          "Gamă completă de scufundări utilitare: inspecții, sudură subacvatică, betonări, mentenanța barajelor și lucrări cu ROV, pentru operatori de infrastructură din România.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: abs("/servicii") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/servicii") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: abs("/") },
            { "@type": "ListItem", position: 2, name: "Servicii", item: abs("/servicii") },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: abs(`/servicii/${s.slug}`),
            name: s.h1,
          })),
        }),
      },
    ],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="servicii" />


      <main className="pt-32 pb-24">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-foreground/50">
            <Link to="/" className="hover:text-teal">Acasă</Link> <span className="mx-2">/</span> <span className="text-foreground/80">Servicii</span>
          </nav>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-4xl">
            Servicii subacvatice <span className="text-gradient-teal">industriale</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            Ecosistem complet de scufundări utilitare — de la inspecții și expertize până la sudură hiperbarică,
            betonări subacvatice, mentenanță baraje și lucrări cu ROV. Fiecare serviciu are pagina lui dedicată,
            cu detalii tehnice, aplicații și întrebări frecvente.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/servicii/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface hover:border-teal/40 transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.cover} alt={s.coverAlt} loading="lazy" width={1280} height={800}
                       className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-deep/70 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest text-teal font-semibold">{s.eyebrow}</div>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug group-hover:text-teal-glow transition">
                    {s.h1.split("—")[0].trim()}
                  </h2>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed line-clamp-3">{s.intro}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-teal">
                    Detalii serviciu <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-teal/20 bg-teal/5 p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Nu găsiți lucrarea dumneavoastră?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/75">
              Fiecare proiect subacvatic este unic. Descrieți-ne obiectivul și primiți o evaluare tehnică cu deviz în 24 de ore.
            </p>
            <a href="/#contact"
               className="mt-8 inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3.5 font-semibold text-primary-foreground hover:bg-teal-glow">
              Solicitați ofertă <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
