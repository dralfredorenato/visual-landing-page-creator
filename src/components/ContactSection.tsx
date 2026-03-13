import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá! Sou ${form.nome}. ${form.mensagem}`);
    window.open(`https://wa.me/5551920004467?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
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
                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-body text-sm text-muted-foreground">Atendimentos às segundas-feiras</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/5551920004467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-md text-sm font-semibold font-body hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar pelo WhatsApp
                </a>
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
            </div>
          </ScrollReveal>

          {/* Map + Form */}
          <div>
            <ScrollReveal delay={0.1}>
              {/* SUBSTITUIR: gerar embed atualizado em https://maps.google.com — buscar "Humana Ortopedia MedPlex Santana" e usar o iframe do botão Compartilhar */}
              <iframe
                title="Humana Ortopedia — MedPlex Santana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-51.1900!3d-30.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Gomes+Jardim+201+Porto+Alegre+RS!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 12 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mb-6"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nome"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold font-body hover:bg-gold-light transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
