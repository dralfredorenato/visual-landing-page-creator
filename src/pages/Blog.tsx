import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";
import { posts, type Post } from "@/data/posts";

const categoryColors: Record<string, string> = {
  "Medicina da Dor": "bg-red-100 text-red-700",
  "Joelho e Quadril": "bg-blue-100 text-blue-700",
  "Coluna": "bg-emerald-100 text-emerald-700",
  "Medicina Esportiva": "bg-orange-100 text-orange-700",
  "Saúde Óssea": "bg-purple-100 text-purple-700",
  "Qualidade de Vida": "bg-amber-100 text-amber-700",
};

const categories = Array.from(new Set(posts.map((p) => p.categoria)));

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? posts.filter((p) => p.categoria === activeCategory)
    : posts;

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <section className="bg-background pt-24 pb-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3" style={{ textWrap: "balance" }}>
            Blog Humana Ortopedia
          </h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto" style={{ textWrap: "balance" }}>
            Publicações sobre ortopedia, dor e qualidade de vida — escritas pelos nossos especialistas
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs font-body font-medium px-4 py-1.5 rounded-full border transition-colors ${
              !activeCategory ? "bg-gold text-primary-foreground border-gold" : "border-surface-foreground/15 text-surface-foreground/60 hover:border-gold/40"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-body font-medium px-4 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat ? "bg-gold text-primary-foreground border-gold" : "border-surface-foreground/15 text-surface-foreground/60 hover:border-gold/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.05}>
              <PostCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const PostCard = ({ post }: { post: Post }) => (
  <div className="border border-surface-foreground/10 rounded-xl overflow-hidden bg-white/50 group h-full flex flex-col">
    <div className="aspect-video overflow-hidden">
      <img
        src={post.imagemDestaque}
        alt={post.titulo}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <span className={`inline-block text-xs font-body font-medium px-2.5 py-0.5 rounded-full mb-3 self-start ${categoryColors[post.categoria] || "bg-gray-100 text-gray-700"}`}>
        {post.categoria}
      </span>
      <h3 className="font-heading text-lg font-bold text-surface-foreground mb-2 leading-snug" style={{ textWrap: "balance" }}>{post.titulo}</h3>
      <p className="font-body text-xs text-surface-foreground/50 mb-2">
        {post.autor} · {new Date(post.dataPublicacao).toLocaleDateString("pt-BR")} · {post.tempoLeitura} min de leitura
      </p>
      <p className="font-body text-sm text-surface-foreground/70 leading-relaxed line-clamp-2 mb-4 flex-1" style={{ textWrap: "pretty" }}>{post.resumo}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium hover:underline"
      >
        Ler artigo <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  </div>
);

export default Blog;
