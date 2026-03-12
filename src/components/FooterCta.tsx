import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-humana-branco.png";

const FooterCta = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Pronto para aliviar sua dor?
        </h2>
        <p className="font-body text-foreground/60 mb-8 max-w-lg mx-auto">
          Agende uma avaliação especializada. Nossa equipe no WhatsApp retornará o mais breve possível com os horários disponíveis.
        </p>
        <a
          href="https://wa.link/izazjx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold font-body hover:bg-gold-light transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Fale por WhatsApp
        </a>

        <div className="mt-14 flex flex-col items-center gap-4">
          <img src={logo} alt="Humana Ortopedia" className="h-14 opacity-60" />
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dr.alfredo.humana.ortopedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-foreground/40 hover:text-gold transition-colors"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs font-body text-foreground/30">
            © 2025 Humana Ortopedia — Dr. Alfredo Metzger · CREMERS 39343
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCta;
