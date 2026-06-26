import { Crosshair, Droplets, Timer } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { noWidows } from "@/lib/typography";

/**
 * "O que é a infiltração guiada por ultrassom" — três cards no mesmo estilo
 * dos cards de diferenciais da home (borda, ícone dourado, título + descrição).
 */
const cards = [
  {
    icon: Crosshair,
    title: "Precisão",
    desc: "O ultrassom permite enxergar a articulação em tempo real, levando a medicação exatamente ao ponto certo. Mais segurança, menos tentativa e erro.",
  },
  {
    icon: Droplets,
    title: "Viscossuplementação",
    desc: "A reposição do ácido hialurônico lubrifica e protege a articulação, aliviando a dor da artrose e melhorando a mobilidade.",
  },
  {
    icon: Timer,
    title: "Recuperação rápida",
    desc: "Procedimento minimamente invasivo, feito em consultório. Você retoma suas atividades em pouco tempo.",
  },
];

const InfiltracaoWhatIs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-14"
            style={{ textWrap: "balance" }}
          >
            {noWidows("O que é a infiltração de joelho guiada por ultrassom")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.07}>
              <div className="p-6 rounded-xl border border-border hover:border-gold/30 transition-colors h-full flex flex-col">
                <card.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2" style={{ textWrap: "balance" }}>
                  {card.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1" style={{ textWrap: "pretty" }}>
                  {noWidows(card.desc)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiltracaoWhatIs;
