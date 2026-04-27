import CNPJInput from '../components/Cnpj';
import CompanysName from '../components/CompanyName';
import ExpirationsDate from '../components/ExpirationDate';
import RequestersName from '../components/RequesterName';
import type { Company } from '../types/Company';
import type { Proposal } from '../types/Proposal';
import FormSectionHeader from '../utils/SectionHeader';

type Props = {
  company: Company;
  proposal: Proposal;
  setCompany: React.Dispatch<React.SetStateAction<Company>>;
  setProposal: React.Dispatch<React.SetStateAction<Proposal>>;
};
const FormCompany = ({ company, proposal, setCompany, setProposal }: Props) => {
  return (
    <form className="w-full md:max-lg:w-[704px] lg:w-[780px] min-h-[302px] bg-white rounded-[16px] p-4 sm:p-6 md:max-lg:p-[24px] lg:p-8 flex flex-col gap-6">
      <FormSectionHeader step={1} title="Identificação do Lead" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6">
          <CNPJInput
            value={company.cnpj}
            onChange={(cnpj) => setCompany((prev) => ({ ...prev, cnpj }))}
          />
        </div>

        <div className="md:col-span-6">
          <CompanysName
            value={company.name}
            onChange={(name) => setCompany((prev) => ({ ...prev, name }))}
          />
        </div>

        <div className="md:col-span-6">
          <RequestersName
            value={company.requester}
            onChange={(requester) => setCompany((prev) => ({ ...prev, requester }))}
          />
        </div>

        <div className="md:col-span-6">
          <ExpirationsDate
            value={proposal.expirationDays}
            onChange={(date) =>
              setProposal((prev) => ({
                ...prev,
                expirationDays: date,
              }))
            }
          />
        </div>
      </div>
    </form>
  );
};

export default FormCompany;
