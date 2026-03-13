import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "O Dr. Carlos Vieira vai muito além de ser um excelente médico — ele é um ser humano raro. Com atenção, gentileza e uma empatia genuína, transforma cada consulta em um momento de acolhimento e confiança. Hoje, a dor ficou no passado — o que permanece é a mais sincera gratidão.",
    name: "Jasser Rosseto",
    location: "Porto Alegre/RS",
  },
  {
    text: "O que mais me impressiona no Dr. Carlos é a forma como conduz cada atendimento: sempre explicando cada passo, cada local que está sendo tratado, o que traz muita confiança e segurança. Após uma sessão de terapia por onda de choque, a dor praticamente sumiu. Um mês depois, eu já estava de volta aos campos, jogando futebol.",
    name: "Fabrício Galant",
    location: "Porto Alegre/RS",
  },
  {
    text: "Oi Dr. Carlos, só para passar um feedback: depois de 02 meses sem conseguir dormir, passei uma noite extremamente confortável após o tratamento realizado. São profissionais como o senhor que fazem a diferença. Abração!",
    name: "Rodrigo Prevensi",
    location: "Xangri-lá/RS",
  },
  {
    text: "Médicos como você conseguem substituir o medo da enfermidade pela confiança na recuperação. Ótima experiência, ótimo manejo, cuidado com o paciente. Sempre recomendarei. Obrigado!",
    name: "Rafael Martins Medeiros",
    location: "Porto Alegre/RS",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Depoimentos
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
          O Que Dizem Nossos Pacientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-navy-light border border-border rounded-xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
              <p className="font-body text-foreground/70 leading-relaxed text-sm mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="font-body text-foreground/50 text-xs">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
