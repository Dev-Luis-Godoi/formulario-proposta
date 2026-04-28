import type { OptionalMonthly } from '../types/optionalMonthly';
import type { ImplementationCost } from '../types/ImplementationCost';
import OptionsMonthly from '../components/OptionalMonthly';
import ImplementationCosts from '../components/ImplementationCost';
import Costs from '../components/Cost';
import { calculatePrice } from '../services/calculatePrice';
import type { PricingType } from '../types/Pricing';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ProposalPDF from '../pdf/ProposalPDF';
import type { ProposalPayload } from '../types/Payload';
import type { Company } from '../types/Company';
import type { Proposal } from '../types/Proposal';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

type Props = {
  options: OptionalMonthly;
  setOptions: (value: OptionalMonthly) => void;
  implementation: ImplementationCost;
  setImplementation: (value: ImplementationCost) => void;
  pricing: PricingType;
  setPricing: React.Dispatch<React.SetStateAction<PricingType>>;

  company: Company;
  proposal: Proposal;
};

const FormPrice = ({
  options,
  setOptions,
  implementation,
  setImplementation,
  pricing,
  setPricing,
  company,
  proposal,
}: Props) => {
  const price = calculatePrice({
    monthlyOptions: options,
    implementation,
    pricing,
  });

  const payload: ProposalPayload = {
    company,
    proposal,
    monthlyOptions: options,
    implementation,
  };
  console.log(payload);

  const [pdfData, setPdfData] = useState<ProposalPayload | null>(null);
  const [pdfPrice, setPdfPrice] = useState<typeof price | null>(null);
  const [pdfKey, setPdfKey] = useState(0);
  const handlePreparePDF = () => {
    setPdfData(payload);
    setPdfPrice(price);
    setPdfKey((prev) => prev + 1);
  };

  const formatFileName = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  };

  return (
    <div className="flex w-full flex-col gap-[14px]">
      <div className="w-full md:max-lg:w-[704px] md:max-lg:min-h-[394px] lg:w-[380px] lg:min-h-[527px] bg-white rounded-[16px] p-[24px] opacity-100 rotate-0">
        <div className="mb-6 flex items-center gap-3">
          <div className="w-[28px] h-[28px] bg-[#26A86E] rounded-[14px] flex items-center justify-center">
            <span className="font-inter text-[14px] font-bold leading-none tracking-normal text-white">
              3
            </span>
          </div>

          <h1 className="font-inter text-[16px] font-[600] leading-none text-[#2A2D2E]">Custos</h1>
        </div>

        <div className="grid grid-cols-1 md:max-lg:grid-cols-[1fr_1px_1fr] lg:grid-cols-1 gap-6">
          <div>
            <OptionsMonthly
              value={options}
              onChange={setOptions}
              pricing={pricing}
              setPricing={setPricing}
              price={price}
            />
          </div>

          <div className="hidden md:max-lg:block w-[1px] h-full bg-[#F5F5F5]" />

          <div>
            <ImplementationCosts
              value={implementation}
              onChange={setImplementation}
              pricing={pricing}
              setPricing={setPricing}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-40 w-screen min-h-[142px] bg-gradient-to-br from-[#26A86E] to-[#1F8A5A] pt-[14px] pr-[24px] pb-[20px] pl-[24px] opacity-100 rotate-0 md:max-lg:h-[100px] md:max-lg:min-h-[100px] md:max-lg:py-[16px] lg:static lg:w-[380px] lg:min-h-[169px] lg:rounded-[16px] lg:p-[24px]">
        <Costs
          price={price}
          action={
            !pdfData || !pdfPrice ? (
              <button
                type="button"
                onClick={handlePreparePDF}
                className="h-[46px] w-full rounded-[12px] bg-white font-inter text-[15px] font-semibold leading-none tracking-normal text-[#26A86E] transition hover:bg-[#ECECEC] focus:ring-2 cursor-pointer md:max-lg:h-[56px] md:max-lg:w-[240px] lg:h-[56px] lg:w-full"
              >
                Gerar Proposta
              </button>
            ) : (
              <PDFDownloadLink
                key={pdfKey}
                document={<ProposalPDF data={pdfData} price={pdfPrice} pricing={pricing} />}
                fileName={`proposta_${formatFileName(pdfData.company.name || 'transporte+')}.pdf`}
                className="w-full md:max-lg:w-[240px] lg:w-full"
              >
                {({ loading }) => (
                  <button
                    type="button"
                    disabled={loading}
                    className="flex h-[46px] w-full items-center justify-center rounded-[12px] bg-white font-inter text-[15px] font-semibold leading-none tracking-normal text-[#26A86E] transition hover:bg-[#ECECEC] focus:ring-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 md:max-lg:h-[56px] lg:h-[56px]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {loading && <Loader2 size={18} className="animate-spin" />}
                      {loading ? 'Gerando proposta...' : 'Baixar Proposta'}
                    </span>
                  </button>
                )}
              </PDFDownloadLink>
            )
          }
        />
      </div>
    </div>
  );
};

export default FormPrice;
