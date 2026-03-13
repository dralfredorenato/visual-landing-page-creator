import logo from "@/assets/logo-humana-branco.png";
import ScrollReveal from "./ScrollReveal";

const FooterCta = () => {
  return (
    <footer className="py-14 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-5">
            <img src={logo} alt="Humana Ortopedia" className="h-12 opacity-50" />
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dr.alfredo.humana.ortopedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body text-foreground/40 hover:text-gold transition-colors"
              >
                @dr.alfredo
              </a>
              <span className="text-foreground/15">·</span>
              <a
                href="https://www.instagram.com/drcarlosvieira.dor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body text-foreground/40 hover:text-gold transition-colors"
              >
                @drcarlosvieira
              </a>
            </div>
            <p className="text-[10px] font-body text-foreground/25">
              © 2025 Humana Ortopedia — Dr. Alfredo Metzger · Dr. Carlos Eduardo Gomes Vieira
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default FooterCta;
