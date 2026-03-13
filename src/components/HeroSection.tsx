import { MessageCircle } from "lucide-react";

const HERO_ALFREDO = "https://humanaortopedia.com.br/wp-content/uploads/2025/09/BG-PC-Alfredo.png";
const HERO_CARLOS = "https://humanaortopedia.com.br/wp-content/uploads/2025/10/Carlos-PC-1-535x1024.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-light" />

      {/* Doctor images */}
      <div className="absolute right-0 top-0 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20 z-10" />
        <img
          src={HERO_ALFREDO}
          alt="Dr. Alfredo Metzger"
          className="absolute right-[15%] top-0 h-full w-auto max-w-none object-cover object-top opacity-70 hidden lg:block"
          loading="eager"
        />
        <img
          src={HERO_CARLOS}
          alt="Dr. Carlos Vieira"
          className="absolute right-0 top-0 h-full w-auto max-w-none object-cover object-top opacity-80"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24">
        <div className="max-w-2xl">
          <p className="text-sm font-body uppercase tracking-[0.3em] text-gold mb-4">
            Medicina da Dor & Saúde Óssea
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground mb-6">
            Da dor à reabilitação: sua jornada começa aqui.
          </h1>

          <p className="text-base md:text-lg font-body text-foreground/75 mb-8 leading-relaxed max-w-xl">
            Com acolhimento e técnicas avançadas, cuidamos de você no controle e alívio da sua dor. Porque viver com dor não é normal.
          </p>

          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-background/40 backdrop-blur-sm border border-border rounded-lg p-4">
              <p className="text-sm font-body font-semibold text-gold">
                Dr. Alfredo Metzger
              </p>
              <p className="text-xs font-body text-foreground/55 mt-1">
                CREMERS 39343
              </p>
              <p className="text-xs font-body text-foreground/55">
                Ortopedista · Dor e Cuidados Paliativos
              </p>
            </div>
            <div className="bg-background/40 backdrop-blur-sm border border-border rounded-lg p-4">
              <p className="text-sm font-body font-semibold text-gold">
                Dr. Carlos Eduardo Vieira
              </p>
              <p className="text-xs font-body text-foreground/55 mt-1">
                CREMERS 57.754 · RQE 44.416 · RQE 44.392
              </p>
              <p className="text-xs font-body text-foreground/55">
                Ortopedista · Intervencionista da Dor
              </p>
            </div>
          </div>

          <p className="text-sm font-body text-foreground/60 mb-4">
            Atendimentos em <span className="font-semibold text-foreground/80">Porto Alegre/RS</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.link/izazjx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold font-body hover:bg-gold-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Humana Ortopedia
            </a>
            <a
              href="https://wa.me/5551991932662"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold px-8 py-3.5 rounded-full text-base font-semibold font-body hover:bg-gold/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Dr. Carlos Vieira
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
