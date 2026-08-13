import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone, Tag } from "lucide-react";
import { BLOG_POSTS, getPost } from "@/lib/blog-posts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { OFFER_MAILTO, PHONE, PHONE_HREF, abs } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Articol indisponibil | HEIDI" }, { name: "robots", content: "noindex" }] };
    const url = abs(`/blog/${post.slug}`);
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { name: "keywords", content: post.keywords },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "author", content: "HEIDI — Lucrări Subacvatice" },
        { property: "article:published_time", content: post.dateISO },
        { property: "article:section", content: post.category },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:url", content: url },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:image", content: abs(post.cover) },
        { property: "og:image:alt", content: post.coverAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.metaTitle },
        { name: "twitter:description", content: post.metaDescription },
        { name: "twitter:image", content: abs(post.cover) },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.dateISO,
            dateModified: post.dateISO,
            inLanguage: "ro-RO",
            keywords: post.keywords,
            image: abs(post.cover),
            articleSection: post.category,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "HEIDI — Lucrări Subacvatice" },
            publisher: {
              "@type": "Organization",
              name: "HEIDI — Lucrări Subacvatice",
              url: abs("/"),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "Blog", item: abs("/blog") },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <main className="bg-deep min-h-screen flex items-center justify-center">
      <div className="text-center container-x py-32">
        <h1 className="text-3xl font-display font-semibold text-foreground">Articol negăsit</h1>
        <p className="mt-4 text-foreground/65">Articolul pe care îl cauți nu mai există sau a fost mutat.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-teal hover:text-teal-glow">
          ← Înapoi la blog
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ reset }) => (
    <main className="bg-deep min-h-screen flex items-center justify-center">
      <div className="text-center container-x py-32">
        <h1 className="text-2xl font-display font-semibold text-foreground">A apărut o eroare</h1>
        <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-primary-foreground">
          Reîncearcă
        </button>
      </div>
    </main>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: (typeof BLOG_POSTS)[number] };
  const other = BLOG_POSTS.find((p) => p.slug !== post.slug);

  return (
    <main className="bg-deep min-h-screen">
      <article className="pt-28 pb-20">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-teal">
            <ArrowLeft className="h-4 w-4" /> Înapoi la blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-foreground/55">
            <span className="inline-flex items-center gap-1.5 text-teal"><Tag className="h-3.5 w-3.5" />{post.category}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingMinutes} min de citit</span>
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="container-x max-w-5xl mt-12">
          <figure className="rounded-2xl overflow-hidden border border-white/5">
            <img src={post.cover} alt={post.coverAlt} className="w-full h-auto object-cover" />
            <figcaption className="sr-only">{post.coverAlt}</figcaption>
          </figure>
        </div>

        <div className="container-x max-w-3xl mt-12 space-y-10">
          {post.body.map((block, i) => (
            <section key={i}>
              {block.heading && (
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                  {block.heading}
                </h2>
              )}
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {block.bullets && (
                  <ul className="space-y-2.5 pl-1">
                    {block.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {block.serviceLinks && (
                  <p className="text-sm text-foreground/65">
                    Detalii tehnice:{" "}
                    {block.serviceLinks.map((l, j) => (
                      <span key={l.slug}>
                        {j > 0 && " · "}
                        <Link
                          to="/servicii/$slug"
                          params={{ slug: l.slug }}
                          className="text-teal hover:text-teal-glow underline underline-offset-4"
                        >
                          {l.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </section>
          ))}

          <aside className="mt-16 rounded-2xl border border-teal/30 bg-teal/5 p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-teal">Aveți un proiect?</div>
            <h3 className="mt-3 text-2xl font-display font-semibold text-foreground">
              Solicitați o evaluare tehnică gratuită
            </h3>
            <p className="mt-3 text-foreground/70">
              Echipa HEIDI oferă deviz transparent pentru lucrări subacvatice în maximum 24–48 de ore.
              Acoperire națională, intervenții 24/7.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-teal-glow"
              >
                Solicitați ofertă <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-teal hover:text-teal"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </aside>
        </div>
      </article>

      {other && (
        <section className="border-t border-white/5 py-16">
          <div className="container-x max-w-5xl">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-6">
              Continuă să citești
            </div>
            <Link
              to="/blog/$slug"
              params={{ slug: other.slug }}
              className="group block rounded-2xl overflow-hidden border border-white/5 hover:border-teal/40 transition-colors md:grid md:grid-cols-[1fr_1.2fr]"
            >
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img src={other.cover} alt={other.coverAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="text-xs text-teal uppercase tracking-widest">{other.category}</div>
                <h3 className="mt-3 text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-teal transition-colors leading-snug">
                  {other.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/65">{other.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  Citește articolul <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
