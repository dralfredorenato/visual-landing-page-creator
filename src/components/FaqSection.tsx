import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Esses tratamentos substituem a cirurgia?",
    a: "Em muitos casos, sim. O objetivo é oferecer alternativas minimamente invasivas que aliviem a dor e melhorem a função, adiando ou evitando cirurgias. Cada caso é avaliado individualmente.",
  },
  {
    q: "Como funcionam as infiltrações guiadas?",
    a: "São aplicações precisas de medicamentos em articulações, tendões ou nervos, guiadas por ultrassom ou radioscopia. Procedimento rápido, feito em consultório, sem internação.",
  },
  {
    q: "A Terapia por Ondas de Choque dói?",
    a: "São ondas acústicas, não choques elétricos. Geralmente bem toleradas, sem necessidade de anestesia. Após o procedimento, o paciente retoma atividades normalmente.",
  },
  {
    q: "Quais condições vocês tratam?",
    a: "Dores na coluna, ombros, joelhos, quadris, cotovelos, punhos, tornozelos e pés. Também atuamos em osteoporose, sarcopenia e dor crônica de diversas origens.",
  },
  {
    q: "Onde ficam os consultórios?",
    a: "Atendemos em 3 locais em Porto Alegre: Humana Ortopedia (MedPlex Santana), Centro de Tratamento da Dor (Moinhos de Vento) e consultório particular do Dr. Carlos.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal>
          <p className="text-center text-xs font-body uppercase tracking-[0.4em] text-gold mb-3">
            Dúvidas
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
            Perguntas Frequentes
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-2.5">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-5 bg-background/40"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-sm text-left hover:text-gold transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground/60 leading-relaxed text-sm pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <p className="font-body text-foreground/40 text-xs mb-4">Ainda tem dúvidas?</p>
            <a
              href="https://wa.link/izazjx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
