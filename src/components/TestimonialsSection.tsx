import { Quote, Star } from "lucide-react";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "O Dr. Carlos vai muito além de ser um excelente médico — ele é um ser humano raro. Hoje, a dor ficou no passado.",
    name: "Jasser Rosseto",
  },
  {
    text: "Após uma sessão de ondas de choque, a dor praticamente sumiu. Um mês depois, eu já estava de volta aos campos.",
    name: "Fabrício Galant",
  },
  {
    text: "Depois de 2 meses sem conseguir dormir, passei uma noite extremamente confortável após o tratamento.",
    name: "Rodrigo Prevensi",
  },
  {
    text: "Médicos como você substituem o medo pela confiança na recuperação. Ótima experiência, sempre recomendarei.",
    name: "Rafael M. Medeiros",
  },
  {
    text: "Profissionais excepcionais, atendimento humanizado e resultado surpreendente. Recomendo de olhos fechados!",
    name: "Luciana Ferreira",
  },
  {
    text: "Fui atendido com muita atenção e cuidado. O tratamento resolveu minha dor crônica em poucas sessões.",
    name: "Marcos Oliveira",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-3">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-xs font-body uppercase tracking-[0.4em] text-gold">
              Avaliações Google · 5.0
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Quem já tratou, recomenda
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2.5"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-gold/30 transition-colors">
                    <Stars />
                    <Quote className="w-5 h-5 text-gold/20 mb-3 shrink-0" />
                    <p className="font-body text-foreground/65 text-sm leading-relaxed italic flex-1 mb-4">
                      "{t.text}"
                    </p>
                    <p className="font-body font-semibold text-foreground/80 text-xs">
                      {t.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-gold w-6"
                    : "bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
