import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
}

/**
 * Define title / meta description / canonical POR ROTA, sem tocar no <head>
 * global do index.html que a home usa. Ao desmontar (navegação SPA para outra
 * rota) restaura os valores anteriores, de modo que a home permaneça com seu
 * <head> estático original.
 */
export const useDocumentMeta = ({ title, description, canonical }: PageMeta) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = descEl?.getAttribute("content") ?? null;
    if (descEl) descEl.setAttribute("content", description);

    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute("href") ?? null;
    if (canonical && canonicalEl) canonicalEl.setAttribute("href", canonical);

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) descEl.setAttribute("content", prevDesc);
      if (canonicalEl && prevCanonical !== null) canonicalEl.setAttribute("href", prevCanonical);
    };
  }, [title, description, canonical]);
};
