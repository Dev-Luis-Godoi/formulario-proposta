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
      <label htmlFor="cnpj" className="text-white">
        CNPJ:
      </label>

      <input
        id="cnpj"
        type="text"
        placeholder="00.000.000/0000-00"
        value={value}
        onChange={handleChange}
        className="px-3 py-2 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CNPJInput;
