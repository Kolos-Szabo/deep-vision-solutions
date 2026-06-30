import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog Lucrări Subacvatice · Sudură, ROV, Inspecții | HEIDI" },
      {
        name: "description",
        content:
          "Articole tehnice despre lucrări subacvatice în România: sudură hiperbarică, inspecții cu ROV, mentenanță baraje, curățare rezervoare apă potabilă, scufundări utilitare. Resurse pentru beneficiari industriali.",
      },
      {
        name: "keywords",
        content:
          "blog lucrari subacvatice, articole scufundari profesionale, sudura subacvatica, inspectii ROV, mentenanta baraje, scufundari utilitare, scafandri industriali Romania",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Blog Lucrări Subacvatice — HEIDI" },
      {
        property: "og:description",
        content:
          "Ghiduri și studii de caz despre sudură subacvatică, inspecții cu ROV și mentenanța infrastructurii hidrotehnice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog HEIDI — Lucrări Subacvatice",
          url: "https://lucrarisubacvatice.ro/blog",
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.dateISO,
            url: `https://lucrarisubacvatice.ro/blog/${p.slug}`,
            keywords: p.keywords,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="bg-deep min-h-screen">
      <section className="relative pt-32 pb-16 border-b border-white/5">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.18),transparent_60%)]" />
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.3em] text-teal/80">Blog tehnic</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-display font-semibold text-foreground max-w-3xl leading-tight">
            Lucrări subacvatice industriale — ghiduri, studii de caz și noutăți tehnice
          </h1>
          <p className="mt-5 text-foreground/70 max-w-2xl leading-relaxed">
            Resurse practice pentru beneficiari de infrastructură hidrotehnică, portuară și
            energetică: sudură hiperbarică, inspecții cu ROV, mentenanța barajelor și
            curățarea rezervoarelor de apă potabilă din România.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-teal/40 transition-colors"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="block"
                aria-label={post.title}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.coverAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-4 text-xs text-foreground/55">
                    <span className="inline-flex items-center gap-1.5"><Tag className="h-3.5 w-3.5" />{post.category}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingMinutes} min</span>
                  </div>
                  <h2 className="mt-4 text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-teal transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                    Citește articolul <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-teal"
          >
            ← Înapoi la pagina principală
          </Link>
        </div>
      </section>
    </main>
  );
}
