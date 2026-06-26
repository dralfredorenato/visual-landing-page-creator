import { Clock, Users, ScanLine, Search } from "lucide-react";
import CampaignHeader from "@/components/campaign/CampaignHeader";
import InfiltracaoHero from "@/components/campaign/InfiltracaoHero";
import InfiltracaoPain from "@/components/campaign/InfiltracaoPain";
import InfiltracaoWhatIs from "@/components/campaign/InfiltracaoWhatIs";
import DifferentialsSection, { type DifferentialItem } from "@/components/DifferentialsSection";
import GoogleReviews from "@/components/GoogleReviews";
import InfiltracaoFinalCta from "@/components/campaign/InfiltracaoFinalCta";
import InfiltracaoContact from "@/components/campaign/InfiltracaoContact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { WHATSAPP_INFILTRACAO_URL } from "@/components/campaign/WhatsAppButton";

/**
 * Diferenciais enxutos e focados na campanha de infiltração de joelho.
 * Reaproveita o componente DifferentialsSection da home via prop `items`
 * (sem alterar o comportamento padrão consumido pela home).
 */
const differentials: DifferentialItem[] = [
  { icon: Clock, title: "Avaliação sem pressa", desc: "Tempo dedicado para entender sua história e examinar o joelho com atenção, antes de qualquer indicação." },
  { icon: Users, title: "Dois médicos dedicados à dor", desc: "Ortopedia e medicina intervencionista da dor atuando juntas no seu caso." },
  { icon: ScanLine, title: "Procedimentos guiados por imagem", desc: "Infiltração e viscossuplementação feitas com auxílio de ultrassom, para precisão e segurança." },
  { icon: Search, title: "Abordagem que investiga a causa", desc: "Buscamos entender a origem da dor articular — não apenas amenizar o sintoma." },
];

const InfiltracaoJoelho = () => {
  useDocumentMeta({
    title: "Infiltração de Joelho em Porto Alegre | Humana Ortopedia",
    description:
      "Infiltração e viscossuplementação de joelho guiadas por ultrassom em Porto Alegre. Avaliação com equipe médica dedicada à dor, no MedPlex Santana. Agende pelo WhatsApp.",
    canonical: "https://humanaortopedia.com.br/infiltracao-joelho",
  });

  return (
    <div className="min-h-screen bg-background">
      <CampaignHeader />
      <main>
        <InfiltracaoHero />
        <InfiltracaoPain />
        <InfiltracaoWhatIs />
        <DifferentialsSection
          title="Por que tratar seu joelho na Humana"
          items={differentials}
          id="por-que-humana"
        />
        <GoogleReviews />
        <InfiltracaoFinalCta />
        <InfiltracaoContact />
      </main>
      <Footer />
      <FloatingWhatsApp href={WHATSAPP_INFILTRACAO_URL} />
    </div>
  );
};

export default InfiltracaoJoelho;
