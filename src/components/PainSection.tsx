import ScrollReveal from "./ScrollReveal";
import aboutClinica from "@/assets/about-clinica.jpg";

const PainSection = () => {
  return (
    <section id="dor" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-16" style={{ textWrap: "balance" }}>
            Viver com dor não é normal.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-xs font-body uppercase tracking-[0.3em] text-gold font-medium mb-4">
                COMO DEFINIMOS A DOR
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-surface-foreground/80 leading-relaxed mb-4" style={{ textWrap: "pretty" }}>
                Segundo a IASP, a dor é uma experiência sensorial e emocional desagradável associada a danos teciduais reais ou potenciais. É considerada o 5º sinal vital — e merece atenção especializada.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-surface-foreground/80 leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
                Na Humana Ortopedia, tratamos a dor como o que ela é: um sinal que precisa ser investigado, compreendido e tratado — não como algo com que você deva aprender a conviver.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <a
                href="#tratamentos"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-colors"
              >
                Conheça nossos tratamentos
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="aspect-[4/5] md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img src={aboutClinica} alt="Clínica Humana Ortopedia" className="w-full h-full object-cover object-top" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
