import clinicImg from "@/assets/about-clinica.jpg";

const ClinicSection = () => {
  return (
    <section id="clinica" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-body uppercase tracking-[0.3em] text-gold mb-3">
          Sobre a Clínica
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
          Conheça a Humana Ortopedia
        </h2>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-5/12">
            <img
              src={clinicImg}
              alt="Humana Ortopedia"
              className="rounded-lg w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-7/12 space-y-4">
            <p className="font-body text-foreground/70 leading-relaxed">
              A Humana Ortopedia é um espaço dedicado ao cuidado integral da saúde musculoesquelética, com foco em oferecer soluções modernas e seguras para o alívio da dor e a recuperação da mobilidade. Nasceu da parceria entre o Dr. Alfredo Metzger e o Dr. Carlos Vieira, unindo duas trajetórias médicas e o propósito de transformar o cuidado em ortopedia.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Aqui, o paciente encontra um amplo portfólio terapêutico: infiltrações guiadas por imagem, viscossuplementação articular, terapia por ondas de choque, protocolos de neuromodulação, radiofrequência, neurocrioablação, injetáveis para osteoporose, prescrição de canabinóides e atendimento domiciliar.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Mais do que tratar doenças, acreditamos em restaurar o movimento, aliviar a dor e devolver autonomia. Nosso compromisso é oferecer cuidado premium que combina excelência técnica com acolhimento humano — devolvendo qualidade de vida, conforto e confiança no próprio corpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
