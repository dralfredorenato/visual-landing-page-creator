/**
 * Utilitários de diagramação tipográfica — usados APENAS pela landing de
 * campanha (/infiltracao-joelho). Não são consumidos por componentes da home.
 *
 * `noWidows` amarra as duas últimas palavras de um bloco de texto com um
 * espaço inquebrável (NBSP / U+00A0), garantindo que nunca sobre uma palavra
 * solta ("viuva") na ultima linha. Degrada graciosamente: em telas largas o
 * efeito e imperceptivel, em telas estreitas evita a quebra indesejada.
 */
const NBSP = String.fromCharCode(0x00a0);

export const noWidows = (text: string): string => {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) return text;
  const last = parts.pop() as string;
  const penultimate = parts.pop() as string;
  parts.push(`${penultimate}${NBSP}${last}`);
  return parts.join(" ");
};
