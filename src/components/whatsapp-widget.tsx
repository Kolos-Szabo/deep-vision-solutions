import { WHATSAPP_HREF } from "@/lib/site";

export function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrieți-ne pe WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full whatsapp-btn shadow-lg transition-transform hover:scale-105 hover:-translate-y-1"
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.847A9.928 9.928 0 0 0 12.002 2C6.486 2 2 6.486 2 12.002c0 1.76.456 3.484 1.321 5.012L2 22l5.124-1.342A9.936 9.936 0 0 0 12 22c5.515 0 10-4.486 10-10.002 0-2.67-1.04-5.18-2.928-7.07A9.952 9.952 0 0 0 12.051 4.535Z" />
        </svg>
      </span>
      <span className="hidden sm:inline pr-5 font-semibold text-sm">WhatsApp</span>
    </a>
  );
}
