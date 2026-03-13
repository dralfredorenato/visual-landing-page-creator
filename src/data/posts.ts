import blogArtroseJoelho from "@/assets/blog-artrose-joelho.jpg";
import blogDorLombar from "@/assets/blog-dor-lombar.jpg";
import blogInfiltracao from "@/assets/blog-infiltracao.jpg";

export interface Post {
  id: string;
  slug: string;
  titulo: string;
  categoria: 'Medicina da Dor' | 'Joelho e Quadril' | 'Coluna' | 'Medicina Esportiva' | 'Saúde Óssea' | 'Qualidade de Vida';
  resumo: string;
  conteudo: string;
  dataPublicacao: string;
  tempoLeitura: number;
  imagemDestaque: string;
  autor: 'Dr. Alfredo Renato Metzger Filho' | 'Dr. Carlos Eduardo Gomes Vieira';
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "artrose-joelho-tratamento-conservador",
    titulo: "Artrose de joelho: quando o tratamento conservador resolve",
    categoria: "Joelho e Quadril",
    autor: "Dr. Carlos Eduardo Gomes Vieira",
    resumo: "A artrose de joelho afeta milhões de brasileiros. Mas cirurgia não é o único caminho. Entenda quando infiltrações, viscossuplementação e fisioterapia são suficientes para recuperar qualidade de vida.",
    dataPublicacao: "2025-03-10",
    tempoLeitura: 6,
    imagemDestaque: blogArtroseJoelho,
    conteudo: `<p>A artrose de joelho — ou gonartrose — é uma das condições ortopédicas mais comuns no Brasil, afetando cerca de 15 milhões de pessoas. Ela se manifesta pelo desgaste progressivo da cartilagem que reveste a articulação, gerando dor, rigidez e limitação funcional. Apesar de ser uma doença degenerativa, o diagnóstico precoce muda radicalmente o prognóstico.</p>
<p>Os graus de comprometimento variam de I a IV segundo a classificação de Kellgren-Lawrence. Nos graus iniciais (I e II), o tratamento conservador apresenta excelentes resultados: infiltrações com ácido hialurônico (viscossuplementação), fortalecimento muscular guiado, perda de peso e mudanças no padrão de movimento. Nos graus III e IV, procedimentos intervencionistas como radiofrequência e bloqueios guiados podem postergar significativamente a necessidade de prótese.</p>
<p>A abordagem da Humana Ortopedia prioriza alternativas minimamente invasivas: infiltrações articulares guiadas por ultrassom garantem precisão na aplicação, reduzindo riscos e maximizando resultados. A cirurgia existe como opção, mas nunca como primeiro recurso. O mais importante é que cada paciente receba um plano de tratamento individualizado, baseado em evidências e alinhado à sua realidade.</p>`,
  },
  {
    id: "2",
    slug: "dor-lombar-cronica-causas-tratamento",
    titulo: "Dor lombar crônica: o que é, por que persiste e como tratar",
    categoria: "Coluna",
    autor: "Dr. Alfredo Renato Metzger Filho",
    resumo: "A lombalgia crônica é a principal causa de afastamento do trabalho no Brasil. Entenda os mecanismos da dor persistente e por que o tratamento vai além do anti-inflamatório.",
    dataPublicacao: "2025-02-24",
    tempoLeitura: 7,
    imagemDestaque: blogDorLombar,
    conteudo: `<p>A dor lombar crônica é definida como dor na região inferior das costas que persiste por mais de 12 semanas. No Brasil, é a principal causa de incapacidade laboral e afeta cerca de 80% da população adulta em algum momento da vida. Mais do que um sintoma, a lombalgia crônica envolve mecanismos complexos que incluem sensibilização central, alterações posturais e fatores emocionais.</p>
<p>A cronificação da dor ocorre quando o sistema nervoso passa a interpretar estímulos normais como ameaçadores — fenômeno conhecido como sensibilização central. Fatores como sedentarismo, estresse crônico, obesidade e má qualidade do sono contribuem para a manutenção desse ciclo. Por isso, tratar apenas com anti-inflamatórios não resolve: é preciso abordar o paciente de forma integrada.</p>
<p>Na Humana Ortopedia, utilizamos protocolos multimodais que combinam neuromodulação com tDCS, bloqueios facetários guiados por imagem, radiofrequência e reabilitação funcional. A prescrição de canabinóides também pode ser considerada em casos selecionados. O objetivo é desativar o ciclo de dor, restaurar a funcionalidade e devolver ao paciente o controle sobre sua vida.</p>`,
  },
  {
    id: "3",
    slug: "infiltracao-articular-guiada-imagem",
    titulo: "Infiltração articular guiada por imagem: mais precisão, menos risco",
    categoria: "Medicina da Dor",
    autor: "Dr. Carlos Eduardo Gomes Vieira",
    resumo: "O uso de ultrassom para guiar infiltrações articulares mudou o padrão de segurança e eficácia dos procedimentos ortopédicos. Entenda como funciona e quem pode se beneficiar.",
    dataPublicacao: "2025-01-15",
    tempoLeitura: 5,
    imagemDestaque: blogInfiltracao,
    conteudo: `<p>A infiltração articular é um dos procedimentos mais realizados na ortopedia e na medicina da dor. Consiste na aplicação direta de medicamentos — como corticoides, ácido hialurônico ou anestésicos — em articulações, tendões ou espaços periarticulares. A grande evolução dos últimos anos foi a incorporação da guia por ultrassom, que permite visualizar em tempo real a anatomia do paciente durante o procedimento.</p>
<p>As vantagens da guia por imagem são significativas: maior precisão na aplicação, menor risco de lesão a estruturas adjacentes, possibilidade de tratar áreas de difícil acesso e redução na quantidade de medicamento necessário. Estudos mostram que infiltrações guiadas por ultrassom têm taxa de sucesso significativamente superior às realizadas às cegas, especialmente em articulações como ombro, quadril e pequenas articulações das mãos.</p>
<p>Na Humana Ortopedia, todas as infiltrações são realizadas com apoio de ultrassonografia de alta resolução. O procedimento é realizado em consultório, sem necessidade de internação ou sedação, e o paciente pode retomar suas atividades normais no mesmo dia. As indicações incluem artrose, bursites, tendinopatias, síndrome do túnel do carpo e dor neuropática localizada.</p>`,
  },
];
