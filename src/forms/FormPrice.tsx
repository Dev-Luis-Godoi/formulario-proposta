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
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
          3
        </div>

        <h1 className="text-[20px] font-semibold text-gray-800">Custo</h1>
      </div>

      <div className="border-b">
        <OptionsMonthly
          value={options}
          onChange={setOptions}
          pricing={pricing}
          setPricing={setPricing}
          price={price}
        />
      </div>

      <div>
        <ImplementationCosts
          value={implementation}
          onChange={setImplementation}
          pricing={pricing}
          setPricing={setPricing}
        />
      </div>

      <div>
        <Costs
          price={price}
          action={
            <PDFDownloadLink
              document={<ProposalPDF data={payload} price={price} />}
              fileName="proposta.pdf"
            >
              {({ loading }) => (
                <button className="w-full mt-3 bg-white text-green-600 py-2 rounded font-bold focus:ring-2 hover:bg-[#ECECEC] transition cursor-pointer">
                  {loading ? 'Gerando...' : 'Gerar Proposta'}
                </button>
              )}
            </PDFDownloadLink>
          }
        ></Costs>
      </div>
    </div>
  );
};

export default FormPrice;
