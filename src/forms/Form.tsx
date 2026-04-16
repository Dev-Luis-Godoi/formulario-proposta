import React, { useMemo, useState } from 'react';
import CNPJInput from '../components/Cnpj';
import CompanysName from '../components/CompanyName';
import RequestersName from '../components/RequesterName';
import Challenges from '../components/Challenge';
import Solutions from '../components/Solution';
import ExpirationsDate from '../components/ExpirationDate';
import OptionsMonthly from '../components/OptionalMonthly';
import type { OptionalMonthly } from '../types/optionalMonthly';
import ImplementationCosts from '../components/ImplementationCost';
import type { ImplementationCost } from '../types/ImplementationCost';
import type { ProposalPayload } from '../types/Payload';
import { buildPayload } from '../services/buildPayload';
import { proposalSchema } from '../schemas/proposal.schema';
import z from 'zod';
import Costs from '../components/Cost';
import { calculatePrice } from '../services/calculatePrice';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ProposalPDF from '../pdf/ProposalPDF';

const Forms = () => {
  const [nameCompany, setNameCompany] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [requesterName, setRequesterName] = useState<string>('');
  const [challenges, setChallenges] = useState<string[]>([]);
  const [solutions, setSolutions] = useState<string[]>([]);
  const [expiration, setExpiration] = useState<number | null>(null);

  const [options, setOptions] = useState<OptionalMonthly>({
    xmlCollector: false,
    erpIntegrationAccessAccess: false,
    apiIntegrationAccess: false,
    occurrencesModule: false,
    antifraudeModule: false,
    cnpjQuantity: 1,
    comprovacoes: 1000,
  });

  const [implementation, setImplementation] = useState<ImplementationCost>({
    tutorialTraining: false,
    consultantTraining: false,
    custom: false,
    customDescription: '',
    none: false,
  });

  const payload: ProposalPayload = buildPayload({
    nameCompany,
    cnpj,
    requesterName,
    challenges,
    solutions,
    expiration,
    options,
    implementation,
  });

  const price = useMemo(() => {
    return calculatePrice(payload);
  }, [payload]);

  const gerarProposta = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('PAYLOAD:', payload);
    const result = proposalSchema.safeParse(payload);

    if (!result.success) {
      console.log(z.treeifyError(result.error));

      console.error('Erro de validação');
      return;
    }

    console.log('Payload:', payload);
    console.log('Preço final:', price);

    alert('Proposta gerada com sucesso!');
  };

  return (
    <form onSubmit={gerarProposta} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="md:col-span-2">
        <CompanysName value={nameCompany} onChange={setNameCompany} />
      </div>

      <div className="md:col-span-2">
        <CNPJInput value={cnpj} onChange={setCnpj} />
      </div>

      <div className="md:col-span-2">
        <RequestersName value={requesterName} onChange={setRequesterName} />
      </div>

      <div className="md:col-span-2">
        <Challenges values={challenges} onChange={setChallenges} />
      </div>

      <div className="md:col-span-2">
        <Solutions values={solutions} onChange={setSolutions} />
      </div>

      <div>
        <ExpirationsDate value={expiration} onChange={setExpiration} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-2 items-start md:col-span-2">
        <div className="bg-gray-900 p-4 rounded-lg h-full flex flex-col justify-between">
          <OptionsMonthly value={options} onChange={setOptions} />
        </div>

        <div className="bg-gray-900 p-4 rounded-lg h-full flex flex-col justify-between">
          <ImplementationCosts value={implementation} onChange={setImplementation} />
        </div>
      </div>

      <div className="md:col-span-2">
        <Costs price={price} />
      </div>

      <div className="md:col-span-2">
        {/* <button
          type="submit"
          className="w-full p-4 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Gerar proposta
        </button> */}
        <PDFDownloadLink
          document={<ProposalPDF data={payload} price={price} />}
          fileName="proposta.pdf"
        >
          {({ loading }) => (loading ? 'Gerando proposta...' : 'Gerar Proposta')}
        </PDFDownloadLink>
      </div>
    </form>
  );
};

export default Forms;
