import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoWhiteUrl from "@/assets/logo-heidi-white-raw.png";

import {
  Search, Droplets, Wrench, Zap, Mountain, Anchor, PackageSearch, Camera, FileText,
  Waves, Landmark, Factory, Phone, Mail, MapPin, ShieldCheck, Clock, Users, Award,
  Radio, ArrowRight, Check, ChevronRight, Bot, Cable, Construction, FlaskConical,
  ShieldAlert, Hammer, Gauge, Plus, Minus,
  type LucideIcon,
} from "lucide-react";

import heroDiver from "@/assets/hero-diver.jpg";
import textureWater from "@/assets/texture-water.jpg";
import projDam from "@/assets/interventie-hidrotehnica-baraj-batardou.webp";
import projReservoir from "@/assets/scafandru-comercial-inspectie-rezervoar-apa.webp";
import projWelding from "@/assets/sudura-subacvatica-structura-metalica-scafandru.webp";
import projLake from "@/assets/lucrari-subacvatice-lac-acumulare-scafandru.webp";
import projPipeline from "@/assets/inspectie-conducta-subacvatica-traversare-rau.webp";
import projIndustrial from "@/assets/interventie-statie-de-pompare-subacvatica.webp";
import equipmentAsset from "@/assets/echipament-scafandru-profesional-kirby-morgan.webp";




