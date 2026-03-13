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
          Agende uma avaliação especializada com um de nossos ortopedistas. Nossa equipe no WhatsApp retornará com os horários disponíveis.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.link/izazjx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Dr. Alfredo — WhatsApp
          </a>
          <a
            href="https://wa.me/5551991932662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Dr. Carlos — WhatsApp
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <img src={logo} alt="Humana Ortopedia" className="h-14 opacity-60" />
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dr.alfredo.humana.ortopedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-foreground/40 hover:text-gold transition-colors"
            >
              @dr.alfredo
            </a>
            <span className="text-foreground/20">·</span>
            <a
              href="https://www.instagram.com/drcarlosvieira.dor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-foreground/40 hover:text-gold transition-colors"
            >
              @drcarlosvieira
            </a>
          </div>
          <p className="text-xs font-body text-foreground/30">
            © 2025 Humana Ortopedia — Dr. Alfredo Metzger · Dr. Carlos Eduardo Gomes Vieira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCta;
