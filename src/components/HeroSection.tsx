import { MessageCircle } from "lucide-react";

const HERO_BG = "https://humanaortopedia.com.br/wp-content/uploads/2025/09/BG-PC-Alfredo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 z-10" />
        <img
          src={HERO_BG}
          alt="Dr. Alfredo Metzger"
          className="absolute right-0 top-0 h-full w-auto max-w-none object-cover object-top"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground mb-6">
            Tratamentos Modernos para Dor Crônica e Limitações Articulares
          </h1>

          <p className="text-base md:text-lg font-body text-foreground/75 mb-8 leading-relaxed max-w-xl">
            Ortopedista com especialização em Dor e Cuidados Paliativos, oferecendo infiltrações articulares, neuromodulação com tDCS e prescrição de canabinoides para aliviar a dor e recuperar qualidade de vida.
          </p>

          <div className="mb-8 space-y-1">
            <p className="text-sm font-body font-semibold text-gold tracking-wide">
              Ortopedista — CREMERS 39343
            </p>
            <p className="text-sm font-body text-foreground/60">
              Especialista em Dor e Cuidados Paliativos
            </p>
            <p className="text-sm font-body text-foreground/60">
              Professor de Medicina — ULBRA
            </p>
          </div>

          <p className="text-sm font-body text-foreground/60 mb-4">
            Atendimentos em <span className="font-semibold text-foreground/80">Porto Alegre/RS</span>
          </p>

          <a
            href="https://wa.link/izazjx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold font-body hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Fale por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
