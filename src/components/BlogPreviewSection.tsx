import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

// Mapa de cores por categoria visual (mantido do design original)
const categoryColors: Record<string, string> = {
  "Medicina da Dor": "bg-red-100 text-red-700",
  "Joelho e Quadril": "bg-blue-100 text-blue-700",
  "Coluna": "bg-emerald-100 text-emerald-700",
  "Medicina Esportiva": "bg-orange-100 text-orange-700",
  "Saúde Óssea": "bg-purple-100 text-purple-700",
  "Qualidade de Vida": "bg-amber-100 text-amber-700",
};

// Fallback: deriva categoria visual a partir do slug
// (enquanto WP tem só "Ortopedia e Dor" como categoria real)
const slugToCategory: Record<string, string> = {
  "artrose-joelho-tratamento-conservador": "Joelho e Quadril",
  "dor-lombar-cronica-causas-tratamento": "Coluna",
  "infiltracao-articular-guiada-imagem": "Medicina da Dor",
};

// Tipo dos posts retornados pela WP REST API
interface WordPressPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name: string;
    }>;
    "wp:term"?: Array<Array<{
      name: string;
      taxonomy: string;
    }>>;
  };
}

interface PostPreview {
  id: number;
  slug: string;
  link: string;
  titulo: string;
  resumo: string;
  imagemDestaque: string;
  imagemAlt: string;
  autor: string;
  categoria: string;
  dataPublicacao: string;
  tempoLeitura: number;
}

const WP_API_URL = "https://humanaortopedia.com.br/blog/wp-json/wp/v2/posts?per_page=3&_embed";

const estimateReadingTime = (excerptHtml: string): number => {
  const text = excerptHtml.replace(/<[^>]+>/g, "").trim();
  const words = text.split(/\s+/).length;
  const estimatedWords = words * 8;
  return Math.max(3, Math.round(estimatedWords / 200));
};

const cleanExcerpt = (html: string, maxChars = 160): string => {
  const text = html.replace(/<[^>]+>/g, "").trim();
  const decoded = text
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'");
  if (decoded.length <= maxChars) return decoded;
  return decoded.slice(0, maxChars).trim() + "...";
};

const transformWpPost = (wp: WordPressPost): PostPreview => {
  const featuredMedia = wp._embedded?.["wp:featuredmedia"]?.[0];
  const authorEmbed = wp._embedded?.author?.[0];
  const categoryEmbed = wp._embedded?.["wp:term"]?.[0]?.find(t => t.taxonomy === "category");
  const wpCategoryName = categoryEmbed?.name || "";
  const visualCategory = slugToCategory[wp.slug] || wpCategoryName || "Saúde";

  return {
    id: wp.id,
    slug: wp.slug,
    link: wp.link,
    titulo: wp.title.rendered.replace(/&#8211;/g, "–").replace(/&amp;/g, "&"),
    resumo: cleanExcerpt(wp.excerpt.rendered),
    imagemDestaque: featuredMedia?.source_url || "",
    imagemAlt: featuredMedia?.alt_text || wp.title.rendered,
    autor: authorEmbed?.name || "Humana Ortopedia",
    categoria: visualCategory,
    dataPublicacao: wp.date,
    tempoLeitura: estimateReadingTime(wp.excerpt.rendered),
  };
};

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(WP_API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<WordPressPost[]>;
      })
      .then((data) => {
        setPosts(data.map(transformWpPost));
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("BlogPreviewSection — erro ao buscar posts:", err);
        setError(true);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  if (error) return null;

  return (
    <section id="blog" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-3" style={{ textWrap: "balance" }}>
            Conteúdo que informa, não assusta
          </h2>
          <p className="text-center text-surface-foreground/60 font-body mb-14 max-w-xl mx-auto" style={{ textWrap: "balance" }}>
            Publicações sobre ortopedia, dor e qualidade de vida
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border border-surface-foreground/10 rounded-xl overflow-hidden bg-white/50 h-full flex flex-col animate-pulse">
                <div className="aspect-video bg-surface-foreground/10" />
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="h-5 w-24 bg-surface-foreground/10 rounded-full" />
                  <div className="h-6 bg-surface-foreground/10 rounded w-full" />
                  <div className="h-3 bg-surface-foreground/10 rounded w-2/3" />
                  <div className="h-3 bg-surface-foreground/10 rounded w-full" />
                  <div className="h-3 bg-surface-foreground/10 rounded w-4/5" />
                </div>
              </div>
            ))
          ) : (
            posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <a
                  href={post.link}
                  className="border border-surface-foreground/10 rounded-xl overflow-hidden bg-white/50 group h-full flex flex-col cursor-pointer block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imagemDestaque}
                      alt={post.imagemAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`inline-block text-xs font-body font-medium px-2.5 py-0.5 rounded-full mb-3 self-start ${categoryColors[post.categoria] || "bg-gray-100 text-gray-700"}`}>
                      {post.categoria}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-surface-foreground mb-2 leading-snug" style={{ textWrap: "balance" }}>
                      {post.titulo}
                    </h3>
                    <p className="font-body text-xs text-surface-foreground/50 mb-2">
                      {post.autor} · {new Date(post.dataPublicacao).toLocaleDateString("pt-BR")} · {post.tempoLeitura} min de leitura
                    </p>
                    <p className="font-body text-sm text-surface-foreground/70 leading-relaxed line-clamp-2 mb-4 flex-1" style={{ textWrap: "pretty" }}>
                      {post.resumo}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))
          )}
        </div>

        {!loading && posts.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <a
                href="https://humanaortopedia.com.br/blog/"
                className="inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 rounded-md text-sm font-semibold font-body hover:bg-gold/10 transition-colors"
              >
                Ver todos os artigos
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default BlogPreviewSection;
