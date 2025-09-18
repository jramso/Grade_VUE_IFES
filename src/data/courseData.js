export const courseData = [
  {
    period: 1,
    subjects: [
      {
        name: "Introdução ao Computador - IC",
        hours: 30,
        area: "core",
        tag: "",
      },
      {
        name: "Programação I - Prog I",
        hours: 90,
        area: "programming",
        tag: "",
      },
      { name: "Lógica - Log", hours: 60, area: "math", tag: "" },
      {
        name: "Introdução a Sistemas de Informação - ISI",
        hours: 60,
        area: "systems",
        tag: "",
      },
      { name: "Sociologia - Soc", hours: 30, area: "humanities", tag: "" },
      {
        name: "Comunicação e Expressão - CE",
        hours: 30,
        area: "humanities",
        tag: "",
      },
    ],
  },
  {
    period: 2,
    subjects: [
      {
        name: "Teoria Geral da Administração - TGA",
        hours: 60,
        area: "management",
        tag: "",
      },
      {
        name: "Programação II",
        hours: 90,
        area: "programming",
        tag: "IC, Prog I",
      },
      { name: "Introdução ao Cálculo", hours: 60, area: "math", tag: "" },
      {
        name: "Laboratório de Sistemas de Informação",
        hours: 60,
        area: "systems",
        tag: "",
      },
      {
        name: "Informática e Sociedade",
        hours: 30,
        area: "humanities",
        tag: "",
      },
      {
        name: "Metodologia de Pesquisa",
        hours: 30,
        area: "humanities",
        tag: "",
      },
    ],
  },
  {
    period: 3,
    subjects: [
      {
        name: "Arquitetura e Organização de Computadores",
        hours: 60,
        area: "core",
        tag: "",
      },
      { name: "Estruturas de Dados", hours: 60, area: "programming", tag: "" },
      { name: "Matemática Discreta", hours: 60, area: "math", tag: "" },
      {
        name: "Teoria Geral de Sistemas",
        hours: 60,
        area: "systems",
        tag: "TGA",
      },
      {
        name: "Administração Financeira",
        hours: 60,
        area: "management",
        tag: "TGA",
      },
    ],
  },
  {
    period: 4,
    subjects: [
      { 
        name: "Sistemas Operacionais", 
        hours: 60, 
        area: "core", 
        tag: "" },
      {
        name: "Programação Orientada a Objetos",
        hours: 60,
        area: "programming",
        tag: "",
      },
      { name: "Cálculo I", hours: 60, area: "math", tag: "" },
      {
        name: "Gerencia de Processos de Negócios",
        hours: 30,
        area: "management",
        tag: "",
      },
      { name: "Análise de Sistemas", hours: 60, area: "systems", tag: "" },
      { name: "Banco de Dados I", hours: 60, area: "programming", tag: "ED" },
    ],
  },
  {
    period: 5,
    subjects: [
      { name: "Redes de Computadores", hours: 60, area: "core", tag: "" },
      {
        name: "Administração da Produção e Logística",
        hours: 30,
        area: "management",
        tag: "TGA",
      },
      { name: "Álgebra Linear", hours: 60, area: "math", tag: "TC" },
      { name: "Optativa", hours: 60, area: "elective", tag: "1P" },
      { name: "Desenvolvimento Web", hours: 60, area: "web", tag: "POO" },
      { name: "Projeto de Sistemas", hours: 60, area: "systems", tag: "" },
    ],
  },
  {
    period: 6,
    subjects: [
      {
        name: "Técnicas de Programação Avançada",
        hours: 60,
        area: "programming",
        tag: "MD",
      },
      {
        name: "Probabilidade e Estatística I",
        hours: 60,
        area: "math",
        tag: "",
      },
      {
        name: "Inteligência de Negócio",
        hours: 60,
        area: "systems",
        tag: "BD",
      },
      { name: "Engenharia de Software", hours: 60, area: "systems", tag: "" },
      {
        name: "Gerência de Projetos de Software",
        hours: 60,
        area: "management",
        tag: "",
      },
    ],
  },
  {
    period: 7,
    subjects: [
      {
        name: "Inteligência Artificial",
        hours: 60,
        area: "programming",
        tag: "AL",
      },
      { name: "Optativa", hours: 30, area: "elective", tag: "1P" },
      {
        name: "Arquitetura Organizacional de TI",
        hours: 60,
        area: "systems",
        tag: "",
      },
      { name: "Extensão", hours: 75, area: "humanities", tag: "" },
      { name: "Extensão", hours: 75, area: "humanities", tag: "" },
    ],
  },
  {
    period: 8,
    subjects: [
      {
        name: "Fundamentos de Programação Paralela e Distribuída",
        hours: 30,
        area: "programming",
        tag: "",
      },
      { name: "Optativa", hours: 60, area: "elective", tag: "1P" },
      { name: "Empreendedorismo", hours: 60, area: "management", tag: "" },
      { name: "Extensão", hours: 75, area: "humanities", tag: "" },
      { name: "Extensão", hours: 75, area: "humanities", tag: "" },
    ],
  },
];
// Areas: core, programming, math, systems, management, humanities, web, elective