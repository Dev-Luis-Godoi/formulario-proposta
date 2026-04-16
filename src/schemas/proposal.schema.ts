import { z } from 'zod';
import { isValidCNPJ } from '../utils/ValidateCnpj';

export const proposalSchema = z.object({
  company: z.object({
    name: z.string().min(1, 'O nome da empresa é obrigatório'),
    requester: z.string().min(1, 'O nome do solicitante é obrigatório'),
    cnpj: z.string().refine(isValidCNPJ, {
      message: 'CNPJ inválido',
    }),
  }),

  proposal: z.object({
    expiration: z.number().min(1, 'O prazo de validade deve ser maior que 0'),
    challenges: z.array(z.string()).min(1, 'Pelo menos um desafio deve ser adicionado'),
    solutions: z.array(z.string()).min(1, 'Pelo menos uma solução deve ser adicionada'),
    cnpjQuantity: z.number().min(1, 'Quantidade de CNPJs inválida'),
  }),

  monthlyOptions: z.object({
    cnpjQuantity: z.number().min(1, 'Quantidade inválida'),
    xmlCollector: z.boolean(),
    erpIntegrationAccess: z.boolean(),
    apiIntegrationAccess: z.boolean(),
    occurrencesModule: z.boolean(),
    antifraudeModule: z.boolean(),
  }),

  implementation: z.object({
    tutorialTraining: z.boolean(),
    consultantTraining: z.boolean(),
    custom: z.boolean(),
    customDescription: z.string().optional(),
    none: z.boolean(),
  }),
});
