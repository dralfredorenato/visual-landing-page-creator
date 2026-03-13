import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "O Dr. Carlos vai muito além de ser um excelente médico — ele é um ser humano raro. Hoje, a dor ficou no passado.",
    name: "Jasser Rosseto",
  },
  {
    text: "Após uma sessão de ondas de choque, a dor praticamente sumiu. Um mês depois, eu já estava de volta aos campos.",
    name: "Fabrício Galant",
  },
  {
    text: "Depois de 2 meses sem conseguir dormir, passei uma noite extremamente confortável após o tratamento.",
    name: "Rodrigo Prevensi",
  },
  {
    text: "Médicos como você substituem o medo pela confiança na recuperação. Ótima experiência, sempre recomendarei.",
    name: "Rafael M. Medeiros",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-xs font-body uppercase tracking-[0.4em] text-gold mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Quem já tratou, recomenda
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-gold/30 transition-colors">
                <Quote className="w-6 h-6 text-gold/25 mb-4 shrink-0" />
                <p className="font-body text-foreground/65 text-sm leading-relaxed italic flex-1 mb-4">
                  "{t.text}"
                </p>
                <p className="font-body font-semibold text-foreground/80 text-xs">
                  {t.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
