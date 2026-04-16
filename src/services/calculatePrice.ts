import type { ProposalPayload } from '../types/Payload';
import { PRICING } from '../utils/Pricing';

const getCnpjPrice = (quantity: number) => {
  const tier = PRICING.cnpj.find((t) => quantity <= t.max);
  return tier ? tier.price : 0;
};

const getComprovacoesPrice = (quantity: number) => {
  const tier = PRICING.comprovacoes.find((t) => quantity <= t.max);
  return tier ? tier.price : 0;
};

export const calculatePrice = (data: ProposalPayload) => {
  let monthlyTotal = 0;
  let implementationTotal = 0;

  const { cnpjQuantity = 1, comprovacoes = 0 } = data.monthlyOptions;

  Object.entries(data.monthlyOptions).forEach(([key, value]) => {
    if (typeof value === 'boolean' && value) {
      monthlyTotal += PRICING.monthly[key as keyof typeof PRICING.monthly] || 0;
    }
  });

  if (!data.implementation.none) {
    Object.entries(data.implementation).forEach(([key, value]) => {
      if (typeof value === 'boolean' && value) {
        implementationTotal +=
          PRICING.implementation[key as keyof typeof PRICING.implementation] || 0;
      }
    });
  }

  const cnpjTotal = getCnpjPrice(cnpjQuantity);

  const comprovacoesTotal = getComprovacoesPrice(comprovacoes);

  return {
    monthly: monthlyTotal,
    implementation: implementationTotal,
    cnpj: cnpjTotal,
    comprovacoes: comprovacoesTotal,
    total: monthlyTotal + implementationTotal + cnpjTotal + comprovacoesTotal,
  };
};
