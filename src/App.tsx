import { useState } from 'react';
import FormChallengesSolutions from './forms/FormChallengesSolutions';
import FormCompany from './forms/FormCompany';
import FormPrice from './forms/FormPrice';
import Header from './forms/Header';

import type { OptionalMonthly } from './types/optionalMonthly';
import type { ImplementationCost } from './types/ImplementationCost';
import type { PricingType } from './types/Pricing';

function App() {
  const [options, setOptions] = useState<OptionalMonthly>({
    cnpjQuantity: 1,
    comprovacoes: 1000,
    xmlCollector: false,
    erpIntegrationAccess: false,
    apiIntegrationAccess: false,
    occurrencesModule: false,
    antifraudeModule: false,
    total: 1,
  });

  const [implementation, setImplementation] = useState<ImplementationCost>({
    tutorialTraining: false,
    consultantTraining: false,
    custom: false,
    customDescription: '',
    none: false,
  });
  const [company, setCompany] = useState({
    name: '',
    cnpj: '',
    requester: '',
  });

  const [proposal, setProposal] = useState({
    expirationDays: null as string | null,
    challenges: [] as string[],
    solutions: [] as string[],
  });

  const [pricing, setPricing] = useState<PricingType>({
    planBasic: {
      cnpjQuantity: 100,
      comprovationsQuantity: 100,
      total: 1,
    },
    monthly: {
      xmlCollector: 50,
      erpIntegrationAccess: 100,
      apiIntegrationAccess: 80,
      occurrencesModule: 40,
      antifraudeModule: 120,
    },
    implementation: {
      tutorialTraining: 200,
      consultantTraining: 500,
      custom: 0,
    },
  });

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#eeeeee]">
      <Header />

      <div className="pt-25 pb-5 ">
        <div className="max-w-800 mx-auto px-12">
          <h1 className="text-[24px] font-semibold mb-6">Nova Proposta</h1>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 flex flex-col gap-6">
              <FormCompany
                company={company}
                setCompany={setCompany}
                proposal={proposal}
                setProposal={setProposal}
              />

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <FormChallengesSolutions proposal={proposal} setProposal={setProposal} />
              </div>
            </div>

            <div className="col-span-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <FormPrice
                  options={options}
                  setOptions={setOptions}
                  implementation={implementation}
                  setImplementation={setImplementation}
                  pricing={pricing}
                  setPricing={setPricing}
                  company={company}
                  proposal={proposal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
