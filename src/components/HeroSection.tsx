import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const HERO_ALFREDO = "https://humanaortopedia.com.br/wp-content/uploads/2025/09/BG-PC-Alfredo.png";
const HERO_CARLOS = "https://humanaortopedia.com.br/wp-content/uploads/2025/10/Carlos-PC-1-535x1024.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-light" />

      {/* Doctor images */}
      <div className="absolute right-0 top-0 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/10 z-10" />
        <motion.img
          src={HERO_ALFREDO}
          alt="Dr. Alfredo Metzger"
          className="absolute right-[15%] top-0 h-full w-auto max-w-none object-cover object-top hidden lg:block"
          loading="eager"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.img
          src={HERO_CARLOS}
          alt="Dr. Carlos Vieira"
          className="absolute right-0 top-0 h-full w-auto max-w-none object-cover object-top"
          loading="eager"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.75, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-xl">
          <motion.p
            className="text-xs font-body uppercase tracking-[0.4em] text-gold mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Medicina da Dor · Porto Alegre/RS
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.15] text-foreground mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Viver sem dor
            <br />
            <span className="text-gold">é possível.</span>
          </motion.h1>

          <motion.p
            className="text-base font-body text-foreground/65 mb-8 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Técnicas avançadas e minimamente invasivas para o controle da dor, com acolhimento e cuidado personalizado.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="https://wa.link/izazjx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Consulta
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground/70 px-7 py-3.5 rounded-full text-sm font-medium font-body hover:border-gold/40 hover:text-gold transition-colors"
            >
              Conheça os tratamentos
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-10 flex items-center gap-6 text-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex flex-col">
              <span className="text-xs font-body font-semibold text-gold/80">Dr. Alfredo Metzger</span>
              <span className="text-[10px] font-body">CREMERS 39343 · Dor e Cuidados Paliativos</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex flex-col">
              <span className="text-xs font-body font-semibold text-gold/80">Dr. Carlos Vieira</span>
              <span className="text-[10px] font-body">CREMERS 57.754 · Intervencionista da Dor</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
