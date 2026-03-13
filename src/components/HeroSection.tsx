import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-humana-branco.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-light" />

      {/* Subtle logo watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="w-[500px] md:w-[700px] max-w-[80vw] opacity-[0.03] select-none"
        />
      </motion.div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-xl mx-auto text-center md:text-left md:mx-0">
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
            className="text-base font-body text-foreground/65 mb-8 leading-relaxed max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Técnicas avançadas e minimamente invasivas para o controle da dor, com acolhimento e cuidado personalizado.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
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
            className="mt-10 flex items-center gap-6 text-foreground/40 justify-center md:justify-start"
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
