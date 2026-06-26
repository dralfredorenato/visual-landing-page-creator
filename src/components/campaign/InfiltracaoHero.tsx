import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { noWidows } from "@/lib/typography";

/**
 * Hero da campanha de infiltração de joelho. Herda o visual do HeroSection da
 * home (mesmo fundo, orb dourado, tipografia e animações framer-motion), com
 * copy de match total ao anúncio e o CTA de WhatsApp visível na primeira tela.
 */
const InfiltracaoHero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-background overflow-hidden pt-16">
      {/* Subtle gradient orb — igual ao hero da home */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center py-16">
        <motion.span
          className="text-xs font-body uppercase tracking-[0.3em] text-gold font-medium mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Infiltração e viscossuplementação de joelho
        </motion.span>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-[52px] font-heading font-bold leading-[1.12] text-foreground mb-5 max-w-3xl"
          style={{ textWrap: "balance" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          Dor no joelho que não passa?{" "}
          <span className="text-gold">{noWidows("A infiltração pode ser o caminho para voltar a se mover sem dor.")}</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg font-body text-muted-foreground mb-9 max-w-xl mx-auto leading-relaxed"
          style={{ textWrap: "pretty" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {noWidows("Avaliação detalhada com equipe médica dedicada. Procedimentos guiados por ultrassom, com precisão e segurança.")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <WhatsAppButton variant="gold" className="text-base px-8 py-4">
            Agendar avaliação pelo WhatsApp
          </WhatsAppButton>
        </motion.div>

        <motion.p
          className="mt-4 text-sm font-body text-muted-foreground/80"
          style={{ textWrap: "pretty" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {noWidows("Atendimento em Porto Alegre, no MedPlex Santana.")}
        </motion.p>
      </div>
    </section>
  );
};

export default InfiltracaoHero;
