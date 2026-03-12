import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-humana-branco.png";

const navLinks = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "A Clínica", href: "#clinica" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#">
          <img src={logo} alt="Humana Ortopedia" className="h-12" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.link/izazjx"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar Consulta
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-body font-medium text-foreground/80 hover:text-gold transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.link/izazjx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 bg-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
