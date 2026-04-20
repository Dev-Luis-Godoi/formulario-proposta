import type { Company } from '../types/Company';

type Props = {
  value: Company['name'];
  onChange: (value: string) => void;
};

const CompanysName = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm text-gray-600">Nome Empresa:</label>

      <input
        type="text"
        placeholder="Digite nome da empresa"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default CompanysName;
