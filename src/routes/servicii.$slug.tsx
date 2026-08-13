import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Phone, Mail, Check } from "lucide-react";
import { getService, type ServicePage } from "@/lib/services";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { EMAIL, OFFER_MAILTO, PHONE, PHONE_HREF, WHATSAPP_HREF, abs } from "@/lib/site";

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
    const url = abs(`/servicii/${params.slug}`);
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { name: "keywords", content: s.keywords },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:url", content: url },
        { property: "og:image", content: abs(s.cover) },
        { property: "og:image:alt", content: s.coverAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: s.metaTitle },
        { name: "twitter:description", content: s.metaDescription },
        { name: "twitter:image", content: abs(s.cover) },
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
              { "@type": "ListItem", position: 1, name: "Acasă", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "Servicii", item: abs("/servicii") },
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
      <SiteHeader active="servicii" />


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
                <a href={OFFER_MAILTO}
                   className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 font-semibold text-primary-foreground hover:bg-teal-glow">
                  Solicitați ofertă <ArrowRight className="h-4 w-4" />
                </a>
                <a href={PHONE_HREF}
                   className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10">
                  <Phone className="h-4 w-4" /> Sunați acum
                </a>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer"
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
                <div className="text-[10px] uppercase tracking-widest text-teal font-semibold">Cereți o ofertă</div>
                <h3 className="mt-2 font-display text-xl font-semibold">Deviz în 24 de ore</h3>
                <p className="mt-2 text-sm text-foreground/75">
                  Descrieți-ne obiectivul lucrării. Vă răspundem cu o evaluare tehnică inițială și o estimare de buget.
                </p>
                <a href={OFFER_MAILTO} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-teal-glow">
                  Solicitați ofertă <ArrowRight className="h-4 w-4" />
                </a>
                <a href={PHONE_HREF} className="mt-4 flex items-center gap-2 text-teal font-semibold">
                  <Phone className="h-4 w-4" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="mt-2 flex items-center gap-2 text-foreground/85 break-all">
                  <Mail className="h-4 w-4 shrink-0" /> {EMAIL}
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
      <SiteFooter />
      <WhatsAppWidget />
    </div>
  );
}
