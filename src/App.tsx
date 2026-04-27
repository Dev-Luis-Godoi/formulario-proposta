import { useState } from 'react';
import FormChallengesSolutions from './forms/FormChallengesSolutions';
import FormCompany from './forms/FormCompany';
import FormPrice from './forms/FormPrice';
import Header from './forms/Header';
import { DEFAULT_CHALLENGES, DEFAULT_SOLUTIONS } from './utils/DefaultChallengesSolutions';

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
    erpName: 'XXXXXX',
  });

  const [implementation, setImplementation] = useState<ImplementationCost>({
    tutorialTraining: false,
    consultantTraining: false,
    custom: false,
    customDescription: 'XXXXXX',
    none: false,
  });

  const [company, setCompany] = useState({
    name: '',
    cnpj: '',
    requester: '',
  });

  const [proposal, setProposal] = useState({
    expirationDays: null as string | null,
    challenges: [...DEFAULT_CHALLENGES],
    solutions: [...DEFAULT_SOLUTIONS],
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
    <div className="min-h-screen w-full bg-[#eeeeee]">
      <Header />

      <main className="w-full md:max-lg:w-[768px] md:max-lg:min-h-[1458px] mx-auto px-4 md:max-lg:px-[32px] lg:w-full lg:max-w-[1280px] lg:px-12 pt-24 pb-[170px] md:max-lg:pb-[130px] lg:pb-10">
        <div className="w-full max-w-[1280px] mx-auto">
          <h1 className="text-[24px] font-semibold mb-6">Nova Proposta</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <FormCompany
                company={company}
                setCompany={setCompany}
                proposal={proposal}
                setProposal={setProposal}
              />

              <div className="w-full lg:w-[780px] min-h-[471px] bg-white rounded-[16px] p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
                <FormChallengesSolutions proposal={proposal} setProposal={setProposal} />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
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
      </main>
    </div>
  );
}

export default App;
