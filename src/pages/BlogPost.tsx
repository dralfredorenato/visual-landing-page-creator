import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-surface">
        <Navbar />
        <div className="container mx-auto px-4 pt-28 text-center">
          <h1 className="font-heading text-3xl font-bold text-surface-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-gold font-body hover:underline">Voltar ao blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <article className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-body text-surface-foreground/50 mb-8">
          <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-gold">{post.categoria}</span>
          <span>›</span>
          <span className="truncate max-w-[200px]">{post.titulo}</span>
        </nav>

        {/* Hero image */}
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
          <img
            src={post.imagemDestaque}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title + meta */}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-surface-foreground leading-tight mb-4" style={{ textWrap: "balance" }}>
          {post.titulo}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-body text-surface-foreground/50 mb-10">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {post.autor}
          </span>
          <span>{new Date(post.dataPublicacao).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.tempoLeitura} min de leitura
          </span>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none font-body text-surface-foreground/80 leading-relaxed [&_p]:mb-5"
          style={{ textWrap: "pretty" }}
          dangerouslySetInnerHTML={{ __html: post.conteudo }}
        />

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-surface-foreground/10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPost;
