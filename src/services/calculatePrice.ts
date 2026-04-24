import type { ImplementationCost } from '../types/ImplementationCost';
import type { OptionalMonthly } from '../types/optionalMonthly';
import type { PricingType } from '../types/Pricing';
import { PRICING_RULES } from '../utils/PricingRules';

const getCnpjPrice = (quantity: number) => {
  const tier = PRICING_RULES.cnpj.find((t) => quantity <= t.max);
  return tier ? tier.price : 0;
};

const getComprovacoesPrice = (quantity: number) => {
  const tier = PRICING_RULES.comprovacoes.find((t) => quantity <= t.max);
  return tier ? tier.price : 0;
};

type PriceInput = {
  monthlyOptions: OptionalMonthly;
  implementation: ImplementationCost;
  pricing: PricingType;
};

export const calculatePrice = ({ monthlyOptions, implementation, pricing }: PriceInput) => {
  let extrasMonthly = 0;
  let implementationTotal = 0;

  const { cnpjQuantity = 1, comprovacoes = 1000, basePlanOverride } = monthlyOptions;

  Object.entries(monthlyOptions).forEach(([key, value]) => {
    if (typeof value === 'boolean' && value && key in pricing.monthly) {
      extrasMonthly += pricing.monthly[key as keyof PricingType['monthly']];
    }
  });

  if (!implementation.none) {
    Object.entries(implementation).forEach(([key, value]) => {
      if (typeof value === 'boolean' && value && key in pricing.implementation) {
        implementationTotal += pricing.implementation[key as keyof PricingType['implementation']];
      }
    });
  }

  const cnpjTotal = getCnpjPrice(cnpjQuantity);
  const comprovacoesTotal = getComprovacoesPrice(comprovacoes);

  const baseCalculated = cnpjTotal + comprovacoesTotal;

  const baseMonthly = basePlanOverride ?? baseCalculated;

  const monthly = baseMonthly + extrasMonthly;
  const total = monthly + implementationTotal;

  return {
    monthly,
    implementation: implementationTotal,
    cnpj: cnpjTotal,
    comprovacoes: comprovacoesTotal,
    baseCalculated,
    baseMonthly,
    total,
  };
};
