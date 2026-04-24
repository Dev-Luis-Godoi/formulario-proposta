export type OptionalMonthly = {
  xmlCollector: boolean;
  erpIntegrationAccess: boolean;
  apiIntegrationAccess: boolean;
  occurrencesModule: boolean;
  antifraudeModule: boolean;

  cnpjQuantity: number;
  comprovacoes: number;
  total: number;
  basePlanOverride?: number;
};
