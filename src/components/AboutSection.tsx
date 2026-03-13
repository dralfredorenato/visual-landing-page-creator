import aboutAlfredo from "@/assets/about-alfredo.jpg";
import aboutCarlos from "@/assets/about-carlos.jpg";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const doctors = [
  {
    name: "Dr. Alfredo Metzger",
    image: aboutAlfredo,
    credential: "CREMERS 39343",
    specialty: "Ortopedista · Dor e Cuidados Paliativos",
    bio: "Médico Ortopedista e especialista em Dor, Cuidados Paliativos e Neuromodulação. Combina ciência e empatia em planos terapêuticos individualizados que tratam não apenas a doença, mas o paciente como um todo.",
    whatsapp: "https://wa.link/izazjx",
    instagram: "https://www.instagram.com/dr.alfredo.humana.ortopedia/",
  },
  {
    name: "Dr. Carlos Vieira",
    image: aboutCarlos,
    credential: "CREMERS 57.754 · RQE 44.416 · RQE 44.392",
    specialty: "Ortopedista · Intervencionista da Dor",
    bio: "Médico Intervencionista da Dor com título AMB/SBOT. Da farmácia à medicina, construiu uma trajetória única. Autor de capítulos em livros de referência, membro da SBED e LAPS, reconhecido pela abordagem técnica e humanizada.",
    whatsapp: "https://wa.me/5551991932662",
    instagram: "https://www.instagram.com/drcarlosvieira.dor/",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-xs font-body uppercase tracking-[0.4em] text-gold mb-3">
            Especialistas
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Quem cuida de você
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <ScrollReveal key={doc.name} delay={i * 0.15}>
              <div className="group bg-background/30 border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors h-full flex flex-col">
                <div className="h-72 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-body text-gold mb-1">{doc.specialty}</p>
                  <p className="text-[10px] font-body text-foreground/40 mb-4">{doc.credential}</p>
                  <p className="font-body text-foreground/60 text-sm leading-relaxed mb-5 flex-1">
                    {doc.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={doc.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold font-body hover:bg-gold-light transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Agendar
                    </a>
                    <a
                      href={doc.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-body text-gold/70 hover:text-gold transition-colors"
                    >
                      @Instagram
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
