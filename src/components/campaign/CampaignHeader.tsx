import logoHumana from "@/assets/logo-humana-branco.png";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Cabeçalho enxuto da landing de campanha: apenas o logo Humana e o CTA de
 * WhatsApp. Sem menu de navegação — o foco é a jornada vertical até a
 * conversão, sem links que dispersem o visitante para fora da página.
 */
const CampaignHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <img
        src={logoHumana}
        alt="Humana Ortopedia"
        width={140}
        height={37}
        className="h-8 w-auto"
      />
      <WhatsAppButton variant="gold" className="px-4 py-2 sm:px-5">
        <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </WhatsAppButton>
    </div>
  </header>
);

export default CampaignHeader;
