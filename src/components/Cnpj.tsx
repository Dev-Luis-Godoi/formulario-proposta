type Props = {
  value: string;
  onChange: (value: string) => void;
};
const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18);
};
const CNPJInput = ({ value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    onChange(formatted);
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="cnpj"
        className="font-inter font-medium text-size-[13px] leading-none tracking-normal text-[#5C6164] pb-1"
      >
        CNPJ:
      </label>

      <input
        id="cnpj"
        type="text"
        placeholder="00.000.000/0000-00"
        value={value}
        onChange={handleChange}
        className="bg-[#FAFAFA] text-[#A3A3A3] w-full md:max-lg:w-[318px] lg:w-[352px] h-[48px] px-[16px] rounded-[12px] border border-[#E5E5E5] opacity-100 rotate-0 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default CNPJInput;
