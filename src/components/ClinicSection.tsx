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
              A Humana Ortopedia nasceu da união de duas trajetórias médicas, ideias inovadoras e o propósito comum de transformar o cuidado em ortopedia. Criada a partir da parceria entre o Dr. Alfredo Renato Metzger Filho e o Dr. Carlos Vieira, a clínica surge como um espaço dedicado ao cuidado integral da saúde musculoesquelética.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Mais do que tratar doenças, acreditamos em restaurar o movimento, aliviar a dor e devolver autonomia. Aqui, cada paciente é recebido com escuta ativa, clareza nas orientações e proximidade no acompanhamento.
            </p>
            <p className="font-body text-foreground/70 leading-relaxed">
              Nosso compromisso é oferecer um cuidado premium, que combina excelência técnica com acolhimento humano. Acreditamos que ortopedia é mais do que corrigir estruturas: é devolver qualidade de vida, conforto e confiança no próprio corpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
