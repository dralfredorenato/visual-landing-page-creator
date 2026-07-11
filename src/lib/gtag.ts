// send_to completo da conversão do Google Ads (conta AW-17642002434).
// Valor fornecido pelo painel do Google Ads — não alterar.
const GOOGLE_ADS_WHATSAPP_SEND_TO = "AW-17642002434/wjImCJLDys4cEIKwrtxB";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara o evento de conversão do Google Ads quando o usuário clica em um
 * botão/link de WhatsApp.
 *
 * É "fire-and-forget": apenas notifica o Google Ads da conversão e NÃO
 * interfere na navegação. Não há preventDefault, window.location nem
 * event_callback com redirect — portanto o link do WhatsApp abre normalmente
 * (inclusive em nova aba, já que os CTAs usam target="_blank"). Se o gtag.js
 * ainda não tiver carregado, a chamada é ignorada silenciosamente.
 */
export function trackWhatsAppConversion(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_SEND_TO,
  });
}
