import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { PhotoGallery } from "@/components/field-gallery";
import { GALLERY_PHOTOS } from "@/lib/gallery";
import { abs, OFFER_MAILTO } from "@/lib/site";

const TITLE = "Galerie foto lucrări subacvatice | HEIDI";
const DESC = "Fotografii reale din activitatea echipei HEIDI: scafandri comerciali la baraje și lacuri de acumulare, intervenții tehnice subacvatice, echipamente și pregătirea scufundărilor.";

export const Route = createFileRoute("/galerie-foto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: abs("/galerie-foto") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: abs("/galerie-foto") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: abs("/") },
          { "@type": "ListItem", position: 2, name: "Galerie foto", item: abs("/galerie-foto") },
        ],
      }),
    }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <SiteHeader active="galerie" />
      <main className="pt-32 pb-24">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-foreground/60">
            <Link to="/" className="hover:text-teal">Acasă</Link> <span aria-hidden="true">/</span> <span className="text-foreground/85">Galerie foto</span>
          </nav>
          <span className="eyebrow mt-8">Din teren</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold">Galerie foto – Lucrări subacvatice</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            O colecție de fotografii reale din activitatea noastră: pregătirea echipei pe ponton, scafandri comerciali la baraje și lacuri de acumulare,
            intervenții tehnice și echipamentele folosite. Detalii despre fiecare tip de lucrare găsiți pe paginile de{" "}
            <Link to="/servicii" className="text-teal hover:text-teal-glow">servicii</Link>.
          </p>
          <PhotoGallery photos={GALLERY_PHOTOS} filters eagerCount={3} />
          <div className="mt-16 rounded-2xl border border-white/8 bg-surface p-8 md:flex md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Aveți o lucrare subacvatică de planificat?</h2>
              <p className="mt-2 text-muted-foreground">Descrieți-ne situația și revenim cu o propunere tehnică.</p>
            </div>
            <a href={OFFER_MAILTO} className="mt-6 md:mt-0 inline-flex shrink-0 items-center rounded-md bg-teal px-6 py-3 font-semibold text-primary-foreground hover:bg-teal-glow">Solicitați ofertă</a>
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppWidget />
    </>
  );
}
