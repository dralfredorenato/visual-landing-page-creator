import { Users, Heart, Zap, Home, BookOpen, Cpu, type LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface DifferentialItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const defaultItems: DifferentialItem[] = [
  { icon: Users, title: "Dois especialistas, uma visão", desc: "Ortopedia e medicina intervencionista da dor integradas sob o mesmo teto." },
  { icon: Heart, title: "Escuta real, sem pressa", desc: "Consultas com tempo dedicado para entender sua história — não apenas o exame." },
  { icon: Zap, title: "Procedimentos minimamente invasivos", desc: "Radiofrequência, bloqueios guiados por imagem, infiltrações com ultrassom — precisão e segurança." },
  { icon: Home, title: "Atendimento domiciliar", desc: "Para pacientes com mobilidade reduzida, levamos o cuidado até você." },
  { icon: BookOpen, title: "Baseado em evidências", desc: "Protocolos atualizados com as melhores práticas científicas disponíveis." },
  { icon: Cpu, title: "Tecnologia a serviço do humano", desc: "tDCS, canabinóides, ondas de choque — inovação ética e individualizada." },
];

interface DifferentialsSectionProps {
  /** Título da seção. Default mantém o texto usado na home. */
  title?: string;
  /** Cards exibidos. Default mantém os 6 diferenciais da home. */
  items?: DifferentialItem[];
  /** id da âncora. Default "diferenciais" (usado na navegação da home). */
  id?: string;
}

const DifferentialsSection = ({
  title = "Por que a Humana Ortopedia?",
  items = defaultItems,
  id = "diferenciais",
}: DifferentialsSectionProps = {}) => {
  return (
    <section id={id} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-14" style={{ textWrap: "balance" }}>
            {title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.07}>
              <div className="p-6 rounded-xl border border-border hover:border-gold/30 transition-colors h-full flex flex-col">
                <item.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2" style={{ textWrap: "balance" }}>{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1" style={{ textWrap: "pretty" }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
