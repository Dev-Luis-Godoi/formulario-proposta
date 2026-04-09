import type { ImplementationCost } from './ImplementationCost';
import type { OptionalMonthly } from './optionalMonthly';

export type ProposalPayload = {
  company: {
    name: string;
    cnpj: string;
    requester: string;
  };
  proposal: {
    expirationDays: number;
    challenges: string[];
    solutions: string[];
  };
  monthlyOptions: OptionalMonthly;
  implementation: ImplementationCost;
};
