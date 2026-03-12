import infiltracoesImg from "@/assets/infiltracoes.jpg";
import tdcsImg from "@/assets/tdcs.jpg";
import canabinoidesImg from "@/assets/canabinoides.jpg";
import ondasChoqueImg from "@/assets/ondas-choque.jpg";

const treatments = [
  {
    title: "Procedimentos Guiados por Imagem",
    image: infiltracoesImg,
    description:
      "Infiltrações intra e extra-articulares, viscossuplementação, radiofrequência, neurocrioablação, proloterapia e mesoterapia. Técnicas minimamente invasivas que controlam inflamações, reduzem a dor e melhoram a função das articulações sem necessidade de cirurgia.",
    doctor: "Dr. Alfredo & Dr. Carlos",
  },
  {
    title: "Neuromodulação com tDCS",
    image: tdcsImg,
    description:
      "Técnica inovadora que utiliza correntes elétricas de baixa intensidade para estimular áreas do cérebro relacionadas à percepção da dor. Indolor, realizada em consultório, com sessões de 20 a 30 minutos. Eficaz para dor crônica, ansiedade e distúrbios do sono.",
    doctor: "Dr. Alfredo",
  },
  {
    title: "Terapia por Ondas de Choque",
    image: ondasChoqueImg,
    description:
      "Técnica não cirúrgica que utiliza ondas acústicas de média e alta energia para tratar dores e lesões musculoesqueléticas. Indicada para tendinites, fasciíte plantar e dores articulares resistentes. Realizada em consultório, sem cortes ou internação.",
    doctor: "Dr. Carlos",
  },
  {
    title: "Prescrição de Canabinóides",
    image: canabinoidesImg,
    description:
      "Canabinóides medicinais que atuam no sistema endocanabinoide, ajudando a modular dor, inflamação, sono e bem-estar geral. Prescrição individualizada e feita dentro da regulamentação médica, reduzindo a dependência de analgésicos convencionais.",
    doctor: "Dr. Alfredo & Dr. Carlos",
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
                <span className="inline-block text-xs font-body font-semibold text-gold/70 bg-gold/10 px-3 py-1 rounded-full mb-3">
                  {t.doctor}
                </span>
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
