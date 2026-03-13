import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Preciso de encaminhamento para consultar?",
    a: "Não. Você pode agendar diretamente pelo WhatsApp.",
  },
  {
    q: "Vocês atendem por convênio ou apenas particular?",
    a: "Informe ao agendar para verificarmos disponibilidade.",
  },
  {
    q: "Quanto tempo dura a consulta?",
    a: "As consultas têm tempo dedicado — em geral entre 40 e 60 minutos.",
  },
  {
    q: "Os tratamentos minimamente invasivos substituem a cirurgia?",
    a: "Em muitos casos, sim. O objetivo é oferecer alternativas eficazes que aliviem a dor e melhorem a função.",
  },
  {
    q: "O que é neuromodulação com tDCS?",
    a: "Técnica não invasiva que utiliza correntes elétricas de baixa intensidade para modular a percepção da dor. Indolor, em consultório, sem internação.",
  },
  {
    q: "Como funciona a prescrição de canabinóides?",
    a: "Após avaliação criteriosa, a prescrição é individualizada e feita dentro da regulamentação médica vigente.",
  },
  {
    q: "Vocês realizam atendimento domiciliar?",
    a: "Sim. Para pacientes com dificuldade de locomoção, oferecemos protocolo completo em domicílio.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-foreground text-center mb-14">
            Perguntas frequentes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-surface-foreground/10 rounded-xl px-5 data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="font-body text-sm font-medium text-surface-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-surface-foreground/70 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
