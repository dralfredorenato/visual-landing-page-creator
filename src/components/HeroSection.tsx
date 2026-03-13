import { MessageCircle, Camera } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-background overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <span className="inline-block border border-gold/40 text-gold text-xs font-body uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6">
                Ortopedia · Medicina da Dor · Porto Alegre/RS
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold leading-[1.1] text-foreground mb-5">
                Da dor à recuperação:
                <br />
                <span className="text-gold">sua jornada começa aqui.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg font-body text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                Com escuta real, tecnologia avançada e tratamentos minimamente invasivos, a Humana Ortopedia cuida de você com rigor científico e atenção humana.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://wa.me/5551920004467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="#tratamentos"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground/70 px-7 py-3.5 rounded-md text-sm font-medium font-body hover:border-gold/40 hover:text-gold transition-colors"
                >
                  Conheça os tratamentos
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-[13px] font-body justify-center md:justify-start">
                <span>Dr. Alfredo Metzger · CREMERS 39343</span>
                <span className="text-border">·</span>
                <span>Dr. Carlos Vieira · CREMERS 57.754</span>
                <span className="text-border">·</span>
                <span>MedPlex Santana — Porto Alegre/RS</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right photo placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light to-navy-lighter flex items-center justify-center max-w-md mx-auto w-full">
              {/* SUBSTITUIR: foto dos médicos juntos, fundo neutro escuro, expressão acolhedora */}
              <Camera className="w-16 h-16 text-gold/30" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
