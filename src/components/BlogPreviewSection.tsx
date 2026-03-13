import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { posts } from "@/data/posts";

const categoryColors: Record<string, string> = {
  "Medicina da Dor": "bg-red-100 text-red-700",
  "Joelho e Quadril": "bg-blue-100 text-blue-700",
  "Coluna": "bg-emerald-100 text-emerald-700",
  "Medicina Esportiva": "bg-orange-100 text-orange-700",
  "Saúde Óssea": "bg-purple-100 text-purple-700",
  "Qualidade de Vida": "bg-amber-100 text-amber-700",
};

const BlogPreviewSection = () => {
  const previewPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-3">
            Conteúdo que informa, não assusta
          </h2>
          <p className="text-center text-surface-foreground/60 font-body mb-14 max-w-xl mx-auto">
            Publicações semanais sobre ortopedia, dor e qualidade de vida
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <div className="border border-surface-foreground/10 rounded-xl overflow-hidden bg-white/50 group">
                <div className="aspect-video bg-gradient-to-br from-surface-foreground/5 to-surface-foreground/10 flex items-center justify-center">
                  {/* SUBSTITUIR: imagem de destaque */}
                  <Camera className="w-8 h-8 text-surface-foreground/20" />
                </div>
                <div className="p-5">
                  <span className={`inline-block text-xs font-body font-medium px-2.5 py-0.5 rounded-full mb-3 ${categoryColors[post.categoria] || "bg-gray-100 text-gray-700"}`}>
                    {post.categoria}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-surface-foreground mb-2 leading-snug">{post.titulo}</h3>
                  <p className="font-body text-xs text-surface-foreground/50 mb-2">
                    {post.autor} · {new Date(post.dataPublicacao).toLocaleDateString("pt-BR")} · {post.tempoLeitura} min de leitura
                  </p>
                  <p className="font-body text-sm text-surface-foreground/70 leading-relaxed line-clamp-2 mb-4">{post.resumo}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium hover:underline group-hover:gap-2 transition-all"
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-3 rounded-md text-sm font-semibold font-body hover:bg-gold/10 transition-colors"
            >
              Ver todos os artigos
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
