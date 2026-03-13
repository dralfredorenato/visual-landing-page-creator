import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import aboutAlfredo from "@/assets/about-alfredo.jpg";
import aboutCarlos from "@/assets/about-carlos.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-16">
            Conheça os especialistas
          </h2>
        </ScrollReveal>

        {/* Dr. Alfredo */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <ScrollReveal>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto w-full">
              <img src={aboutAlfredo} alt="Dr. Alfredo Renato Metzger Filho" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <span className="inline-block border border-gold/40 text-gold text-xs font-body uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                CREMERS 39343
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-surface-foreground mb-1">
                Dr. Alfredo Renato Metzger Filho
              </h3>
              <p className="font-body text-sm text-gold mb-4">
                Ortopedista | Especialista em Dor e Cuidados Paliativos
              </p>
              <p className="font-body text-surface-foreground/70 leading-relaxed mb-6">
                Médico ortopedista, professor de medicina e especialista em Dor e Cuidados Paliativos pelo HCPA/UFRGS. Residência em Ortopedia e Traumatologia pelo Hospital Universitário de Canoas (ULBRA). Atua com infiltrações articulares guiadas por imagem, neuromodulação com tDCS e prescrição de canabinóides, sempre com foco no cuidado humano e na qualidade de vida.
              </p>
              <a
                href="https://wa.me/5551920004467"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar com Dr. Alfredo
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="h-px bg-gold/15 max-w-2xl mx-auto mb-16" />

        {/* Dr. Carlos */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal delay={0.15} className="md:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto w-full">
              <img src={aboutCarlos} alt="Dr. Carlos Eduardo Gomes Vieira" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:order-1">
            <div>
              <span className="inline-block border border-gold/40 text-gold text-xs font-body uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                CREMERS 57.754 | RQE 44.416 | RQE 44.392
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-surface-foreground mb-1">
                Dr. Carlos Eduardo Gomes Vieira
              </h3>
              <p className="font-body text-sm text-gold mb-4">
                Médico Intervencionista da Dor | Ortopedista
              </p>
              <p className="font-body text-surface-foreground/70 leading-relaxed mb-6">
                Especialista em Medicina Intervencionista da Dor com título AMB/SBOT em Atuação em Dor. Membro da SBED e da LAPS. Diretor de Comitês da SBED. Autor de capítulos de livros em medicina da dor. Destaca-se por procedimentos minimamente invasivos como radiofrequência, neurocrioablação e bloqueios guiados por imagem, com abordagem técnica, empática e orientada ao resultado.
              </p>
              <a
                href="https://wa.me/5551991932662"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar com Dr. Carlos
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
