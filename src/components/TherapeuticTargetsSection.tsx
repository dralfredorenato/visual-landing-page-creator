const targets = [
  { name: "Coluna Vertebral", desc: "Dores cervicais, torácicas, lombalgias, região sacral e cóccix" },
  { name: "Ombros", desc: "Bursites, tendinites e disfunções articulares" },
  { name: "Cotovelos", desc: "Epicondilite lateral e medial, inflamações e sobrecargas" },
  { name: "Punhos, Mãos e Dedos", desc: "Túnel do carpo, rizartrose e tendinopatias" },
  { name: "Quadris", desc: "Coxartrose, inflamações periarticulares e síndromes musculares" },
  { name: "Joelhos", desc: "Gonartrose, lesões ligamentares, meniscais e traumas esportivos" },
  { name: "Tornozelos e Pés", desc: "Entorses, fascite plantar e disfunções mecânicas" },
];

const TherapeuticTargetsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Alvos Terapêuticos
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-6">
          Áreas de Atuação
        </h2>
        <p className="text-center font-body text-foreground/60 max-w-2xl mx-auto mb-14">
          Tratamos dores e lesões em todas as regiões do sistema musculoesquelético, com abordagem precisa e individualizada.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {targets.map((t) => (
            <div
              key={t.name}
              className="bg-navy-light border border-border rounded-xl p-5 text-center hover:border-gold/40 transition-colors"
            >
              <h3 className="font-heading font-semibold text-sm text-foreground mb-1.5">
                {t.name}
              </h3>
              <p className="font-body text-foreground/50 text-xs leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticTargetsSection;
