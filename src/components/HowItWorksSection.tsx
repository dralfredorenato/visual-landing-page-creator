import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Agendamento", desc: "WhatsApp ou formulário. Confirmação em até 2 horas." },
  { num: "02", title: "Consulta com escuta", desc: "Tempo dedicado para entender sua história clínica. Sem pressa." },
  { num: "03", title: "Diagnóstico e plano", desc: "Protocolo individualizado. Explicação clara de cada etapa." },
  { num: "04", title: "Acompanhamento", desc: "Retornos programados. Canal aberto para dúvidas." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-3" style={{ textWrap: "balance" }}>
            Da primeira dúvida à recuperação
          </h2>
          <p className="text-center text-muted-foreground font-body mb-16 max-w-xl mx-auto" style={{ textWrap: "balance" }}>
            Sem mistério. Sem enrolação. Com você em cada etapa.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-12">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.1}>
              <div className="text-center md:text-left relative">
                <span className="text-5xl font-heading font-bold text-gold/30 block mb-2">{s.num}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-12 h-px bg-gold/20 translate-x-8" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <a
              href="https://wa.me/5551920004467"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar minha consulta
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;
