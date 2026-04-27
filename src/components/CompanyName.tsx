import type { Company } from '../types/Company';

type Props = {
  value: Company['name'];
  onChange: (value: string) => void;
};

const CompanysName = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-inter font-medium text-size-[13px] leading-none tracking-normal text-[#5C6164] pb-1">
        Razão Social:
      </label>

      <input
        type="text"
        placeholder="Nome da empresa"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#FAFAFA] text-[#A3A3A3] w-full md:max-lg:w-[318px] lg:w-[352px] h-[48px] px-[16px] rounded-[12px] border border-[#E5E5E5] opacity-100 rotate-0 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default CompanysName;
