import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { noWidows } from "@/lib/typography";

/**
 * CTA final — herda o visual da CtaSection da home (faixa dourada, título
 * serifado, botão claro).
 */
const InfiltracaoFinalCta = () => {
  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight"
            style={{ textWrap: "balance" }}
          >
            {noWidows("Dê o primeiro passo para voltar a se mover sem dor.")}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto"
            style={{ textWrap: "balance" }}
          >
            {noWidows("Agende uma avaliação e entenda o melhor caminho para o seu caso.")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <WhatsAppButton variant="light" className="px-8 py-4">
            Falar pelo WhatsApp agora
          </WhatsAppButton>
          <p className="mt-4 text-xs font-body text-primary-foreground/60">
            Humana Ortopedia — MedPlex Santana, Porto Alegre/RS
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InfiltracaoFinalCta;
