import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Por que escolher o Dr. Alfredo Metzger?",
    a: "Porque é ortopedista com formação sólida, professor de medicina e especialista em Dor e Cuidados Paliativos. Atua com técnicas modernas como infiltrações articulares, neuromodulação com tDCS e prescrição de canabinóides, sempre com foco em segurança, personalização e qualidade de vida do paciente.",
  },
  {
    q: "Em quais articulações podem ser feitas infiltrações?",
    a: "O Dr. Alfredo realiza infiltrações em joelhos, quadris, ombros, tornozelos, punhos, mãos, cotovelos e até nas articulações dos dedos, sempre com técnicas guiadas que aumentam a precisão e reduzem riscos.",
  },
  {
    q: "O que é neuromodulação não invasiva com tDCS?",
    a: "É uma técnica que utiliza correntes elétricas de baixa intensidade para estimular áreas específicas do cérebro relacionadas à percepção da dor. O procedimento é indolor, realizado em consultório e sem necessidade de internação.",
  },
  {
    q: "Como funciona a prescrição de canabinóides?",
    a: "Após avaliação clínica detalhada, o Dr. Alfredo pode prescrever canabinoides de forma individualizada e dentro das normas médicas. Esses medicamentos auxiliam no controle da dor, da inflamação e de sintomas associados.",
  },
  {
    q: "Esses tratamentos substituem a cirurgia?",
    a: "Em muitos casos, sim. O objetivo é oferecer alternativas menos invasivas que aliviem a dor e melhorem a função, adiando ou até evitando a necessidade de procedimentos cirúrgicos.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-lg px-6 bg-background/50"
            >
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-gold transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/65 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
