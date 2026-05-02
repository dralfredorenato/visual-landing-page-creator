import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Privacidade = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | Humana Ortopedia";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Política de Privacidade da Humana Ortopedia — tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018)."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <header className="mb-12">
            <p className="text-xs font-body uppercase tracking-[0.3em] text-gold font-medium mb-4">
              LGPD · Lei nº 13.709/2018
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Política de Privacidade
            </h1>
            <p className="font-body text-sm text-muted-foreground">
              Última atualização: 02 de maio de 2026
            </p>
          </header>

          <div className="prose-content space-y-8 font-body text-foreground/85 leading-relaxed">
            <section>
              <p>
                A <strong>Humana Ortopedia e Saúde Ltda.</strong> ("Humana Ortopedia",
                "nós") é a controladora dos dados pessoais coletados por meio deste site
                e canais associados. Esta Política descreve como tratamos as suas
                informações em conformidade com a Lei Geral de Proteção de Dados
                Pessoais (Lei nº 13.709/2018 — LGPD).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                1. Identificação da controladora
              </h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Razão social:</strong> Humana Ortopedia e Saúde Ltda.</li>
                <li><strong>Endereço:</strong> Rua Gomes Jardim, 201 — sala 505A — MedPlex Santana — Porto Alegre/RS — CEP 90620-130</li>
                <li>
                  <strong>Médicos responsáveis:</strong> Dr. Alfredo Metzger
                  (CREMERS 39.344 · RQE 44.522) e Dr. Carlos Vieira
                  (CREMERS 57.754 · RQE 44.416 · RQE 44.392)
                </li>
                <li><strong>Contato:</strong> WhatsApp +55 51 92000-4467</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                2. Dados coletados
              </h2>
              <p className="mb-3">
                Coletamos apenas os dados pessoais necessários para as finalidades
                descritas nesta Política. Os dados podem incluir:
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Dados de identificação:</strong> nome completo, CPF (quando aplicável) e data de nascimento.</li>
                <li><strong>Dados de contato:</strong> endereço, telefone, WhatsApp e e-mail.</li>
                <li><strong>Dados de mensagens:</strong> conteúdo das mensagens enviadas por formulários, WhatsApp ou e-mail.</li>
                <li><strong>Dados de responsáveis legais:</strong> informações de pais, tutores ou curadores, no caso de menores de idade ou pacientes sob curatela.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo, páginas visitadas e cookies, coletados via Google Tag Manager para fins estatísticos e de melhoria do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                3. Finalidades do tratamento
              </h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Responder solicitações e agendar consultas.</li>
                <li>Encaminhar informações sobre tratamentos solicitados pelo titular.</li>
                <li>Cumprir obrigações legais, regulatórias e do Conselho Federal de Medicina.</li>
                <li>Aprimorar a navegação e a experiência no site.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                4. Bases legais
              </h2>
              <p>
                O tratamento dos dados pessoais ocorre com fundamento nas seguintes
                bases legais previstas na LGPD: consentimento do titular (art. 7º, I);
                cumprimento de obrigação legal ou regulatória (art. 7º, II);
                execução de contrato ou procedimentos preliminares a contrato
                (art. 7º, V); e tutela da saúde, em procedimento realizado por
                profissionais de saúde (art. 11, II, "f").
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                5. Compartilhamento de dados
              </h2>
              <p>
                A Humana Ortopedia <strong>não comercializa</strong> dados pessoais.
                O compartilhamento ocorre apenas com operadores estritamente
                necessários (provedores de hospedagem, mensageria, agendamento e
                analytics) e com autoridades públicas, quando exigido por lei ou
                ordem judicial.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                6. Armazenamento e segurança
              </h2>
              <p>
                Adotamos medidas técnicas e administrativas adequadas para proteger
                os dados pessoais contra acessos não autorizados, perda, alteração
                ou destruição. Os dados são mantidos pelo tempo necessário ao
                cumprimento das finalidades informadas e das obrigações legais
                aplicáveis ao exercício da medicina.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                7. Direitos do titular
              </h2>
              <p className="mb-3">
                Nos termos do art. 18 da LGPD, o titular pode solicitar:
              </p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade;</li>
                <li>Eliminação dos dados tratados com consentimento;</li>
                <li>Informação sobre compartilhamento;</li>
                <li>Revogação do consentimento.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                8. Cookies
              </h2>
              <p>
                Utilizamos cookies próprios e de terceiros (Google Tag Manager /
                Google Analytics) para mensurar audiência e melhorar a experiência
                de navegação. Você pode bloquear cookies nas configurações do seu
                navegador, ciente de que algumas funcionalidades podem ser limitadas.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                9. Encarregado pelo tratamento de dados
              </h2>
              <p>
                A Humana Ortopedia não possui encarregado (DPO) específico para
                tratar de assuntos relacionados a dados pessoais. Solicitações
                relativas a esta Política e ao exercício de direitos podem ser
                encaminhadas pelos canais oficiais informados na página de{" "}
                <a href="/#contato" className="text-gold hover:underline">Contato</a>{" "}
                deste site, identificando-se como pedido relativo à LGPD.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                10. Alterações desta Política
              </h2>
              <p>
                Esta Política pode ser atualizada periodicamente. A versão vigente
                estará sempre disponível nesta página, com indicação da data de
                última atualização.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacidade;
