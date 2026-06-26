import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { noWidows } from "@/lib/typography";
import infiltracoes from "@/assets/infiltracoes.jpg";

/**
 * Seção de empatia — herda o layout da PainSection da home (fundo surface,
 * texto + imagem em duas colunas), com copy acolhedora e sem sensacionalismo.
 */
const InfiltracaoPain = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-16"
            style={{ textWrap: "balance" }}
          >
            {noWidows("Conviver com dor no joelho não precisa ser a sua rotina.")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-xs font-body uppercase tracking-[0.3em] text-gold font-medium mb-4">
                A DOR RECONHECIDA
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-surface-foreground/80 leading-relaxed mb-4" style={{ textWrap: "pretty" }}>
                {noWidows("Subir escadas, levantar da cadeira, caminhar até o carro. Quando o joelho dói a cada movimento, a vida encolhe.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-surface-foreground/80 leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
                {noWidows("A boa notícia é que existem caminhos além do analgésico e antes da cirurgia. A infiltração e a viscossuplementação tratam a causa da dor articular, com recuperação rápida e mínima interrupção da sua rotina.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <WhatsAppButton variant="gold" className="px-6 py-3">
                Agendar avaliação pelo WhatsApp
              </WhatsAppButton>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="aspect-[4/5] md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src={infiltracoes}
                alt="Procedimento de infiltração articular guiado por ultrassom"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InfiltracaoPain;
