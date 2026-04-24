export type PricingType = {
  planBasic: {
    cnpjQuantity: number;
    comprovationsQuantity: number;
    total: number;
  };
  monthly: {
    xmlCollector: number;
    erpIntegrationAccess: number;
    apiIntegrationAccess: number;
    occurrencesModule: number;
    antifraudeModule: number;
  };

  implementation: {
    tutorialTraining: number;
    consultantTraining: number;
    custom: number;
  };
};
