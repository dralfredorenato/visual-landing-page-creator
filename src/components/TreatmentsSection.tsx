import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const treatments = [
  {
    title: "Infiltrações Articulares Guiadas por Imagem",
    desc: "Aplicação precisa de medicamentos ou agentes biológicos em articulações, tendões e nervos. Guiadas por ultrassom para máxima segurança e eficácia.",
  },
  {
    title: "Viscossuplementação",
    desc: "Injeção de ácido hialurônico para artrose leve a moderada. Reduz dor, protege e hidrata a cartilagem, melhora a mobilidade.",
  },
  {
    title: "Terapia por Ondas de Choque",
    desc: "Ondas acústicas não invasivas para tendinites, dor miofascial e fascite plantar. Promove regeneração tecidual e alívio da dor.",
  },
  {
    title: "Radiofrequência",
    desc: "Ablativa, pulsada ou refrigerada. Interrompe a transmissão do sinal de dor em nervos específicos com precisão controlada.",
  },
  {
    title: "Neuromodulação com tDCS",
    desc: "Estimulação cerebral transcraniana de baixa intensidade para dor crônica, ansiedade e distúrbios do sono. Indolor, em consultório, sem internação.",
  },
  {
    title: "Neurocrioablação",
    desc: "Congelamento seletivo do nervo responsável pela condução da dor. Procedimento minimamente invasivo com resultado duradouro.",
  },
  {
    title: "Prescrição de Canabinóides",
    desc: "Avaliação criteriosa e prescrição individualizada dentro da regulamentação médica. Indicado para dor crônica, fibromialgia e condições autoimunes.",
  },
  {
    title: "Atendimento Domiciliar",
    desc: "Protocolo completo de consultas e procedimentos para pacientes com mobilidade reduzida. Cuidado premium no conforto do lar.",
  },
];

const TreatmentsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="tratamentos" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-3">
            Nossos Tratamentos
          </h2>
          <p className="text-center text-surface-foreground/60 font-body mb-14 max-w-2xl mx-auto">
            Tecnologia avançada. Abordagem minimamente invasiva. Resultado com segurança.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {treatments.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 0.05}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left border rounded-xl p-5 transition-all duration-300 group ${
                  openIndex === i
                    ? "border-gold/50 bg-surface-foreground/5"
                    : "border-surface-foreground/10 hover:border-gold/30"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-surface-foreground leading-snug">{t.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 mt-1 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body text-sm text-surface-foreground/70 leading-relaxed">{t.desc}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
