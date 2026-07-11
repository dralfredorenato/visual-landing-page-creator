import { MessageCircle } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/gtag";

interface FloatingWhatsAppProps {
  /**
   * URL de destino do botão flutuante. Default mantém exatamente o link usado
   * na home (sem mensagem pré-preenchida); páginas de campanha podem passar uma
   * URL com `?text=` para herdar a mensagem pré-preenchida do anúncio.
   */
  href?: string;
}

const FloatingWhatsApp = ({ href = "https://wa.me/5551920004467" }: FloatingWhatsAppProps = {}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppConversion}
      title="Falar com a Humana Ortopedia"
      className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] bg-whatsapp rounded-full flex items-center justify-center shadow-lg animate-pulse-whatsapp hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
