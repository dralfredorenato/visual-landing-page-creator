import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-14 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1 */}
          <div>
            <p className="font-heading text-xl font-bold text-gold mb-2">Humana Ortopedia</p>
            <p className="font-body text-sm text-muted-foreground">
              Ortopedia humanizada. Medicina da dor. Porto Alegre/RS.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-gold/60 mb-3">Links</p>
            <div className="space-y-2">
              {[
                { label: "Tratamentos", href: "/#tratamentos" },
                { label: "Sobre", href: "/#sobre" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "/#contato" },
              ].map((link) =>
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link key={link.href} to={link.href} className="block font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} className="block font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-gold/60 mb-3">Redes sociais</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/humana.ortopedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5551920004467"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-border mb-6" />
        <p className="text-[11px] font-body text-muted-foreground/50 text-center">
          © 2025 Humana Ortopedia e Saúde Ltda — Dr. Alfredo Metzger CREMERS 39343 | Dr. Carlos Vieira CREMERS 57.754
        </p>
      </div>
    </footer>
  );
};

export default Footer;
