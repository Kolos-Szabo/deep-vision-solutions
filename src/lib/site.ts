export const SITE_URL = "https://lucrarisubacvatice.ro";

export const PHONE = "0040 755 011 497";
export const PHONE_HREF = "tel:0040755011497";
export const EMAIL = "infomylake@gmail.com";
export const WHATSAPP_NUMBER = "40755011497";

export const OFFER_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Solicitare ofertă")}`;
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Bună ziua, doresc informații despre lucrările subacvatice HEIDI.",
)}`;

/** Builds an absolute URL for canonical / og:url / og:image tags. */
export const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
