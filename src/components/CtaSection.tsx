import ScrollReveal from "./ScrollReveal";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gold">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
            Sua dor tem causa. Tem nome. Tem tratamento.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Dê o primeiro passo. Uma consulta pode mudar o curso da sua vida.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="https://wa.me/5551920004467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-background text-gold px-8 py-4 rounded-md text-sm font-semibold font-body hover:bg-background/90 transition-colors"
          >
            Agendar minha consulta agora
          </a>
          <p className="mt-4 text-xs font-body text-primary-foreground/60">
            Humana Ortopedia — MedPlex Santana, Porto Alegre/RS
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
