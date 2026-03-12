import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que diferencia a Humana Ortopedia?",
    a: "A Humana Ortopedia reúne dois especialistas com formações complementares — Dr. Alfredo Metzger (Dor e Cuidados Paliativos, neuromodulação, canabinóides) e Dr. Carlos Vieira (intervencionista da dor, ondas de choque, saúde óssea) — oferecendo um portfólio terapêutico completo e individualizado.",
  },
  {
    q: "Quais são os principais tratamentos oferecidos?",
    a: "Infiltrações intra e extra-articulares guiadas por imagem, viscossuplementação, terapia por ondas de choque, neuromodulação com tDCS, radiofrequência, neurocrioablação, protocolos para saúde óssea (osteoporose e sarcopenia), prescrição de canabinóides e atendimento domiciliar.",
  },
  {
    q: "Em quais articulações podem ser feitas infiltrações?",
    a: "Realizamos infiltrações em joelhos, quadris, ombros, tornozelos, punhos, mãos, cotovelos e até nas articulações dos dedos, sempre com técnicas guiadas por imagem que aumentam a precisão e reduzem riscos.",
  },
  {
    q: "Esses tratamentos substituem a cirurgia?",
    a: "Em muitos casos, sim. O objetivo é oferecer alternativas minimamente invasivas que aliviem a dor e melhorem a função, adiando ou evitando procedimentos cirúrgicos. Cada caso é avaliado individualmente.",
  },
  {
    q: "O que é neuromodulação com tDCS?",
    a: "É uma técnica que utiliza correntes elétricas de baixa intensidade para estimular áreas do cérebro relacionadas à percepção da dor. Indolor, realizada em consultório, com sessões de 20 a 30 minutos, eficaz para dor crônica, ansiedade e distúrbios do sono.",
  },
  {
    q: "A Terapia por Ondas de Choque dói?",
    a: "Não são choques elétricos; trata-se de ondas acústicas de média e alta energia, geralmente bem toleradas sem necessidade de anestesia local. Após o procedimento, o paciente retoma suas atividades normalmente.",
  },
  {
    q: "Como funciona o acompanhamento da saúde óssea?",
    a: "O Dr. Carlos realiza diagnóstico detalhado com exames e avaliação clínica, indicando tratamentos personalizados para osteoporose e sarcopenia, prevenindo fraturas e ajudando a manter força e autonomia.",
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
