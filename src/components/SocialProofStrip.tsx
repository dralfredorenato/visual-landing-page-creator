import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "2", label: "Especialistas" },
  { value: "12+", label: "Técnicas avançadas" },
  { value: "MedPlex", label: "Santana · Porto Alegre" },
];

const SocialProofStrip = () => {
  return (
    <section className="py-12 bg-navy-light border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold">
                  {s.value}
                </p>
                <p className="font-body text-foreground/50 text-xs uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
