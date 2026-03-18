import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Review {
  author: string;
  location: string;
  rating: number;
  text: string;
  context: string;
}

const fallbackReviews: Review[] = [
  {
    author: "Jasser Rosseto",
    location: "Porto Alegre/RS",
    rating: 5,
    text: "O Dr. Carlos vai muito além de ser um excelente médico — ele é um ser humano raro. Com atenção, gentileza e empatia genuína, transforma cada consulta em um momento de acolhimento e confiança. Hoje, a dor ficou no passado — o que permanece é a mais sincera gratidão.",
    context: "Tratamento de dor crônica",
  },
  {
    author: "Fabrício Galant",
    location: "Porto Alegre/RS",
    rating: 5,
    text: "O que mais me impressiona no Dr. Carlos é a forma como conduz cada atendimento: sempre explicando cada passo, o que traz muita confiança e segurança. Minha mãe e minha filha também se consultam com ele. Um profissional raro, desses que fazem diferença de verdade.",
    context: "Terapia por ondas de choque — joelho",
  },
  {
    author: "Carlos Roberto Weidman",
    location: "Imbé/RS",
    rating: 5,
    text: "Desde a primeira consulta, fui atendido com atenção, empatia e profundo conhecimento. Indicou a medicação correta, explicou cada etapa com clareza. Graças a ele, a dor está controlada e consigo levar uma vida praticamente normal — algo que até pouco tempo atrás parecia impossível.",
    context: "Tratamento de Herpes Zoster — dor neuropática",
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  const initials = review.author.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div className="border border-surface-foreground/10 rounded-xl p-6 bg-white/50 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
          <span className="text-sm font-bold text-gold font-body">{initials}</span>
        </div>
        <div>
          <p className="font-body font-semibold text-sm text-surface-foreground">{review.author}</p>
          <p className="font-body text-xs text-surface-foreground/50">{review.location}</p>
        </div>
      </div>
      <span className="inline-block text-xs font-body bg-gold/10 text-gold px-2.5 py-0.5 rounded-full mb-3 self-start">
        {review.context}
      </span>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="font-body text-sm text-surface-foreground/70 leading-relaxed italic flex-1" style={{ textWrap: "pretty" }}>
        "{review.text}"
      </p>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="border border-surface-foreground/10 rounded-xl p-6 animate-pulse">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-surface-foreground/10" />
      <div className="space-y-1.5">
        <div className="h-3 w-24 bg-surface-foreground/10 rounded" />
        <div className="h-2.5 w-16 bg-surface-foreground/10 rounded" />
      </div>
    </div>
    <div className="h-3 w-32 bg-surface-foreground/10 rounded mb-3" />
    <div className="space-y-2">
      <div className="h-2.5 w-full bg-surface-foreground/10 rounded" />
      <div className="h-2.5 w-5/6 bg-surface-foreground/10 rounded" />
      <div className="h-2.5 w-4/6 bg-surface-foreground/10 rounded" />
    </div>
  </div>
);

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/google-reviews");
        if (!res.ok) throw new Error("API unavailable");
        const data = await res.json();
        setReviews(data.reviews || fallbackReviews);
      } catch {
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchReviews, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-14" style={{ textWrap: "balance" }}>
            O que dizem nossos pacientes
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <SkeletonCard />
                </ScrollReveal>
              ))
            : (reviews || fallbackReviews).map((review, i) => (
                <ScrollReveal key={review.author} delay={i * 0.1}>
                  <ReviewCard review={review} />
                </ScrollReveal>
              ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-3 text-surface-foreground/60 font-body text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-surface-foreground">5.0</span>
            <span>|</span>
            <a
              href="https://www.google.com/maps/place/MedPlex+Santana/@-30.02,-51.19,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline inline-flex items-center gap-1"
            >
              Ver todas as avaliações no Google <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GoogleReviews;
