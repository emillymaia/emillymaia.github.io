/*
 * Dados dos projetos do portfólio.
 * Para adicionar/editar um projeto, basta mexer neste arquivo:
 * o card na página inicial e a página de detalhe (projeto.html?id=...)
 * são gerados automaticamente a partir daqui.
 *
 * draft: true  -> mostra o selo "rascunho" no card (remova quando o texto estiver final)
 */
const PROJECTS = [
  {
    id: "esteira-financiamento-veiculos",
    art: "veiculos", // ilustração: "veiculos", "flow", "agent" ou "eval"
    draft: false,
    tag: "Agentes de IA · Financiamento de veículos",
    title: "Financiamento de veículos com agentes de IA",
    short: "Pipeline de 6 agentes especialistas orquestrados no N8N que automatiza a esteira de financiamento de veículos.",
    highlight: "<b>+70%</b> dos clientes aprovados automaticamente",
    company: "Creditas",
    squad: "AI Factory Backoffice",
    role: "AI Automation Engineer",
    stack: ["Python", "LangFlow", "N8N", "MCP Tools", "Langfuse", "AWS", "GitHub", "CI/CD", "APIs DETRAN"],
    summary:
      "Automação da esteira de financiamento de veículos com um pipeline de agentes de IA, deixando para o time humano apenas os casos mais complexos.",
    context: [
      "O financiamento de veículos era uma área com grande potencial de automação: no mercado, esse processo já roda de ponta a ponta sem intervenção humana, mas internamente ainda dependia de muito trabalho manual e operacional.",
      "A squad AI Factory Backoffice, criada para automatizar com IA os processos de backoffice de vários produtos, recebeu o desafio de automatizar essa esteira.",
    ],
    problem: [
      "Tirar o trabalho operacional das mãos do time sem perder confiabilidade. A análise envolve fotos e documentos do veículo, localização, consultas ao DETRAN e débitos em aberto, e cada decisão impacta a aprovação de um crédito.",
    ],
    aiRole: [
      { title: "Mapeamento da esteira", text: "Mapeei as etapas do processo de financiamento de veículos para definir onde cada agente entraria e o que seguiria com o time." },
      { title: "Pipeline orquestrado", text: "Participei da criação de um pipeline de agentes monolíticos orquestrados pelo N8N, rodando no LangFlow com MCP Tools para buscar e tratar dados." },
      { title: "Agente de vistoria", text: "Criei o agente que lê e analisa imagens e documentos do veículo, verificando as condições do automóvel e a geolocalização." },
      { title: "Agente de débitos", text: "Criei o agente responsável pelo controle e pagamento de débitos em aberto do veículo." },
      { title: "Escolha de modelos e evolução", text: "Rodei smoke tests para escolher a LLM de cada agente e evoluí outros agentes do pipeline, mantendo a acurácia acima de 90% em todos." },
    ],
    results: [
      { value: "+70%", label: "dos clientes aprovados automaticamente" },
      { value: "6", label: "agentes especialistas integrados" },
      { value: ">90%", label: "de acurácia em todos os modelos" },
    ],
    resultsNote: "Hoje, apenas os casos mais complexos seguem para transbordo humano.",
    learnings: [],
  },
  {
    id: "minuta-automatica",
    art: "minuta", // ilustração: "veiculos", "minuta", "flow", "agent" ou "eval"
    draft: false,
    tag: "IA · Formalização de crédito",
    title: "Minuta Automática com IA",
    short: "Leitura de mais de 11 tipos de documentos com IA para preencher automaticamente os 80+ campos do contrato de crédito com imóvel em garantia.",
    highlight: "<b>300h</b> mensais devolvidas ao time",
    company: "Creditas",
    role: "AI Automation Engineer",
    stack: ["LLMs", "Leitura de documentos com IA", "Extração de dados", "CRM"],
    summary:
      "Automação do preenchimento da minuta, o contrato do cliente, em operações de crédito com imóvel em garantia: um processo de 2 horas que passou a ser automático.",
    context: [
      "Na formalização do crédito com imóvel em garantia (home equity), cada operação gera uma minuta: o contrato do cliente. É um documento longo, com muitas pessoas envolvidas na operação e mais de 80 campos preenchidos manualmente numa ficha no CRM.",
      "Um time de 12 pessoas cuidava desse fluxo todo mês, e cada minuta levava cerca de 2 horas para ficar pronta.",
    ],
    problem: [
      "As informações do contrato estão espalhadas em mais de 11 tipos de documentos: RG, CNH, certidões de casamento e nascimento, contas de luz e água, comprovantes de endereço e outros. Ler, interpretar e transcrever tudo à mão tomava horas de cada operação.",
    ],
    aiRole: [
      { title: "Leitura e interpretação de documentos", text: "Automatizei com IA a leitura de mais de 11 tipos de documentos, extraindo e interpretando as informações que o contrato precisa." },
      { title: "Preenchimento automático da minuta", text: "Os dados extraídos passaram a preencher automaticamente os mais de 80 campos da ficha no CRM que antes eram digitados à mão." },
    ],
    results: [
      { value: "2h → auto", label: "tempo de preenchimento por minuta" },
      { value: "300h", label: "de produtividade liberadas por mês" },
      { value: "80+", label: "campos preenchidos pela IA" },
      { value: "11+", label: "tipos de documentos lidos" },
    ],
    learnings: [],
  },
  {
    id: "emissao-certidoes",
    art: "certidoes", // ilustração: "veiculos", "minuta", "certidoes", "flow", "agent" ou "eval"
    draft: false,
    tag: "Automação · Operações",
    title: "Emissão Automática de Certidões Forenses",
    short: "Fluxo no Make que, a partir de nome, CPF e data de nascimento, emite e anexa no CRM mais de 33 certidões de tribunais de todo o Brasil.",
    highlight: "<b>440h</b> mensais economizadas",
    company: "Creditas",
    role: "AI Automation Engineer",
    stack: ["Make", "APIs dos tribunais", "JavaScript", "Python", "CRM"],
    summary:
      "Automação da emissão de certidões forenses dos clientes que pedem crédito, do pedido nos tribunais até o anexo no CRM.",
    context: [
      "O time de operações era responsável por emitir as certidões forenses (TRT, TST, TJ e outras) de todos os clientes envolvidos em uma operação de crédito.",
      "Cada certidão era solicitada manualmente, tribunal por tribunal, e depois anexada no CRM para consulta do time comercial e de operações.",
    ],
    problem: [
      "São mais de 33 certidões diferentes, de tribunais de todo o Brasil, para cada cliente da operação. Um trabalho repetitivo que consumia centenas de horas do time todo mês.",
    ],
    howTitle: "Como construí a automação",
    aiRole: [
      { title: "Entrada a partir do CRM", text: "O fluxo puxa automaticamente do CRM os dados básicos do cliente: nome, data de nascimento e CPF." },
      { title: "Fluxo de automações no Make", text: "Criei no Make um fluxo de automações integradas que solicita todas as certidões forenses pertinentes a cada cliente da operação." },
      { title: "Integração com os tribunais", text: "As certidões são emitidas via APIs diretamente dos tribunais de todo o Brasil, com tratamentos em JavaScript e Python." },
      { title: "Retorno ao CRM", text: "Os documentos emitidos são anexados de volta no CRM, prontos para o time comercial e de operações." },
    ],
    results: [
      { value: "440h", label: "economizadas por mês" },
      { value: "33+", label: "certidões emitidas automaticamente" },
    ],
    learnings: [],
  },
];
