import aboutImg from "@/assets/about-alfredo.jpg";
import { MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Sobre Mim
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
          Conheça o Dr. Alfredo Metzger
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-5/12">
            <img
              src={aboutImg}
              alt="Dr. Alfredo Metzger"
              className="rounded-lg w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-7/12 space-y-4">
            <p className="text-sm font-body font-semibold text-gold tracking-wide">
              CREMERS 39343
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              O Dr. Alfredo Renato Metzger Filho é médico Ortopedista, professor de medicina e especialista em Dor e Cuidados Paliativos. Sua trajetória é marcada pela dedicação ao cuidado humano, sempre unindo ciência, empatia e valores pessoais na prática clínica.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Formado em Medicina em 2014, construiu experiência sólida atuando como emergencista em hospitais e no SAMU. Em 2024 concluiu sua residência em Ortopedia e Traumatologia no Hospital Universitário de Canoas (ULBRA) e atualmente se dedica à especialização em Dor e Cuidados Paliativos no HCPA/UFRGS, além da pós-graduação em Perícia Médica pela Faculdade Unimed.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Interessado especialmente em medicina da dor, neuromodulação e medicina canabinoide, busca oferecer planos terapêuticos individualizados que tratam não apenas a doença, mas a vida como um todo.
            </p>

            <a
              href="https://wa.link/izazjx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors mt-4"
            >
              <MessageCircle className="w-4 h-4" />
              Fale por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
