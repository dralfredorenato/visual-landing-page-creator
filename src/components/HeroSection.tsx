import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logoHumana from "@/assets/logo-humana-branco.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Logo fade-in */}
        <motion.img
          src={logoHumana}
          alt="Humana Ortopedia"
          className="w-40 md:w-52 mb-10 opacity-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-[56px] font-heading font-bold leading-[1.1] text-foreground mb-4"
          style={{ textWrap: "balance" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        >
          Da dor à recuperação:
          <br />
          <span className="text-gold">sua jornada começa aqui.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg font-body text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
          style={{ textWrap: "balance" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          Ortopedia humanizada e medicina da dor com rigor científico e atenção humana.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Credentials */}
        <motion.div
          className="mt-14 flex flex-col md:flex-row items-center gap-1 md:gap-x-2 text-muted-foreground text-[13px] font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <span>Dr. Alfredo Metzger · CREMERS 39343</span>
          <span className="hidden md:inline text-border">·</span>
          <span>Dr. Carlos Vieira · CREMERS 57.754</span>
          <span className="hidden md:inline text-border">·</span>
          <span>MedPlex Santana — Porto Alegre/RS</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
