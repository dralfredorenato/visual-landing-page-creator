import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "Humana Ortopedia",
    address: "Rua Gomes Jardim, nº 201, sala 505 – MedPlex Santana – Bairro Santana, Porto Alegre/RS",
    schedule: "Atendimento às Segundas-Feiras",
    whatsapp: "https://wa.me/5551920004467",
    phone: "(51) 92000-4467",
  },
  {
    name: "Centro de Tratamento da Dor",
    address: "Rua Dr Vale, nº 234 – Bairro Moinhos de Vento, Porto Alegre/RS",
    schedule: "Atendimento às Terças-Feiras",
    whatsapp: "https://wa.me/5551991559103",
    phone: "(51) 99155-9103",
  },
  {
    name: "Dr. Carlos Vieira – Medicina da Dor & Saúde Óssea",
    address: "Porto Alegre/RS",
    schedule: "Atendimento às Sextas-Feiras",
    whatsapp: "https://wa.me/5551991932662",
    phone: "(51) 99193-2662",
  },
];

const LocationsSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Localização
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
          Onde Atendemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-background/50 border border-border rounded-xl p-6 flex flex-col"
            >
              <h3 className="font-heading font-bold text-lg text-gold mb-3">
                {loc.name}
              </h3>
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
                <p className="font-body text-foreground/65 text-sm leading-relaxed">
                  {loc.address}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-gold/60 shrink-0" />
                <p className="font-body text-foreground/65 text-sm">
                  {loc.schedule}
                </p>
              </div>
              <a
                href={loc.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-gold/10 text-gold px-4 py-2.5 rounded-full text-sm font-semibold font-body hover:bg-gold/20 transition-colors"
              >
                {loc.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
