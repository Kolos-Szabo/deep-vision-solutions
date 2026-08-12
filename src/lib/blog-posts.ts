import projWeldingAsset from "@/assets/sudura-subacvatica-structura-metalica-scafandru.webp";
const projWelding = projWeldingAsset;
import projDamAsset from "@/assets/interventie-hidrotehnica-baraj-batardou.webp";
const projDam = projDamAsset;

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  dateISO: string;
  readingMinutes: number;
  category: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sudura-subacvatica-hiperbarica-ghid-complet",
    title: "Sudură subacvatică hiperbarică: ghid complet pentru lucrări industriale sub apă",
    metaTitle:
      "Sudură subacvatică hiperbarică — ghid tehnic, prețuri și aplicații | HEIDI",
    metaDescription:
      "Sudură subacvatică umedă și hiperbarică conform AWS D3.6M: tehnici, echipamente, prețuri orientative și aplicații pe baraje, conducte, platforme. Scafandri-sudori certificați în România.",
    keywords:
      "sudura subacvatica, sudura sub apa, sudura hiperbarica, wet welding, sudura subacvatica pret, scafandri sudori, AWS D3.6M, reparatii conducte sub apa, sudura baraje, sudura platforme petroliere",
    excerpt:
      "Cum se execută sudura subacvatică umedă și hiperbarică, ce standarde se aplică (AWS D3.6M) și când este recomandată fiecare metodă pentru reparații pe infrastructură critică.",
    cover: projWelding,
    coverAlt:
      "Scafandru-sudor executând sudură subacvatică hiperbarică pe o conductă industrială",
    date: "20 iunie 2026",
    dateISO: "2026-06-20",
    readingMinutes: 7,
    category: "Sudură subacvatică",
    body: [
      {
        paragraphs: [
          "Sudura subacvatică este una dintre cele mai solicitate lucrări subacvatice industriale în România, cerută frecvent pentru reparații la conducte de transport, structuri portuare, baraje hidrotehnice, piloți de pod și platforme offshore. În acest ghid explicăm diferențele tehnice dintre sudura umedă (wet welding) și sudura hiperbarică în habitat uscat, când se alege fiecare metodă, ce standarde se aplică și care sunt factorii care influențează prețul unei lucrări de sudură sub apă.",
        ],
      },
      {
        heading: "Sudura subacvatică umedă (wet welding)",
        paragraphs: [
          "Sudura umedă se execută direct în mediul acvatic, cu scafandrul în contact cu apa. Se folosesc electrozi speciali hidroizolați (E6013 marinizați, Broco SofTouch) și surse de curent continuu cu polaritate inversă, izolate galvanic. Avantajul principal este viteza de mobilizare: o echipă HEIDI poate interveni în câteva ore în orice port, lac de acumulare sau rețea hidrotehnică din România.",
          "Limitările sunt date de viteza ridicată de răcire a metalului depus (gradient termic mare → risc de fisuri la rece și incluziuni de hidrogen). Din acest motiv, sudura umedă este recomandată pentru reparații de clasă B (non-critice) conform AWS D3.6M: peticiri, etanșări, fixare anozi sacrificiali, refacere cordoane secundare.",
        ],
      },
      {
        heading: "Sudura hiperbarică în habitat uscat",
        paragraphs: [
          "Pentru lucrări critice — coloane de hidrocentrale, conducte sub presiune, noduri structurale de platformă — se construiește un habitat hiperbaric uscat (caisson) etanșat pe structură, presurizat cu amestec de gaze respiratorii. Sudura se execută în condiții similare celor de la suprafață, cu rezultate de clasă A: cordoane testabile prin radiografie (RT), ultrasunete (UT) și particule magnetice (MT).",
          "Habitatul hiperbaric necesită planificare detaliată: HAZID, proceduri WPS calificate la adâncimea de lucru, gestionarea atmosferei interne și suport de la suprafață cu compresoare, panou de gaze și cameră de decompresie. Investiția inițială este mai mare, dar este singura soluție acceptată de operatorii de infrastructură critică pentru zone supuse oboselii sau coroziunii sub tensiune.",
        ],
      },
      {
        heading: "Standardele aplicabile",
        paragraphs: [
          "Lucrările de sudură subacvatică executate de HEIDI respectă AWS D3.6M „Specification for Underwater Welding”, completat cu EN ISO 15614 pentru calificarea procedurilor și EN ISO 9606 pentru atestarea sudorilor. Pentru segmentele de oil & gas se aplică suplimentar DNV-OS-F101 și API 1104. Fiecare cordon este însoțit de fișă de inspecție vizuală (CVI), iar la cerere de raport NDT complet.",
        ],
      },
      {
        heading: "Cât costă sudura subacvatică?",
        paragraphs: [
          "Prețul unei lucrări de sudură sub apă depinde de adâncime, accesibilitate, lungimea cordonului, clasa de calitate cerută și de timpul de imobilizare a instalației beneficiare. Pentru o estimare corectă, HEIDI execută o inspecție preliminară (vizuală sau cu ROV), urmată de deviz tehnic transparent, livrat în 24–48 de ore. Solicitați o evaluare gratuită pentru lucrarea dumneavoastră.",
        ],
      },
    ],
  },
  {
    slug: "inspectii-subacvatice-rov-baraje-rezervoare",
    title: "Inspecții subacvatice cu ROV: cum verificăm baraje, rezervoare și conducte fără oprire",
    metaTitle:
      "Inspecții subacvatice cu ROV — baraje, rezervoare, conducte | HEIDI România",
    metaDescription:
      "Inspecții subacvatice cu ROV și scafandri pentru baraje, rezervoare de apă potabilă, conducte și prize de apă. Rapoarte CVI, sonar multibeam și video HD, fără oprirea instalației. Acoperire națională.",
    keywords:
      "inspectii subacvatice, inspectie ROV, robot subacvatic, inspectie baraj, inspectie rezervor apa, inspectie conducta sub apa, sonar multibeam, batimetrie, CVI subacvatic, expertize tehnice subacvatice, firma scafandri Romania",
    excerpt:
      "Cum combinăm ROV-urile, scafandrii și sonarul multibeam pentru a evalua starea barajelor, rezervoarelor de apă potabilă și conductelor submerse, fără a opri exploatarea.",
    cover: projDam,
    coverAlt:
      "Inspecție subacvatică cu ROV pe peretele unui baraj hidroenergetic din România",
    date: "12 iunie 2026",
    dateISO: "2026-06-12",
    readingMinutes: 6,
    category: "Inspecții & expertize",
    body: [
      {
        paragraphs: [
          "Inspecțiile subacvatice sunt obligatorii pentru operatorii de baraje, hidrocentrale, rezervoare de apă potabilă, porturi și conducte de transport. În ultimii ani, cererea pentru inspecții cu ROV (Remotely Operated Vehicle) a crescut accelerat în România, pentru că permite verificarea infrastructurii fără oprirea exploatării și fără expunerea scafandrilor la riscuri inutile.",
        ],
      },
      {
        heading: "Când folosim ROV și când trimitem scafandri",
        paragraphs: [
          "ROV-ul este alegerea optimă pentru adâncimi mari (peste 30 m), medii contaminate (lagune de decantare, ape industriale), spații confinate (conducte de aducțiune, galerii hidrotehnice) și zone unde curentul depășește limita de siguranță pentru scafandri. Pe galerie video HD 4K și senzori (sonar 2D/3D, profilometru, sondă multiparametri) putem cartografia rapid sute de metri de structură submersă.",
          "Scafandrul rămâne însă indispensabil pentru intervenții tactile: măsurători de coroziune cu ultrasunete (UT), batere ciocan pentru fisuri, curățare locală, montare repere, demontări și remontări. La HEIDI combinăm cele două metode în pachete „ROV + diver” pentru a livra beneficiarului un raport tehnic complet în cel mai scurt timp.",
        ],
      },
      {
        heading: "Inspecții de baraje și hidrocentrale",
        paragraphs: [
          "Pe baraje hidroenergetice executăm inspecții vizuale (CVI), măsurători de grosime, verificări ale rosturilor și etanșărilor, ale grătarelor de priză, ale stavilelor și ale galeriilor de aducțiune. Raportăm conform cerințelor ISCH și ale ANAR, cu localizare GPS, marcaje pe planșe și recomandări de mentenanță preventivă.",
        ],
      },
      {
        heading: "Rezervoare de apă potabilă",
        paragraphs: [
          "Inspecția rezervoarelor de apă potabilă (cupe de beton, castele de apă, bazine de stocare) se face cu ROV cu certificare „potable water” — fără uleiuri, fără biocide, fără contaminare. Verificăm starea pereților, a tavanului, a sorbului și a conductelor de plecare, urmată opțional de curățare profesională și dezinfecție, conform Legii 458/2002.",
        ],
      },
      {
        heading: "Conducte submerse și prize de apă",
        paragraphs: [
          "Pentru conductele submerse (Dunăre, Olt, Mureș, Argeș, lacuri de acumulare), folosim ROV cu sonar multibeam pentru cartografierea traseului, identificarea afuierilor și a deplasărilor de balastru. Inspecțiile periodice (anuale sau bianuale) previn ruperi, pierderi de presiune și sancțiuni de mediu.",
        ],
      },
      {
        heading: "Ce livrăm la final",
        paragraphs: [
          "Beneficiarul primește un raport tehnic profesional: rezumat executiv, fișe pe zone, fotografii și clipuri video extrase, planșe cu anomaliile marcate, recomandări de intervenție și estimare de costuri. La cerere, integrăm rezultatele în sisteme GIS sau în platforme proprii de mentenanță. Solicitați acum o ofertă personalizată pentru obiectivul dumneavoastră.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
