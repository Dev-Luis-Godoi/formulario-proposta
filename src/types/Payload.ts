import type { Company } from './Company';
import type { Proposal } from './Proposal';
import type { OptionalMonthly } from './optionalMonthly';
import type { ImplementationCost } from './ImplementationCost';

export type ProposalPayload = {
  company: Company;
  proposal: Proposal;
  monthlyOptions: OptionalMonthly;
  implementation: ImplementationCost;
};
