import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5551920004467"
      target="_blank"
      rel="noopener noreferrer"
      title="Falar com a Humana Ortopedia"
      className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] bg-whatsapp rounded-full flex items-center justify-center shadow-lg animate-pulse-whatsapp hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
