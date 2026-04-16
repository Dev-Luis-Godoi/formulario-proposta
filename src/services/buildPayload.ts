import type { FormState } from '../types/FormState';
import type { ProposalPayload } from '../types/Payload';

export const buildPayload = (state: FormState): ProposalPayload => ({
  company: {
    name: state.nameCompany,
    cnpj: state.cnpj,
    requester: state.requesterName,
  },
  proposal: {
    expirationDays: state.expiration ?? 30,
    challenges: state.challenges,
    solutions: state.solutions,
  },
  monthlyOptions: state.options,
  implementation: state.implementation,
});
