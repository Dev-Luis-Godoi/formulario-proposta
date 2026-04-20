import { useState } from 'react';
import FormChallengesSolutions from './forms/FormChallengesSolutions';
import FormCompany from './forms/FormCompany';
import FormPrice from './forms/FormPrice';
import Header from './forms/Header';
import type { OptionalMonthly } from './types/optionalMonthly';
import type { ImplementationCost } from './types/ImplementationCost';

function App() {
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

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#eeeeee]">
      <Header />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-12">
          <h1 className="text-[24px] font-semibold mb-6">Nova Proposta</h1>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 flex flex-col gap-6">
              <FormCompany />

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <FormChallengesSolutions />
              </div>
            </div>

            <div className="col-span-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <FormPrice
                  options={options}
                  setOptions={setOptions}
                  implementation={implementation}
                  setImplementation={setImplementation}
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
