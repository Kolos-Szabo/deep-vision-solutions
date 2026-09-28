/** Central source for every real photo shown on the site. Used by the home-page
 *  field gallery and by the /galerie-foto page. Each photo has a full-size WebP
 *  (1600px) and an 800px variant (`-800.webp`) for srcset. */
const imgs = import.meta.glob("@/assets/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const get = (n: string) => Object.entries(imgs).find(([k]) => k.endsWith(`/${n}.webp`))?.[1] ?? "";

export type GalleryCategory = "baraje-lacuri" | "interventii" | "echipa-echipamente";

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "baraje-lacuri", label: "Baraje și lacuri de acumulare" },
  { id: "interventii", label: "Intervenții și lucrări tehnice" },
  { id: "echipa-echipamente", label: "Echipă și echipamente" },
];

export type GalleryPhoto = { id: string; alt: string; cat: GalleryCategory; field?: boolean; lg: string; sm: string };

const RAW: Omit<GalleryPhoto, "lg" | "sm">[] = [
  { id: "vedere-aeriana-turn-priza-lac-acumulare-ponton", cat: "baraje-lacuri", field: true, alt: "Vedere aeriană a unui turn de priză pe un lac de acumulare, cu pasarelă de acces și pontonul echipei de scafandri alături." },
  { id: "ponton-de-lucru-scafandri-langa-turn-priza-lac", cat: "baraje-lacuri", field: true, alt: "Ponton de lucru cu echipa de scafandri și echipamente, ancorat lângă pila de beton a unui turn de priză." },
  { id: "echipa-scafandri-ponton-lac-acumulare-vedere-drona", cat: "echipa-echipamente", field: true, alt: "Vedere de sus a echipei cu căști de protecție pe ponton, asistând un scafandru care intră în apă cu furtunul ombilical." },
  { id: "verificare-echipamente-scufundare-inainte-de-imersie", cat: "echipa-echipamente", field: true, alt: "Specialist care verifică un instrument de scufundare lângă cutii de comunicații galbene, înainte de imersie." },
  { id: "pregatire-scafandru-ponton-turn-priza-baraj", cat: "echipa-echipamente", field: true, alt: "Membri ai echipei cu vestă de salvare și cască pregătind un scafandru echipat cu butelie de rezervă pe ponton." },
  { id: "echipare-scafandru-furtun-ombilical-ponton", cat: "echipa-echipamente", field: true, alt: "Echipa ajustează furtunul ombilical al scafandrului complet echipat, pe ponton, lângă lacul de acumulare." },
  { id: "intrare-in-apa-scafandru-langa-perete-beton-baraj", cat: "baraje-lacuri", field: true, alt: "Scafandru cu furtun ombilical intrând în apă de pe ponton, lângă un perete de beton." },
  { id: "scafandru-cu-casca-si-lanterne-la-suprafata-apei", cat: "echipa-echipamente", field: true, alt: "Scafandru cu mască integrală și lanterne montate, la suprafața apei, legat de ombilicalul tricolor." },
  { id: "scafandru-la-suprafata-langa-ponton-de-lucru", cat: "baraje-lacuri", field: true, alt: "Scafandru la suprafață lângă marginea pontonului, cu furtunuri ombilicale pe punte." },
  { id: "interventie-hidrotehnica-baraj-batardou", cat: "baraje-lacuri", alt: "Batardou metalic ridicat cu macaraua la un baraj, în cadrul unei lucrări subacvatice hidrotehnice." },
  { id: "lucrari-subacvatice-lac-acumulare-scafandru", cat: "baraje-lacuri", alt: "Scafandru echipat cu cască galbenă ieșind din apă pe malul unui lac de acumulare, cu furtunul ombilical desfășurat pe mal." },
  { id: "montaj-structura-metalica-subacvatica-macara", cat: "interventii", alt: "Montaj cu macaraua al unei structuri metalice destinate lucrărilor subacvatice." },
  { id: "interventie-statie-de-pompare-subacvatica", cat: "interventii", alt: "Echipament metalic ridicat cu macaraua din apă la o stație de pompare, sub supravegherea echipei de pe ponton." },
  { id: "inspectie-conducta-subacvatica-traversare-rau", cat: "interventii", alt: "Scafandru pătrunzând printr-o fereastră tăiată într-o conductă industrială, pentru inspecția interioară." },
  { id: "sudura-subacvatica-structura-metalica-scafandru", cat: "interventii", alt: "Scafandru comercial coborând pe scară către o structură metalică submersată." },
  { id: "scafandru-comercial-inspectie-rezervoar-apa", cat: "interventii", alt: "Scafandru cu cască și furtun ombilical în timpul unei inspecții subacvatice într-un bazin de apă." },
  { id: "scafandru-intrare-in-apa-scufundari-utilitare", cat: "echipa-echipamente", alt: "Scafandru echipat intrând în apă pentru o scufundare utilitară." },
  { id: "scufundari-in-conditii-de-iarna-gheata-scafandru", cat: "echipa-echipamente", alt: "Echipă de scafandri lucrând pe timp de iarnă, pe gheață." },
  { id: "echipament-scafandru-profesional-kirby-morgan", cat: "echipa-echipamente", alt: "Cască de scufundare profesională și echipament pentru scafandri comerciali." },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = RAW.map((p) => ({ ...p, lg: get(p.id), sm: get(`${p.id}-800`) })).filter((p) => p.lg && p.sm);
export const FIELD_PHOTOS = GALLERY_PHOTOS.filter((p) => p.field);
