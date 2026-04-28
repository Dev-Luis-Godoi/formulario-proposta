import type { PricingType } from '../types/Pricing';

export const INITIAL_PRICING: PricingType = {
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
  planBasic: {
    cnpjQuantity: 0,
    comprovationsQuantity: 0,
    total: 0,
  },
};
