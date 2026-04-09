import type { Company } from '../types/Company';

type Props = {
  value: Company['name'];
  onChange: (value: string) => void;
};
const CompanysName = ({ value, onChange }: Props) => {
  return (
    <div>
      <label className="text-[#ffffff] flex w-full">Nome Empresa:</label>
      <input
        type="text"
        placeholder="Digite nome da empresa"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 rounded-md border outline-none "
      />
    </div>
  );
};

export default CompanysName;
