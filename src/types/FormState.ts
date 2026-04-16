import type { ImplementationCost } from './ImplementationCost';
import type { OptionalMonthly } from './optionalMonthly';

export type FormState = {
  nameCompany: string;
  cnpj: string;
  requesterName: string;
  challenges: string[];
  solutions: string[];
  expiration: number | null;
  options: OptionalMonthly;
  implementation: ImplementationCost;
};
