import aboutAlfredo from "@/assets/about-alfredo.jpg";
import aboutCarlos from "@/assets/about-carlos.jpg";
import { MessageCircle } from "lucide-react";

const doctors = [
  {
    name: "Dr. Alfredo Metzger",
    image: aboutAlfredo,
    crm: "CREMERS 39343",
    whatsapp: "https://wa.link/izazjx",
    instagram: "https://www.instagram.com/dr.alfredo.humana.ortopedia/",
    bio: [
      "Médico Ortopedista, professor de medicina e especialista em Dor e Cuidados Paliativos. Sua trajetória é marcada pela dedicação ao cuidado humano, sempre unindo ciência, empatia e valores pessoais na prática clínica.",
      "Formado em Medicina em 2014, concluiu residência em Ortopedia e Traumatologia no Hospital Universitário de Canoas (ULBRA) em 2024. Atualmente se dedica à especialização em Dor e Cuidados Paliativos no HCPA/UFRGS e pós-graduação em Perícia Médica pela Faculdade Unimed.",
      "Especializado em medicina da dor, neuromodulação e medicina canabinoide, oferece planos terapêuticos individualizados que tratam não apenas a doença, mas a vida como um todo.",
    ],
  },
  {
    name: "Dr. Carlos Eduardo Gomes Vieira",
    image: aboutCarlos,
    crm: "CREMERS 57.754 · RQE 44.416 (Atuação em Dor) · RQE 44.392 (Ortopedia e Traumatologia)",
    whatsapp: "https://wa.me/5551991932662",
    instagram: "https://www.instagram.com/drcarlosvieira.dor/",
    bio: [
      "Médico Intervencionista da Dor com título de especialista pela AMB/SBOT em Atuação em Dor. Iniciou sua jornada na saúde ainda criança, nos balcões da farmácia de seu pai no interior de São Paulo, onde aprendeu que \"gente precisa de gente\".",
      "Graduou-se em Farmácia, especializou-se em Produção de Medicamentos e construiu uma trajetória de sucesso em importantes indústrias farmacêuticas nacionais. Após 12 anos, ressignificou-se realizando seu sonho de ser médico. Graduou-se em Medicina pelo Centro Universitário Barão de Mauá (Ribeirão Preto/SP) e fez residência em Ortopedia e Traumatologia pela ESCS/DF.",
      "Formação em Medicina da Dor (Faculdade APM, Goiânia/GO), fellowship em Medicina Intervencionista da Dor (Clínica Aliviar/SINPAIN, Rio de Janeiro/RJ) e Dor e Osteometabolismo. Autor de capítulos nos livros \"Medicina da Dor\" e \"Atlas de Intervenção em Dor\".",
      "Membro da LAPS (Latin American Pain Society) e da SBED (Sociedade Brasileira para o Estudo da Dor), onde atuou como secretário do Comitê de Técnicas Intervencionistas e como Diretor de Comitês. Destacado por abordagem técnica, empática e humanizada, com foco no resultado e compromisso com o alívio da dor.",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Nossos Especialistas
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">
          Conheça os Médicos
        </h2>

        <div className="space-y-20">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
            >
              <div className="md:w-5/12">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="rounded-lg w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-7/12 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {doc.name}
                </h3>
                <p className="text-sm font-body font-semibold text-gold tracking-wide">
                  {doc.crm}
                </p>
                {doc.bio.map((p, j) => (
                  <p key={j} className="font-body text-foreground/70 leading-relaxed">
                    {p}
                  </p>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={doc.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold font-body hover:bg-gold-light transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={doc.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body text-gold hover:text-gold-light transition-colors underline underline-offset-4"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
