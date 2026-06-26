import { MapPin, Phone, ExternalLink, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { noWidows } from "@/lib/typography";

/**
 * Bloco de contato/localização da campanha — herda o visual da ContactSection
 * da home (endereço, mapa embed), mas sem o formulário de lead: o foco é o
 * WhatsApp. Inclui os dados dos médicos com CRM/RQE em conformidade com o CFM.
 */
const InfiltracaoContact = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Endereço + CTA */}
          <ScrollReveal>
            <div>
              <p className="text-xs font-body uppercase tracking-[0.3em] text-gold font-medium mb-6">
                ONDE ESTAMOS
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div className="font-body text-sm text-muted-foreground leading-relaxed">
                    <p>Rua Gomes Jardim, 201 — sala 505A</p>
                    <p>MedPlex Santana — Bairro Santana</p>
                    <p>Porto Alegre/RS</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">(51) 92000-4467</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton variant="whatsapp" className="px-6 py-3">
                  Falar pelo WhatsApp
                </WhatsAppButton>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Gomes+Jardim+201+sala+505A+Porto+Alegre+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground/70 px-6 py-3 rounded-md text-sm font-medium font-body hover:border-gold/40 hover:text-gold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Como chegar
                </a>
              </div>

              {/* Equipe médica — conformidade CFM */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-body uppercase tracking-[0.3em] text-gold font-medium mb-5 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Equipe médica
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="font-heading text-lg font-bold text-foreground leading-snug">
                      Dr. Alfredo Renato Metzger Filho
                    </p>
                    <p className="font-body text-sm text-muted-foreground">Ortopedista e Traumatologista</p>
                    <p className="font-body text-xs text-muted-foreground/70 mt-0.5">CRM-RS 39343 · RQE 44522</p>
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-foreground leading-snug">
                      Dr. Carlos Eduardo Gomes Vieira
                    </p>
                    {/* Duas linhas intencionais — "Intervencionista da Dor" nunca larga "da Dor" sozinho */}
                    <p className="font-body text-sm text-muted-foreground">Ortopedista e Traumatologista</p>
                    <p className="font-body text-sm text-muted-foreground">{noWidows("Intervencionista da Dor")}</p>
                    <p className="font-body text-xs text-muted-foreground/70 mt-0.5">CRM-RS 57754 · RQE 44416 · RQE 44392</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mapa */}
          <ScrollReveal delay={0.1}>
            <div className="h-full min-h-[300px]">
              <iframe
                title="Humana Ortopedia — MedPlex Santana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-51.1900!3d-30.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Gomes+Jardim+201+Porto+Alegre+RS!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 12, minHeight: 300 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InfiltracaoContact;
