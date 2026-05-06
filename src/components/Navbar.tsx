import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavLink = {
  label: string;
  href: string;
  type: "anchor" | "spa" | "external";
};

const navLinks: NavLink[] = [
  { label: "Tratamentos", href: "/#tratamentos", type: "anchor" },
  { label: "Sobre", href: "/#sobre", type: "anchor" },
  { label: "Depoimentos", href: "/#depoimentos", type: "anchor" },
  { label: "Blog", href: "https://humanaortopedia.com.br/blog/", type: "external" },
  { label: "Contato", href: "/#contato", type: "anchor" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderLink = (link: NavLink, className: string, onClickExtra?: () => void) => {
    if (link.type === "spa") {
      return (
        <Link
          key={link.href}
          to={link.href}
          onClick={onClickExtra}
          className={className}
        >
          {link.label}
        </Link>
      );
    }
    if (link.type === "external") {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={onClickExtra}
          className={className}
        >
          {link.label}
        </a>
      );
    }
    // anchor
    return (
      <a
        key={link.href}
        href={link.href}
        onClick={() => {
          handleAnchorClick(link.href);
          onClickExtra?.();
        }}
        className={className}
      >
        {link.label}
      </a>
    );
  };

  const desktopLinkClass = "text-xs font-body font-medium text-foreground/70 hover:text-gold transition-colors tracking-widest uppercase";
  const mobileLinkClass = "py-4 text-lg font-body font-medium text-foreground/80 hover:text-gold transition-colors uppercase tracking-wide border-b border-border/30";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-bold text-gold tracking-wide">
          Humana Ortopedia
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link, desktopLinkClass))}
        </div>

        <a
          href="https://wa.me/5551920004467"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar Consulta
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-md transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => renderLink(link, mobileLinkClass, () => setOpen(false)))}
          <a
            href="https://wa.me/5551920004467"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-6 bg-gold text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold font-body"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
