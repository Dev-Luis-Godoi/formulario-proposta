import { useState } from 'react';
import CNPJInput from '../components/Cnpj';
import CompanysName from '../components/CompanyName';
import RequestersName from '../components/RequesterName';

import ExpirationsDate from '../components/ExpirationDate';

const FormCompany = () => {
  const [nameCompany, setNameCompany] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [requesterName, setRequesterName] = useState<string>('');
  const [expiration, setExpiration] = useState<string | null>(null);

  // const payload: ProposalPayload = buildPayload({
  //   nameCompany,
  //   cnpj,
  //   requesterName,
  //   challenges,
  //   solutions,
  //   expiration,
  //   options,
  //   implementation,
  // });

  return (
    <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
          1
        </div>

        <h1 className="text-[20px] font-semibold text-gray-800">Identificação do Lead</h1>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <CNPJInput value={cnpj} onChange={setCnpj} />
        </div>
        <div className="col-span-6">
          <CompanysName value={nameCompany} onChange={setNameCompany} />
        </div>

        <div className="col-span-6">
          <RequestersName value={requesterName} onChange={setRequesterName} />
        </div>

        <div className="col-span-6">
          <ExpirationsDate value={expiration} onChange={setExpiration} />
        </div>
      </div>
    </form>
  );
};

export default FormCompany;
