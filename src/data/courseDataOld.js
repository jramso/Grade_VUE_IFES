export const courseData = [
  {
    period: 1,
    subjects: [
      {
        name: "Introdução a Sistemas de Informação",
        hours: 60,
        area: "systems",
        tag: "",
      }, // Azul claro
      { name: "Introdução ao Cálculo", hours: 60, area: "math", tag: "" }, // Verde claro
      { name: "Lógica", hours: 60, area: "math", tag: "" }, // Verde claro
      { name: "Programação I", hours: 90, area: "programming", tag: "" }, // Amarelo
      { name: "Introdução ao Computador", hours: 30, area: "core", tag: "" }, // Roxo escuro (quase preto)
      {
        name: "Comunicação e Expressão",
        hours: 30,
        area: "humanities",
        tag: "",
      }, // Roxo claro
    ],
  },
  {
    period: 2,
    subjects: [
      {
        name: "Laboratório de Sistemas de Informação",
        hours: 60,
        area: "systems",
        tag: "",
      }, // Azul claro

      { name: "Cálculo I", hours: 60, area: "math", tag: "" }, // Verde claro
      { name: "Matemática Discreta", hours: 60, area: "math", tag: "" }, // Verde claro
      { name: "Programação II", hours: 90, area: "programming", tag: "" }, // Amarelo
      {
        name: "Teoria Geral da Administração",
        hours: 60,
        area: "systems",
        tag: "",
      }, // Rosa claro
      { name: "Sociologia", hours: 30, area: "humanities", tag: "" }, // Roxo claro
    ],
  },
  {
    period: 3,
    subjects: [
      {
        name: "Teoria Geral de Sistemas",
        hours: 60,
        area: "systems",
        tag: "TGA",
      }, // Azul claro (já existe em Período 2, se for um pré-req)
      {
        name: "Probabilidade e Estatística I",
        hours: 60,
        area: "math",
        tag: "",
      }, // Verde claro
      { name: "Álgebra Linear", hours: 60, area: "math", tag: "" }, // Verde claro
      { name: "Estruturas de Dados", hours: 60, area: "programming", tag: "" }, // Amarelo
      {
        name: "Arquitetura e Organização de Computadores",
        hours: 60,
        area: "core",
        tag: "",
      }, // Roxo escuro
      {
        name: "Metodologia de Pesquisa",
        hours: 30,
        area: "humanities",
        tag: "",
      }, // Roxo claro
    ],
  },
  {
    period: 4,
    subjects: [
      {
        name: "Gerência de Processos de Negócios",
        hours: 30,
        area: "systems",
        tag: "",
      },
      { name: "Banco de Dados I", hours: 60, area: "management", tag: "" }, // Laranja
      { name: "Análise de Sistemas", hours: 60, area: "web", tag: "TGS" }, // Laranja
      {
        name: "Programação Orientada a Objetos",
        hours: 60,
        area: "programming",
        tag: "",
      }, // Amarelo
      { name: "Sistemas Operacionais", hours: 60, area: "core", tag: "" }, // Roxo escuro
      {
        name: "Administração da Produção e Logística",
        hours: 30,
        area: "systems",
        tag: "TGA",
      }, // Cinza escuro
    ],
  },
  {
    period: 5,
    subjects: [
      { name: "Projeto de Sistemas", hours: 60, area: "web", tag: "" }, // Laranja
      { name: "Desenvolvimento Web", hours: 60, area: "web", tag: "" }, // Laranja
      {
        name: "Técnicas de Programação Avançada",
        hours: 60,
        area: "programming",
        tag: "MD",
      }, // Laranja (tag MD na imagem)
      { name: "Redes de Computadores", hours: 60, area: "core", tag: "" }, // Roxo escuro
      { name: "Optativa I", hours: 30, area: "elective", tag: "1P" }, // Preto
    ],
  },
  {
    period: 6,
    subjects: [
      { name: "Inteligência de Negócios", hours: 60, area: "systems", tag: "" }, // Azul escuro
      { name: "Engenharia de Software", hours: 60, area: "web", tag: "" }, // Azul escuro
      {
        name: "Gerência de Projetos de Software",
        hours: 60,
        area: "web",
        tag: "",
      }, // Laranja
      {
        name: "Fundamentos de Programação Paralela e Distribuída",
        hours: 60,
        area: "programming",
        tag: "",
      }, // Cinza escuro
      {
        name: "Administração Financeira",
        hours: 60,
        area: "systems",
        tag: "",
      }, // Cinza escuro
      { name: "Optativa II", hours: 30, area: "elective", tag: "1P" }, // Preto
    ],
  },
  {
    period: 7,
    subjects: [
      {
        name: "Arquitetura Organizacional de TI",
        hours: 60,
        area: "systems",
        tag: "TGS",
      }, // Azul claro (tag TGS na imagem)
      {
        name: "Projeto de Diplomação I",
        hours: 60,
        area: "humanities",
        tag: "TCS",
      }, // Cinza claro (tag TCS)
      {
        name: "Inteligência Artificial",
        hours: 60,
        area: "programming",
        tag: "AL, PE",
      }, // Verde claro (tags AL, PE)
      { name: "Empreendedorismo", hours: 60, area: "systems", tag: "" }, // Cinza escuro
      { name: "Optativa III", hours: 30, area: "elective", tag: "1P" }, // Preto
    ],
  },
  {
    period: 8,
    subjects: [
      {
        name: "Informática e Sociedade",
        hours: 30,
        area: "humanities",
        tag: "",
      }, // Roxo (claro, na imagem)
      {
        name: "Projeto de Diplomação II",
        hours: 75,
        area: "humanities",
        tag: "MP",
      }, // Cinza claro (tag MP)
      { name: "Optativa IV", hours: 60, area: "elective", tag: "1P" }, // Preto
      { name: "Optativa V", hours: 60, area: "elective", tag: "1P" }, // Preto
    ],
  },
];
