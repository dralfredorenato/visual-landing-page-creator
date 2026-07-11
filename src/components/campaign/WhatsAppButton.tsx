import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackWhatsAppConversion } from "@/lib/gtag";

/**
 * URL única de conversão da campanha de infiltração de joelho.
 * Mantém o mesmo host (wa.me/5551920004467) usado em toda a home, para que o
 * gatilho de clique/conversão (Lead) já configurado no GTM (GTM-5FBSF6PT)
 * dispare nesta rota sem qualquer alteração na configuração global.
 */
export const WHATSAPP_INFILTRACAO_URL =
  "https://wa.me/5551920004467?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20sobre%20infiltra%C3%A7%C3%A3o%20de%20joelho%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

type Variant = "gold" | "whatsapp" | "light";

const variantClasses: Record<Variant, string> = {
  gold: "bg-gold text-primary-foreground hover:bg-gold-light",
  whatsapp: "bg-whatsapp text-white hover:opacity-90",
  light: "bg-background text-gold hover:bg-background/90",
};

interface WhatsAppButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

/**
 * Botão/âncora de WhatsApp da campanha. Reproduz exatamente o padrão de markup
 * usado nas âncoras de WhatsApp da home (mesmo host, target, rel e classes de
 * estilo), de modo que herda visual e rastreamento de conversão.
 */
const WhatsAppButton = ({ children, variant = "gold", className }: WhatsAppButtonProps) => (
  <a
    href={WHATSAPP_INFILTRACAO_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={trackWhatsAppConversion}
    className={cn(
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold font-body transition-all",
      variantClasses[variant],
      className,
    )}
  >
    <MessageCircle className="w-4 h-4 shrink-0" />
    {children}
  </a>
);

export default WhatsAppButton;
