import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

// Os posts vivem no próprio site (content/blog/ -> scripts/gerar-blog.mjs).
// Este JSON é gerado junto com as páginas em public/blog/.
const POSTS_URL = "/blog/posts.json";

const AUTORES: Record<string, string> = {
  alfredo: "Dr. Alfredo Metzger",
  carlos: "Dr. Carlos Vieira",
};

interface PostResumo {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string; // AAAA-MM-DD
  autor: string;
  tempoLeitura: number;
}

const formatarData = (iso: string) => {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(a, m - 1, d).toLocaleDateString("pt-BR");
};

const BlogPreviewSection = () => {
  const [posts, setPosts] = useState<PostResumo[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(POSTS_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<PostResumo[]>;
      })
      .then((dados) => {
        setPosts(dados.slice(0, 3));
        setCarregando(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("BlogPreviewSection: erro ao ler os posts", err);
        setCarregando(false);
      });
    return () => controller.abort();
  }, []);

  // Sem posts (ou falha na leitura): a seção não aparece.
  if (!carregando && posts.length === 0) return null;

  const colunas =
    posts.length === 1 ? "grid-cols-1 max-w-md mx-auto" : posts.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto" : "grid-cols-1 md:grid-cols-3";

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

        <div className={`grid gap-6 mb-10 ${carregando ? "grid-cols-1 md:grid-cols-3" : colunas}`}>
          {carregando
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-surface-foreground/10 rounded-xl bg-white/50 h-56 animate-pulse" />
              ))
            : posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <a
                    href={`/blog/${post.slug}/`}
                    className="border border-surface-foreground/10 rounded-xl bg-white/60 group h-full flex flex-col p-6 hover:shadow-lg transition-shadow"
                  >
                    <span className="text-xs font-body font-semibold uppercase tracking-widest text-gold mb-3">
                      {post.categoria}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-surface-foreground mb-2 leading-snug" style={{ textWrap: "balance" }}>
                      {post.titulo}
                    </h3>
                    <p className="font-body text-xs text-surface-foreground/50 mb-3">
                      {AUTORES[post.autor] || "Humana Ortopedia"} · {formatarData(post.data)} · {post.tempoLeitura} min de leitura
                    </p>
                    <p className="font-body text-sm text-surface-foreground/70 leading-relaxed line-clamp-3 mb-4 flex-1" style={{ textWrap: "pretty" }}>
                      {post.resumo}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </ScrollReveal>
              ))}
        </div>

        {!carregando && (
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <a
                href="/blog/"
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
