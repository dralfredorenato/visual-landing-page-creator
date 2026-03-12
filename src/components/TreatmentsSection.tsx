import infiltracoesImg from "@/assets/infiltracoes.jpg";
import tdcsImg from "@/assets/tdcs.jpg";
import canabinoidesImg from "@/assets/canabinoides.jpg";

const treatments = [
  {
    title: "Infiltrações Articulares",
    image: infiltracoesImg,
    description:
      "Procedimentos minimamente invasivos com ácido hialurônico ou corticóides aplicados diretamente na articulação. Reduz inflamações, melhora a lubrificação e proporciona alívio rápido da dor em joelhos, quadris, ombros e outras articulações.",
  },
  {
    title: "Neuromodulação com tDCS",
    image: tdcsImg,
    description:
      "Técnica inovadora que utiliza correntes elétricas de baixa intensidade para estimular áreas do cérebro relacionadas à percepção da dor. Indolor, realizada em consultório, com sessões de 20 a 30 minutos.",
  },
  {
    title: "Prescrição de Canabinóides",
    image: canabinoidesImg,
    description:
      "Canabinóides medicinais que atuam no sistema endocanabinoide, ajudando a modular dor, inflamação, sono e bem-estar geral. Prescrição individualizada dentro da regulamentação médica.",
  },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Como Funciona
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
          Principais Tratamentos
        </h2>

        <div className="space-y-16">
          {treatments.map((t, i) => (
            <div
              key={t.title}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <img
                  src={t.image}
                  alt={t.title}
                  className="rounded-lg w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-heading font-bold text-gold mb-4">
                  {t.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
