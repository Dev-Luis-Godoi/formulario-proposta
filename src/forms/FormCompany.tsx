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
    <form className="bg-white p-8 rounded-2xl flex flex-col gap-6">
      <FormSectionHeader step={1} title="Identificação do Lead" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <CNPJInput
            value={company.cnpj}
            onChange={(cnpj) => setCompany((prev) => ({ ...prev, cnpj }))}
          />
        </div>

        <div className="col-span-6">
          <CompanysName
            value={company.name}
            onChange={(name) => setCompany((prev) => ({ ...prev, name }))}
          />
        </div>

        <div className="col-span-6">
          <RequestersName
            value={company.requester}
            onChange={(requester) => setCompany((prev) => ({ ...prev, requester }))}
          />
        </div>

        <div className="col-span-6">
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
