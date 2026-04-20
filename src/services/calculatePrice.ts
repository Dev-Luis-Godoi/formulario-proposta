import type { ImplementationCost } from '../types/ImplementationCost';
import type { OptionalMonthly } from '../types/optionalMonthly';
import { PRICING } from '../utils/Pricing';

const getCnpjPrice = (quantity: number) => {
  const tier = PRICING.cnpj.find((t) => quantity <= t.max);
  return tier ? tier.price : 0;
};

const getComprovacoesPrice = (quantity: number) => {
  const tier = PRICING.comprovacoes.find((t) => quantity <= t.max);
  return tier ? tier.price : 0;
};
type PriceInput = {
  monthlyOptions: OptionalMonthly;
  implementation: ImplementationCost;
};
export const calculatePrice = (data: PriceInput) => {
  let monthlyTotal = 0;
  let implementationTotal = 0;

  const { cnpjQuantity = 1, comprovacoes = 0 } = data.monthlyOptions;

  Object.entries(data.monthlyOptions).forEach(([key, value]) => {
    if (typeof value === 'boolean' && value && key in PRICING.monthly) {
      monthlyTotal += PRICING.monthly[key as keyof typeof PRICING.monthly];
    }
  });

  if (!data.implementation.none) {
    Object.entries(data.implementation).forEach(([key, value]) => {
      if (typeof value === 'boolean' && value && key in PRICING.implementation) {
        implementationTotal += PRICING.implementation[key as keyof typeof PRICING.implementation];
      }
    });
  }

  const cnpjTotal = getCnpjPrice(cnpjQuantity);
  const comprovacoesTotal = getComprovacoesPrice(comprovacoes);

  const total = monthlyTotal + implementationTotal + cnpjTotal + comprovacoesTotal;

  return {
    monthly: monthlyTotal,
    implementation: implementationTotal,
    cnpj: cnpjTotal,
    comprovacoes: comprovacoesTotal,
    total,
  };
};