import { SiteFooter } from "@/components/site-footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { EMAIL, OFFER_MAILTO, PHONE, PHONE_HREF, SITE_URL, abs } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucrări Subacvatice Profesionale România · Scafandri Industriali HEIDI" },
      { name: "description", content: "Scafandri profesioniști pentru lucrări subacvatice industriale în România: inspecții ROV, sudură hiperbarică, betonări sub apă, curățare rezervoare și grătare, mentenanță baraje. Intervenții 24/7, peste 30 ani experiență." },
      { name: "keywords", content: "lucrări subacvatice, scafandri profesioniști, scafandri industriali, scufundări utilitare, sudură subacvatică, sudură sub apă, sudură hiperbarică, betonări subacvatice, inspecții subacvatice, lucrări cu ROV, robot subacvatic, curățare rezervoare apă, curățare grătare priză apă, mentenanță baraje, reparații baraje subacvatice, pozare conducte subacvatice, etanșare subacvatică, intervenții rapide subacvatice, expertize tehnice subacvatice, scafandri România, firma scafandri, preț lucrări subacvatice, scufundări comerciale" },
      { name: "author", content: "HEIDI — Lucrări Subacvatice" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "geo.region", content: "RO" },
      { name: "geo.placename", content: "România" },
      { property: "og:title", content: "Lucrări Subacvatice Profesionale · HEIDI Scafandri Industriali" },
      { property: "og:description", content: "Inspecții ROV, sudură hiperbarică, betonări sub apă, mentenanță baraje și rezervoare. Echipă de scafandri certificați, acoperire națională, intervenții 24/7." },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: abs("/") },
      { property: "og:type", content: "website" },
      { property: "og:image", content: abs(heroDiver) },
      { property: "og:image:alt", content: "Scafandru industrial HEIDI în intervenție subacvatică" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HEIDI — Lucrări Subacvatice Profesionale România" },
      { name: "twitter:description", content: "Scafandri profesioniști, sudură subacvatică, inspecții cu ROV, betonări sub apă. Intervenții în toată România." },
      { name: "twitter:image", content: abs(heroDiver) },
    ],
    links: [{ rel: "canonical", href: abs("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#org`,
          name: "HEIDI — Lucrări Subacvatice",
          alternateName: "HEIDI Scafandri Industriali",
          url: SITE_URL,
          telephone: PHONE,
          email: EMAIL,
          priceRange: "$$",
          image: abs(heroDiver),
          description: "Companie românească de scafandri profesioniști specializată în lucrări subacvatice industriale: inspecții vizuale și instrumentale, sudură hiperbarică, betonări sub apă, mentenanță baraje, curățare rezervoare, lucrări cu ROV și expertize tehnice.",
          areaServed: { "@type": "Country", name: "Romania" },
          foundingDate: "1993",
          knowsAbout: [
            "scufundări utilitare", "sudură hiperbarică", "betonări subacvatice",
            "inspecții subacvatice cu ROV", "mentenanță baraje hidroenergetice",
            "etanșări subacvatice", "curățare grătare priză apă",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicii subacvatice HEIDI",
            itemListElement: [
              "Inspecții subacvatice", "Mentenanță preventivă subacvatică",
              "Sudură subacvatică umedă și hiperbarică", "Betonări subacvatice",
              "Reparații și construcții baraje", "Curățare rezervoare apă potabilă",
              "Curățare grătare și prize de apă", "Lucrări cu ROV (robot subacvatic)",
              "Pozare cabluri și conducte subacvatice", "Etanșări și obturări subacvatice",
              "Căutări și recuperări subacvatice", "Filmări și expertize tehnice subacvatice",
              "Intervenții în medii contaminate", "Prospectări hidrologice și batimetrice",
            ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
          },
          address: { "@type": "PostalAddress", addressCountry: "RO" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Ce sunt lucrările subacvatice industriale?", acceptedAnswer: { "@type": "Answer", text: "Lucrările subacvatice industriale (scufundări utilitare/comerciale) cuprind inspecții, sudură hiperbarică, betonări, reparații structurale și mentenanță executate de scafandri profesioniști pe infrastructură critică: baraje, hidrocentrale, rezervoare, conducte, porturi." } },
            { "@type": "Question", name: "Cât costă o lucrare subacvatică?", acceptedAnswer: { "@type": "Answer", text: "Prețul depinde de adâncime, complexitate, durată, echipamente (scafandru sau ROV) și locație. HEIDI oferă evaluare tehnică și deviz transparent în maximum 24 de ore de la solicitare." } },
            { "@type": "Question", name: "Lucrați cu ROV (robot subacvatic)?", acceptedAnswer: { "@type": "Answer", text: "Da. Folosim ROV-uri pentru inspecții la adâncimi mari, în medii periculoase sau contaminate, precum și pentru cartografierea structurilor submerse cu sonar și cameră HD." } },
            { "@type": "Question", name: "Faceți sudură subacvatică certificată?", acceptedAnswer: { "@type": "Answer", text: "Da. Echipa noastră execută sudură umedă (wet welding) și sudură hiperbarică în habitat uscat, conform standardelor AWS D3.6M, cu scafandri-sudori atestați." } },
            { "@type": "Question", name: "Interveniți în regim de urgență 24/7?", acceptedAnswer: { "@type": "Answer", text: "Da. Mobilizăm echipa de intervenție rapidă în maximum 24 de ore la nivel național pentru etanșări scurgeri, deblocare stavile, recuperări și avarii pe infrastructură hidrotehnică." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

/* ---------------- Data ---------------- */
const services: { icon: LucideIcon; title: string; slug?: string; desc: string }[] = [
  { icon: Search,        title: "Inspecții subacvatice", slug: "inspectii-subacvatice", desc: "Inspecții vizuale (CVI) și instrumentale ale structurilor submerse — măsurători de grosime ultrasonice, cartografiere defecte, rapoarte tehnice cu documentație foto-video HD." },
  { icon: Gauge,         title: "Mentenanță preventivă", slug: "mentenanta-preventiva-subacvatica", desc: "Programe periodice de inspecție și întreținere subacvatică pentru baraje, hidrocentrale și rețele industriale — prelungesc durata de viață și previn avariile." },
  { icon: Mountain,      title: "Reparații și construcții baraje", slug: "reparatii-si-constructii-baraje", desc: "Lucrări complexe pe paramente, batardouri, stavile, vane și galerii de fund la baraje și hidrocentrale, cu retehnologizare echipamente hidromecanice." },
  { icon: Zap,           title: "Sudură subacvatică (umedă & hiperbarică)", slug: "sudura-subacvatica", desc: "Sudură wet welding și sudură în habitat hiperbaric uscat conform AWS D3.6M, executată de scafandri-sudori certificați pentru structuri metalice critice." },
  { icon: Construction,  title: "Betonări subacvatice", slug: "betonari-subacvatice", desc: "Turnare beton sub apă, cofraje subacvatice, ancoraje și consolidări structurale pe fundații, piloți de pod și praguri hidrotehnice." },
  { icon: PackageSearch, title: "Căutări și recuperări subacvatice", slug: "cautari-si-recuperari-subacvatice", desc: "Localizare cu sonar și recuperare de obiecte, utilaje, vehicule sau echipamente scufundate accidental în lacuri, râuri sau bazine industriale." },
  { icon: Wrench,        title: "Curățare grătare și prize de apă", slug: "curatare-gratare-priza-apa", desc: "Decolmatare grătare, sorburi și prize de apă la stații de pompare și hidrocentrale, cu îndepărtarea aluviunilor și a corpurilor străine." },
  { icon: Droplets,      title: "Mentenanță rezervoare de apă", slug: "mentenanta-rezervoare-apa", desc: "Curățare și decolmatare rezervoare de apă potabilă și industrială fără scoaterea din serviciu, conform normelor sanitare în vigoare." },
  { icon: Bot,           title: "Lucrări cu ROV (robot subacvatic)", slug: "lucrari-cu-rov", desc: "Inspecții ROV la adâncimi mari, în spații înguste sau medii periculoase — sonar multibeam, cameră HD, manipulator pentru sarcini ușoare." },
  { icon: Cable,         title: "Pozare cabluri și conducte subacvatice", desc: "Amplasare, traversare și protejare a cablurilor, conductelor și canalelor în ape staționare și curgătoare, inclusiv cuplări și flanșări sub apă." },
  { icon: ShieldAlert,   title: "Intervenții în medii contaminate", slug: "interventii-medii-contaminate", desc: "Scufundări în ape poluate sau cu risc respirator, cu echipament alimentat de la suprafață (cordon ombilical) și protocoale stricte de decontaminare." },
  { icon: Hammer,        title: "Etanșări și obturări subacvatice", desc: "Obturare conducte cu baloane pneumatice, dopuri metalice și etanșări de scurgeri în rezervoare — opriri rapide pentru intervenții uscate." },
  { icon: Wrench,        title: "Reparații subacvatice generale", desc: "Intervenții pe beton, oțel, garnituri și elemente structurale aflate sub apă — refacere ghidaje, batardouri și echipamente hidromecanice." },
  { icon: Anchor,        title: "Montaj structuri subacvatice", desc: "Asamblare, ancorare și poziționare a structurilor submerse — ancoraje, geamanduri, pontoane, prize de apă, cu toleranțe milimetrice." },
  { icon: FlaskConical,  title: "Prospectări hidrologice & batimetrice", desc: "Investigații hidrologice, hidrogeologice și geodezice, măsurători batimetrice și analiză calitativă a apei pentru proiecte de infrastructură." },
  { icon: Camera,        title: "Filmări și fotografii subacvatice", desc: "Documentare 4K și fotografie profesională pentru rapoarte tehnice, expertize judiciare și comunicare corporate." },
  { icon: FileText,      title: "Expertize tehnice subacvatice", slug: "expertize-tehnice-subacvatice", desc: "Expertize independente pentru beneficiari, companii de asigurări și instanțe, întocmite de specialiști atestați, pe baza inspecției directe și a documentației foto-video." },
  { icon: Waves,         title: "Lucrări în lacuri de acumulare", desc: "Intervenții pe lacuri naturale și de acumulare: prize de apă, ancoraje, instalații hidrotehnice — inclusiv la altitudini alpine." },
  { icon: Landmark,      title: "Lucrări în râuri și curent rapid", desc: "Operațiuni în condiții de curent: piloți de pod, praguri, conducte de traversare râu, înlăturare obstacole pentru navigație." },
  { icon: Factory,       title: "Lucrări în instalații industriale", desc: "Intervenții în bazine tehnologice, decantoare, stații de epurare, circuite de răcire și terminale portuare de cereale." },
];

const trustItems = [
  { icon: ShieldCheck, label: "Scafandri profesioniști" },
  { icon: Wrench,      label: "Echipamente specializate" },
  { icon: FileText,    label: "Soluții personalizate" },
  { icon: ShieldCheck, label: "Respectarea normelor de siguranță" },
  { icon: Clock,       label: "Intervenții rapide" },
  { icon: MapPin,      label: "Acoperire națională" },
  { icon: Award,       label: "Experiență în proiecte complexe" },
  { icon: FileText,    label: "Rapoarte și documentație profesională" },
];

const stats = [
  { value: "100+", label: "Proiecte finalizate" },
  { value: "30+",  label: "Ani de experiență" },
  { value: "50+",  label: "Clienți mulțumiți" },
  { value: "RO",   label: "Acoperire națională" },
];

const projects = [
  { img: projDam, w: 1600, h: 1200, alt: "Batardou metalic ridicat cu macaraua la un baraj din România, în cadrul unei lucrări subacvatice hidrotehnice executate de scafandri comerciali.", caption: "Montaj batardou și inspecție parament la baraj hidroenergetic", cat: "Baraje", title: "Inspecție parament baraj hidroenergetic", obj: "Evaluarea stării betonului și a rosturilor pe 40 m adâncime.", res: "Raport complet cu hartă defecte și plan de mentenanță." },
  { img: projReservoir, w: 1600, h: 1200, alt: "Scafandru profesionist cu cască Kirby Morgan și furtun ombilical, în timpul unei inspecții subacvatice într-un bazin de apă industrial.", caption: "Decolmatare și inspecție rezervor de apă, fără scoatere din serviciu", cat: "Rezervoare", title: "Curățare rezervor apă potabilă", obj: "Decolmatare fără scoaterea din serviciu a rezervorului.", res: "Reducerea cu 95% a sedimentelor, conformitate sanitară." },
  { img: projWelding, w: 1600, h: 1200, alt: "Scafandru comercial coborând pe scară către o structură metalică submersată, pregătit pentru lucrări de sudură subacvatică.", caption: "Sudură subacvatică umedă pe structură metalică portuară", cat: "Infrastructură", title: "Sudură subacvatică structură metalică", obj: "Repararea unei structuri portuare degradate.", res: "Sudură umedă certificată, reintrare imediată în funcțiune." },
  { img: projLake, w: 1600, h: 1067, alt: "Scafandru echipat cu cască galbenă ieșind din apă pe malul unui lac de acumulare, cu furtunul ombilical desfășurat pe mal.", caption: "Inspecție prize de apă și ancoraje pe lac de acumulare", cat: "Lacuri", title: "Lucrări pe lac de acumulare", obj: "Inspecție prize de apă și ancoraje pe lac alpin.", res: "Documentație video completă și recomandări tehnice." },
  { img: projPipeline, w: 1600, h: 1200, alt: "Scafandru pătrunzând printr-o fereastră tăiată într-o conductă industrială, pentru inspecția interioară a traversării de râu.", caption: "Inspecție interioară conductă la traversare de râu", cat: "Râuri", title: "Inspecție conductă traversare râu", obj: "Verificare integritate conductă industrială sub râu.", res: "Identificare 2 puncte critice și plan de reparație." },
  { img: projIndustrial, w: 1600, h: 1200, alt: "Echipament metalic ridicat cu macaraua din apă la o stație de pompare, sub supravegherea echipei de scafandri de pe ponton.", caption: "Recuperare echipament și verificare grătare la stație de pompare", cat: "Industrial", title: "Intervenție stație de pompare", obj: "Recuperare echipament și verificare grătare.", res: "Repunere în funcțiune în mai puțin de 24 h." },
];

const steps = [
  { n: "01", title: "Solicitare",            desc: "Ne descrieți obiectivul, locația și constrângerile. Răspundem în maximum 24 h." },
  { n: "02", title: "Evaluare tehnică",      desc: "Analizăm proiectul, propunem soluția, echipamentele și o ofertă transparentă." },
  { n: "03", title: "Intervenție subacvatică", desc: "Echipa de scafandri execută lucrarea în siguranță, cu supraveghere completă." },
  { n: "04", title: "Raport și predare",     desc: "Predăm raport tehnic, documentație foto-video și recomandări pentru mentenanță." },
];

const testimonials = [
  { quote: "Profesionalism ireproșabil. Echipa HEIDI a finalizat inspecția barajului mai rapid decât am estimat, iar raportul a fost extrem de detaliat.", author: "Director tehnic", role: "Hidrocentrală regională" },
  { quote: "Am apelat la HEIDI pentru curățarea rezervorului fără scoatere din serviciu. Soluția tehnică a fost impecabilă.", author: "Inginer șef", role: "Companie de apă municipală" },
  { quote: "Intervenție rapidă pe sudură subacvatică. Au respectat termenele și standardele de calitate.", author: "Manager proiect", role: "Constructor infrastructură" },
];

/* ---------------- Components ---------------- */
function Bubbles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => {
        const left = (i * 53) % 100;
        const size = 4 + ((i * 7) % 14);
        const dur = 8 + ((i * 3) % 12);
        const delay = (i * 0.7) % 10;
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-white/20 blur-[1px]"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animation: `float-up ${dur}s ${delay}s linear infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [
    ["Servicii", "#servicii"],
    ["De ce HEIDI", "#de-ce-noi"],
    ["Proiecte", "#proiecte"],
    ["Proces", "#proces"],
    ["Întrebări", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logoWhiteUrl} alt="HEIDI Lucrări Subacvatice" className="h-9 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-foreground/80 hover:text-teal transition-colors">
              {l}
            </a>
          ))}
          <Link to="/servicii" className="text-sm text-foreground/80 hover:text-teal transition-colors">
            Toate serviciile
          </Link>
          <Link to="/blog" className="text-sm text-foreground/80 hover:text-teal transition-colors">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className="hidden md:inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-teal">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href={OFFER_MAILTO}
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-teal-glow"
          >
            Solicitați ofertă <ArrowRight className="h-4 w-4" />
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-deep/95 backdrop-blur-xl">
          <div className="container-x flex flex-col py-4">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                 className="py-3 text-foreground/90 hover:text-teal border-b border-white/5 last:border-0">
                {l}
              </a>
            ))}
            <Link to="/servicii" onClick={() => setOpen(false)}
                  className="py-3 text-foreground/90 hover:text-teal border-b border-white/5">
              Toate serviciile
            </Link>
            <Link to="/blog" onClick={() => setOpen(false)}
                  className="py-3 text-foreground/90 hover:text-teal border-b border-white/5">
              Blog
            </Link>
            <a href={PHONE_HREF} className="mt-3 inline-flex items-center gap-2 text-teal">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroDiver} alt="Scafandru industrial HEIDI în intervenție subacvatică"
             className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/85 to-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/40" />
      </div>
      <Bubbles />
      <div className="container-x relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <span className="eyebrow">HEIDI · din 1993</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
            Lucrări <span className="text-gradient-teal">Subacvatice</span>
            <br/>Profesionale
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/75 leading-relaxed">
            Inspecții, intervenții, reparații și expertize subacvatice realizate de
            scafandri profesioniști cu echipamente specializate, pentru
            infrastructură critică din toată România.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={OFFER_MAILTO}
               className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-teal-glow hover:shadow-[0_0_40px_-5px_var(--teal-glow)]">
               Solicitați ofertă <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_HREF}
               className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-foreground transition hover:bg-white/10">
              <Phone className="h-4 w-4" /> Contact rapid
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl md:text-4xl font-semibold text-teal-glow">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hidden lg:block" aria-hidden>
          <div className="relative aspect-square rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-md p-8 shadow-elegant">
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,var(--teal)/0.25,transparent_60%)]" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <Radio className="h-5 w-5 text-teal animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Operațional</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">Intervenție disponibilă în</div>
                <div className="mt-2 font-display text-5xl font-semibold text-foreground">24h</div>
                <div className="mt-1 text-foreground/60 text-sm">la nivel național</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {["Scafandri atestați", "Echipamente verificate periodic", "Scafandru de rezervă la fiecare imersiune", "Documentație foto-video la final"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-foreground/70">
                    <Check className="h-3.5 w-3.5 text-teal" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/40 text-xs tracking-[0.3em] uppercase animate-bounce">
        scroll
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-[1.05]">{title}</h2>
      {intro && <p className="mt-5 text-foreground/70 text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="servicii" className="relative py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Servicii"
          title={<>Soluții subacvatice pentru <span className="text-gradient-teal">infrastructura critică</span></>}
          intro="Acoperim întregul lanț tehnic: de la inspecție și diagnoză până la intervenții complexe de sudură, reparații și expertize, pentru beneficiari publici și privați."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {services.map(({ icon: Icon, title, desc, slug }) => {
            const body = (
              <>
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal/10 text-teal ring-1 ring-teal/20 transition group-hover:bg-teal group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-teal opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
                  Detalii <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </>
            );
            const cls = "group relative block bg-deep p-8 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60";
            return slug ? (
              <Link key={title} to="/servicii/$slug" params={{ slug }} aria-label={`Detalii ${title}`} className={cls}>
                {body}
              </Link>
            ) : (
              <Link key={title} to="/servicii" aria-label={`Detalii ${title}`} className={cls}>
                {body}
              </Link>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/servicii"
                className="inline-flex items-center gap-2 rounded-md border border-teal/40 bg-teal/10 px-6 py-3 text-sm font-semibold text-teal hover:bg-teal hover:text-primary-foreground transition">
            Vezi toate serviciile detaliate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="de-ce-noi" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={textureWater} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/85 to-deep" />
      </div>
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="De ce HEIDI"
            title={<>Expertiză recunoscută în <span className="text-gradient-teal">lucrări subacvatice industriale</span></>}
            intro="Combinăm experiența unei echipe formate din 1993 cu echipamente moderne și proceduri stricte de siguranță. Lucrăm pentru hidrocentrale, companii de apă, primării, constructori și operatori industriali."
          />
          <figure className="mt-10 group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
            <img
              src={equipmentAsset}
              alt="Cască de scafandru profesional Kirby Morgan și ham de scufundare folosite de echipa HEIDI pentru lucrări subacvatice industriale"
              title="Echipament profesional de scufundare Kirby Morgan — HEIDI"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm text-foreground/85">
              <span className="text-teal font-semibold uppercase tracking-widest text-[10px]">Echipament certificat</span>
              <p className="mt-1 font-medium">Cască Kirby Morgan și ham de scufundare — standardul industriei pentru lucrări subacvatice de profunzime.</p>
            </figcaption>
          </figure>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-teal-glow">
            Discutați cu un specialist <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-surface/60 backdrop-blur p-5 hover:border-teal/40 transition">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal ring-1 ring-teal/20">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="pt-1.5 font-medium text-foreground/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


function Projects() {
  return (
    <section id="proiecte" className="relative py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Proiecte și referințe"
            title={<>Lucrări executate în <span className="text-gradient-teal">condiții reale</span></>}
            intro="O selecție din proiectele recente: baraje, rezervoare, lacuri, râuri și instalații industriale."
          />
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-surface ${
                i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/11] lg:aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={p.img} alt={p.alt} title={p.caption}
                     loading={i === 0 ? "eager" : "lazy"} decoding="async"
                     fetchPriority={i === 0 ? "high" : "auto"}
                     width={p.w} height={p.h} sizes={i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                     className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-deep/80 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-teal ring-1 ring-teal/30">
                  {p.cat}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight">{p.title}</h3>
                <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-foreground/75 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                  <div><span className="text-teal font-medium">Obiectiv: </span>{p.obj}</div>
                  <div><span className="text-teal font-medium">Rezultat: </span>{p.res}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proces" className="relative py-28 bg-surface/40 border-y border-white/5">
      <div className="container-x">
        <SectionHeader
          eyebrow="Procesul de lucru"
          title={<>Un parcurs <span className="text-gradient-teal">transparent</span>, de la solicitare la raport</>}
        />
        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {steps.map((s, i) => (
            <li key={s.n} className="relative bg-deep p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-semibold text-teal/30">{s.n}</span>
                {i < steps.length - 1 && <ArrowRight className="hidden lg:block h-5 w-5 text-teal/40" />}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Testimoniale"
          title={<>Ce spun <span className="text-gradient-teal">beneficiarii</span> noștri</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-white/8 bg-surface p-8 hover:border-teal/30 transition">
              <svg width="32" height="24" viewBox="0 0 32 24" className="text-teal/60" fill="currentColor" aria-hidden>
                <path d="M0 24V14C0 6 4 1 12 0v4c-4 1-6 4-6 8h6v12H0Zm20 0V14C20 6 24 1 32 0v4c-4 1-6 4-6 8h6v12H20Z"/>
              </svg>
              <blockquote className="mt-6 text-foreground/85 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-foreground/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoSection() {
  return (
    <section className="relative py-24 border-y border-white/5 bg-surface/30">
      <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12">
        <div>
          <span className="eyebrow">Expertiză</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight">
            Firmă de <span className="text-gradient-teal">scafandri profesioniști</span> în România
          </h2>
        </div>
        <div className="space-y-5 text-foreground/75 leading-relaxed">
          <p>
            <strong className="text-foreground">HEIDI</strong> este o companie românească specializată în
            <em className="text-teal not-italic"> lucrări subacvatice industriale</em> și
            <em className="text-teal not-italic"> scufundări utilitare</em> (commercial diving), cu activitate neîntreruptă din 1993.
            Executăm <em className="text-teal not-italic">sudură hiperbarică</em>, <em className="text-teal not-italic">sudură subacvatică umedă</em> (wet welding, AWS D3.6M),
            <em className="text-teal not-italic"> betonări sub apă</em>, <em className="text-teal not-italic">inspecții subacvatice cu ROV</em> și
            <em className="text-teal not-italic"> expertize tehnice</em> pentru infrastructură hidrotehnică, hidroenergetică și portuară.
          </p>
          <p>
            Acoperim toată gama de scufundări comerciale: <em className="text-teal not-italic">mentenanță baraje și hidrocentrale</em>,
            <em className="text-teal not-italic"> curățare rezervoare apă potabilă</em> și industrială fără scoaterea din serviciu,
            <em className="text-teal not-italic"> decolmatare grătare și prize de apă</em>, <em className="text-teal not-italic">pozare cabluri subacvatice</em>,
            <em className="text-teal not-italic"> etanșări cu baloane pneumatice de obturare</em>, <em className="text-teal not-italic">recuperări și căutări subacvatice</em>
            cu sonar, precum și intervenții în <em className="text-teal not-italic">medii contaminate</em> cu echipament cu cordon ombilical.
          </p>
          <p>
            Lucrăm pentru <strong className="text-foreground">ABA (Administrația Bazinală de Apă)</strong>, hidrocentrale, primării,
            companii de apă-canal, constructori de infrastructură, terminale portuare și operatori industriali.
            Răspundem la întrebări frecvente precum „cât costă o lucrare subacvatică", „firmă de scafandri lângă mine",
            „sudură subacvatică preț" sau „inspecție baraj cu ROV" cu evaluare tehnică și deviz în 24 de ore.
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Ce înseamnă scufundări utilitare sau comerciale?",
    a: "Scufundările utilitare (commercial diving) sunt lucrări subacvatice executate de scafandri profesioniști atestați, pentru obiective industriale: inspecții, sudură hiperbarică, betonări, reparații, mentenanță și expertize pe baraje, hidrocentrale, rezervoare, conducte și infrastructură portuară.",
  },
  {
    q: "Până la ce adâncime executați lucrări subacvatice?",
    a: "Lucrările curente se execută cu echipament de scufundare alimentat de la suprafață (surface-supplied), cască Kirby Morgan și comunicație permanentă cu suprafața, în domeniul uzual al scufundărilor industriale cu aer, până la aproximativ 50 m. Pentru adâncimi mai mari sau pentru zone cu risc ridicat folosim ROV sau planificăm lucrarea cu procedură dedicată, stabilită împreună cu beneficiarul.",
  },
  {
    q: "Faceți sudură subacvatică certificată?",
    a: "Da. Executăm sudură umedă (wet welding) și sudură în habitat hiperbaric uscat conform standardului AWS D3.6M, cu scafandri-sudori certificați. Eliberăm documentația WPS/PQR la cerere.",
  },
  {
    q: "Folosiți ROV (robot subacvatic) pentru inspecții?",
    a: "Da. Folosim ROV-uri cu cameră HD, sonar și manipulator pentru inspecții la adâncimi mari, în spații înguste, medii contaminate sau pentru cartografierea structurilor submerse (pile de pod, conducte, baraje).",
  },
  {
    q: "Cât costă o lucrare subacvatică?",
    a: "Prețul unei lucrări subacvatice variază în funcție de adâncime, durată, complexitate tehnică, echipament necesar (scafandru, ROV, habitat hiperbaric) și locație. Trimitem ofertă personalizată în maximum 24 de ore.",
  },
  {
    q: "Interveniți în regim de urgență 24/7 în toată România?",
    a: "Da. Avem echipă de intervenție rapidă mobilizabilă în maximum 24 de ore la nivel național pentru avarii pe baraje, deblocare stavile, etanșare scurgeri din rezervoare și recuperări de urgență.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <SectionHeader
            eyebrow="Întrebări frecvente"
            title={<>Răspunsuri la <span className="text-gradient-teal">căutările frecvente</span></>}
            intro="Ce întreabă cel mai des beneficiarii noștri despre lucrările subacvatice profesionale, scufundările utilitare și prețurile aferente."
          />
        </div>
        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="rounded-xl border border-white/10 bg-surface/60 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface transition"
                >
                  <span className="font-display text-lg font-medium pr-4">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal ring-1 ring-teal/20">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-foreground/75 leading-relaxed">{f.a}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <img src={textureWater} alt="" className="h-full w-full object-cover" loading="lazy" width={1920} height={1280} />
        <div className="absolute inset-0 bg-deep/80" />
      </div>
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-[1.05]">
            Solicitați o ofertă <span className="text-gradient-teal">personalizată</span>
          </h2>
          <p className="mt-5 text-foreground/75 text-lg">
            Descrieți-ne pe scurt obiectivul lucrării. Vă răspundem în maximum 24 de ore cu o evaluare tehnică inițială.
          </p>
          <div className="mt-10 space-y-5">
            <a href={PHONE_HREF} className="flex items-start gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal ring-1 ring-teal/20 group-hover:bg-teal group-hover:text-primary-foreground transition">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Telefon · 24/7</div>
                <div className="mt-1 font-display text-2xl font-semibold">{PHONE}</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal ring-1 ring-teal/20 group-hover:bg-teal group-hover:text-primary-foreground transition">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">E-mail</div>
                <div className="mt-1 font-display text-xl font-medium">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal ring-1 ring-teal/20">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Acoperire</div>
                <div className="mt-1 text-foreground/85">Intervenții în toată România</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface/80 backdrop-blur p-8 md:p-10 shadow-elegant flex flex-col justify-center">
          <h3 className="font-display text-2xl font-semibold">Solicitați ofertă</h3>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Trimiteți-ne un e-mail cu detaliile lucrării — tip, locație, adâncime estimată și termen —
            și primiți o propunere tehnică transparentă în maximum 24 de ore.
          </p>
          <a href={OFFER_MAILTO}
             className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-4 font-semibold text-primary-foreground transition hover:bg-teal-glow hover:shadow-[0_0_40px_-5px_var(--teal-glow)]">
            Solicitați ofertă <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-foreground/50">
            Clickul deschide clientul de e-mail cu subiectul precompletat „Solicitare ofertă".
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <Testimonials />
        <SeoSection />
        <Faq />
        <Contact />
      </main>
      <SiteFooter home />
      <WhatsAppWidget />
    </div>
  );
}
