import ScrollReveal from "./ScrollReveal";

const targets = [
  { title: "Coluna Vertebral", desc: "Cervical, torácica, lombar, sacral e cóccix" },
  { title: "Ombros", desc: "Bursites, tendinopatias e disfunções articulares" },
  { title: "Cotovelos", desc: "Epicondilites e sobrecargas repetitivas" },
  { title: "Punhos, Mãos e Dedos", desc: "Túnel do carpo, rizartrose, tendinopatias" },
  { title: "Quadris", desc: "Coxartrose, inflamações periarticulares, síndromes musculares" },
  { title: "Joelhos", desc: "Gonartrose, lesões ligamentares e meniscais, traumas esportivos" },
  { title: "Tornozelos e Pés", desc: "Fascite plantar, entorses, inflamações tendíneas" },
  { title: "Dores Crônicas", desc: "Fibromialgia, dor neuropática, síndromes miofasciais e dor crônica generalizada" },
];

const TherapeuticTargetsSection = () => {
  return (
    <section id="alvos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-3">
              Nossos alvos terapêuticos
           </h2>
          <p className="text-center text-muted-foreground font-body mb-14 max-w-xl mx-auto">
            Abordagem especializada para cada região do corpo
          </p>
        </ScrollReveal>

        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible scrollbar-hide">
          {targets.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 0.07} className="flex">
              <div className="min-w-[200px] md:min-w-0 flex-1 border border-gold/20 rounded-xl bg-card p-6 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-gold/60" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{t.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticTargetsSection;
