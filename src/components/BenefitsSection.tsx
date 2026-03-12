import { Heart, Move, Settings, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Alívio da dor",
    description: "Tratamentos modernos que reduzem dores crônicas e melhoram o bem-estar diário",
  },
  {
    icon: Move,
    title: "Mais mobilidade",
    description: "Infiltrações que restauram a função das articulações e facilitam os movimentos",
  },
  {
    icon: Settings,
    title: "Opções personalizadas",
    description: "Protocolos que incluem tDCS, infiltrações e canabinóides conforme cada necessidade",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e inovação",
    description: "Procedimentos minimamente invasivos e prescrições dentro das diretrizes médicas atuais",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Benefícios
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
          Principais Benefícios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-navy-light rounded-xl p-6 text-center border border-border hover:border-gold/40 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 text-gold mb-5">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {b.title}
              </h3>
              <p className="font-body text-sm text-foreground/60 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
