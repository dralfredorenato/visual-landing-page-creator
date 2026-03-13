import infiltracoesImg from "@/assets/infiltracoes.jpg";
import tdcsImg from "@/assets/tdcs.jpg";
import canabinoidesImg from "@/assets/canabinoides.jpg";
import ondasChoqueImg from "@/assets/ondas-choque.jpg";
import ScrollReveal from "./ScrollReveal";
import { MessageCircle } from "lucide-react";

const treatments = [
  {
    title: "Infiltrações Guiadas",
    image: infiltracoesImg,
    summary: "Procedimentos minimamente invasivos guiados por ultrassom ou radioscopia para alívio preciso da dor em articulações, tendões e nervos.",
    tags: ["Viscossuplementação", "Proloterapia", "Radiofrequência"],
  },
  {
    title: "Ondas de Choque",
    image: ondasChoqueImg,
    summary: "Ondas acústicas de alta energia que promovem regeneração tecidual e alívio de dores musculoesqueléticas — sem cortes ou internação.",
    tags: ["Tendinites", "Fascite Plantar", "Dor Miofascial"],
  },
  {
    title: "Neuromodulação tDCS",
    image: tdcsImg,
    summary: "Estimulação cerebral por correntes de baixa intensidade para dor crônica, ansiedade e distúrbios do sono. Indolor, sessões de 20–30 min.",
    tags: ["Dor Crônica", "Sono", "Ansiedade"],
  },
  {
    title: "Canabinóides Medicinais",
    image: canabinoidesImg,
    summary: "Prescrição individualizada que modula dor, inflamação e bem-estar, reduzindo dependência de analgésicos convencionais.",
    tags: ["Dor", "Inflamação", "Bem-estar"],
  },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-xs font-body uppercase tracking-[0.4em] text-gold mb-3">
            Tratamentos
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
            Tecnologia a serviço do alívio
          </h2>
          <p className="text-center font-body text-foreground/50 max-w-lg mx-auto mb-14 text-sm">
            Procedimentos modernos que evitam cirurgias e devolvem qualidade de vida.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {treatments.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-card h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="relative p-6 -mt-8 z-10">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {t.title}
                  </h3>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed mb-4">
                    {t.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-body font-medium text-gold/80 bg-gold/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Conversion CTA mid-page */}
        <ScrollReveal>
          <div className="mt-14 text-center">
            <a
              href="https://wa.link/izazjx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar avaliação
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TreatmentsSection;
