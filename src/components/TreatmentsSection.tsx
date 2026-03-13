import infiltracoesImg from "@/assets/infiltracoes.jpg";
import tdcsImg from "@/assets/tdcs.jpg";
import canabinoidesImg from "@/assets/canabinoides.jpg";
import ondasChoqueImg from "@/assets/ondas-choque.jpg";

const treatments = [
  {
    title: "Procedimentos Guiados por Imagem",
    image: infiltracoesImg,
    description:
      "Infiltrações intra e extra-articulares, viscossuplementação, radiofrequência (ablativa, pulsada ou refrigerada), neurocrioablação, proloterapia e mesoterapia. Procedimentos minimamente invasivos guiados por ultrassom ou radioscopia, com aplicação precisa de medicamentos em ligamentos, tendões, músculos, articulações e nervos.",
    doctor: "Dr. Alfredo & Dr. Carlos",
  },
  {
    title: "Terapia por Ondas de Choque",
    image: ondasChoqueImg,
    description:
      "Técnica não cirúrgica e não invasiva que utiliza ondas acústicas de média e alta energia para tratar dores e lesões musculoesqueléticas como tendinites, dor miofascial, fasceíte plantar e tantas outras — promovendo alívio da dor, desinflamação e regeneração tecidual. Realizada em consultório, sem cortes ou internação.",
    doctor: "Dr. Carlos",
  },
  {
    title: "Neuromodulação com tDCS",
    image: tdcsImg,
    description:
      "Técnica inovadora que utiliza correntes elétricas de baixa intensidade para estimular áreas do cérebro relacionadas à percepção da dor. Indolor, realizada em consultório, com sessões de 20 a 30 minutos. Eficaz para dor crônica, ansiedade e distúrbios do sono.",
    doctor: "Dr. Alfredo",
  },
  {
    title: "Prescrição de Canabinóides",
    image: canabinoidesImg,
    description:
      "Canabinóides medicinais que atuam no sistema endocanabinoide, ajudando a modular dor, inflamação, sono e bem-estar geral. Prescrição individualizada e feita dentro da regulamentação médica, reduzindo a dependência de analgésicos convencionais.",
    doctor: "Dr. Alfredo & Dr. Carlos",
  },
];

const extraTreatments = [
  {
    title: "Radiofrequência",
    description: "Aplicação de energia eletromagnética por agulha especial, gerando lesão térmica precisa e controlada em nervos específicos para interromper ou neuromodular a transmissão dos sinais de dor.",
    doctor: "Dr. Carlos",
  },
  {
    title: "Neurocrioablação",
    description: "Procedimento minimamente invasivo que utiliza uma agulha especial para congelar seletivamente o nervo responsável pela condução do estímulo doloroso ao cérebro.",
    doctor: "Dr. Carlos",
  },
  {
    title: "Injetáveis para Osteoporose",
    description: "Fármacos injetáveis para melhorar a saúde óssea, prevenindo fraturas em pacientes com osteoporose ou evitando novas fraturas em quem já apresentou alguma fratura prévia.",
    doctor: "Dr. Carlos",
  },
  {
    title: "Atendimento Domiciliar",
    description: "Protocolo completo de atendimento domiciliar com consultas, procedimentos e tratamentos personalizados para pacientes com dor crônica que apresentam dificuldades de locomoção.",
    doctor: "Dr. Carlos",
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

        {/* Extra treatments grid */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-10">
            Também Oferecemos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {extraTreatments.map((t) => (
              <div key={t.title} className="bg-background/50 border border-border rounded-xl p-6">
                <span className="inline-block text-xs font-body font-semibold text-gold/70 bg-gold/10 px-3 py-1 rounded-full mb-3">
                  {t.doctor}
                </span>
                <h4 className="font-heading font-bold text-lg text-foreground mb-2">{t.title}</h4>
                <p className="font-body text-foreground/65 leading-relaxed text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
