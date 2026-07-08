import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Phone, Mail, Check } from "lucide-react";
import { SERVICES, getService, type ServicePage } from "@/lib/services";
import logoWhiteUrl from "@/assets/logo-heidi-white-raw.png";

const PHONE = "0040 755 011 497";
const PHONE_HREF = "tel:0040755011497";
const EMAIL = "infomylake@gmail.com";
const WHATSAPP_NUMBER = "40755011497";

export const Route = createFileRoute("/servicii/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Serviciu inexistent" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    const url = `/servicii/${params.slug}`;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { name: "keywords", content: s.keywords },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: s.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: s.metaTitle },
        { name: "twitter:description", content: s.metaDescription },
        { name: "twitter:image", content: s.cover },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.h1,
            description: s.metaDescription,
            provider: {
              "@type": "ProfessionalService",
              name: "HEIDI — Lucrări Subacvatice",
              telephone: PHONE,
              email: EMAIL,
              areaServed: { "@type": "Country", name: "Romania" },
            },
            areaServed: "Romania",
            serviceType: s.eyebrow,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "/" },
              { "@type": "ListItem", position: 2, name: "Servicii", item: "/servicii" },
              { "@type": "ListItem", position: 3, name: s.h1, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: ServicePageView,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="font-display text-3xl">Serviciu inexistent</h1>
        <Link to="/servicii" className="mt-6 inline-flex text-teal">← Toate serviciile</Link>
      </div>
    </div>
  ),
});

function ServicePageView() {
  const { service: s } = Route.useLoaderData() as { service: ServicePage };
  const related = s.related.map(getService).filter(Boolean).slice(0, 3) as ServicePage[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 bg-deep/80 backdrop-blur-xl border-b border-white/5">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logoWhiteUrl} alt="HEIDI Lucrări Subacvatice" className="h-9 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-foreground/80 hover:text-teal">Acasă</Link>
            <Link to="/servicii" className="text-foreground/80 hover:text-teal">Servicii</Link>
            <Link to="/blog" className="text-foreground/80 hover:text-teal">Blog</Link>
            <a href="/#contact" className="text-foreground/80 hover:text-teal">Contact</a>
          </nav>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-teal-glow">
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <article className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-foreground/50">
            <Link to="/" className="hover:text-teal">Acasă</Link>
            <span className="mx-2">/</span>
            <Link to="/servicii" className="hover:text-teal">Servicii</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/80">{s.eyebrow}</span>
          </nav>

          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold">{s.eyebrow}</div>
              <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-[1.05]">{s.h1}</h1>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">{s.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact"
                   className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 font-semibold text-primary-foreground hover:bg-teal-glow">
                  Solicit deviz <ArrowRight className="h-4 w-4" />
                </a>
                <a href={PHONE_HREF}
                   className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10">
                  <Phone className="h-4 w-4" /> Suna acum
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-md whatsapp-btn px-5 py-3 font-semibold">
                  WhatsApp
                </a>
              </div>
            </div>
            <figure className="rounded-2xl overflow-hidden border border-white/10 bg-surface">
              <img src={s.cover} alt={s.coverAlt} width={1280} height={800}
                   className="w-full h-full object-cover aspect-[4/3]" />
            </figure>
          </div>

          <div className="mt-16 grid lg:grid-cols-[1.5fr_1fr] gap-14">
            <div className="space-y-12">
              {s.sections.map((sec) => (
                <section key={sec.heading}>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold">{sec.heading}</h2>
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-foreground/80 leading-relaxed">{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 rounded-lg border border-white/10 bg-surface/60 p-4">
                          <Check className="h-4 w-4 text-teal mt-1 shrink-0" />
                          <span className="text-sm text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section>
                <h2 className="font-display text-2xl md:text-3xl font-semibold">Aplicații și beneficiari tipici</h2>
                <ul className="mt-6 space-y-2">
                  {s.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-3 text-foreground/80">
                      <ChevronRight className="h-4 w-4 text-teal mt-1 shrink-0" /> <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-3xl font-semibold">Întrebări frecvente</h2>
                <div className="mt-6 space-y-4">
                  {s.faqs.map((f) => (
                    <details key={f.q} className="group rounded-xl border border-white/10 bg-surface/60 p-5 open:border-teal/30">
                      <summary className="cursor-pointer font-semibold flex justify-between items-center gap-4">
                        {f.q}
                        <span className="text-teal transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 text-foreground/75 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 self-start space-y-6">
              <div className="rounded-2xl border border-teal/25 bg-teal/5 p-6">
                <div className="text-[10px] uppercase tracking-widest text-teal font-semibold">Cere ofertă</div>
                <h3 className="mt-2 font-display text-xl font-semibold">Deviz în 24 h</h3>
                <p className="mt-2 text-sm text-foreground/75">
                  Descrieți-ne obiectivul lucrării. Vă răspundem cu evaluare tehnică inițială și estimare de buget.
                </p>
                <a href={PHONE_HREF} className="mt-4 flex items-center gap-2 text-teal font-semibold">
                  <Phone className="h-4 w-4" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="mt-2 flex items-center gap-2 text-foreground/85">
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </div>

              {related.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
                  <div className="text-[10px] uppercase tracking-widest text-foreground/50">Servicii conexe</div>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => r && (
                      <li key={r.slug}>
                        <Link to="/servicii/$slug" params={{ slug: r.slug }}
                              className="flex items-start justify-between gap-3 group">
                          <span className="text-foreground/85 group-hover:text-teal transition text-sm font-medium">
                            {r.h1.split("—")[0].trim()}
                          </span>
                          <ChevronRight className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          <div className="mt-20">
            <Link to="/servicii" className="text-teal hover:text-teal-glow inline-flex items-center gap-2">
              ← Toate serviciile subacvatice
            </Link>
          </div>
        </article>
      </main>

      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
         aria-label="Scrie-ne pe WhatsApp"
         className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full whatsapp-btn shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.847A9.928 9.928 0 0 0 12.002 2C6.486 2 2 6.486 2 12.002c0 1.76.456 3.484 1.321 5.012L2 22l5.124-1.342A9.936 9.936 0 0 0 12 22c5.515 0 10-4.486 10-10.002 0-2.67-1.04-5.18-2.928-7.07A9.952 9.952 0 0 0 12.051 4.535Z"/>
        </svg>
      </a>
    </div>
  );
}

// Prevent unused import warning if TS strict on SERVICES here
void SERVICES;
