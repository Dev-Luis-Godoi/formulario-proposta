export const PRICING = {
  monthly: {
    xmlCollector: 50,
    erpIntegrationAccess: 100,
    apiIntegrationAccess: 80,
    occurrencesModule: 40,
    antifraudeModule: 120,
  },

  implementation: {
    tutorialTraining: 200,
    consultantTraining: 500,
    custom: 0,
  },

  cnpj: [
    { max: 1, price: 100 },
    { max: 3, price: 250 },
    { max: 10, price: 600 },
  ],
  comprovacoes: [
    { max: 1000, price: 0 },
    { max: 3000, price: 50 },
    { max: 10000, price: 100 },
  ],
};
