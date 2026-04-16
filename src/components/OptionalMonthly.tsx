import type { OptionalMonthly } from '../types/optionalMonthly';

type Props = {
  value: OptionalMonthly;
  onChange: (value: OptionalMonthly) => void;
};

const OptionsMonthly = ({ value, onChange }: Props) => {
  const handleToggle = (key: keyof OptionalMonthly) => {
    if (typeof value[key] === 'boolean') {
      onChange({
        ...value,
        [key]: !value[key],
      });
    }
  };

  const options: {
    key: keyof Omit<OptionalMonthly, 'cnpjQuantity' | 'comprovacoes'>;
    label: string;
  }[] = [
    { key: 'xmlCollector', label: 'Sistema coletor de XML' },
    { key: 'erpIntegrationAccessAccess', label: 'Integração com ERP' },
    { key: 'apiIntegrationAccess', label: 'Acesso à API' },
    { key: 'occurrencesModule', label: 'Módulo de ocorrências' },
    { key: 'antifraudeModule', label: 'Módulo antifraude' },
  ];
  return (
    <div>
      <h3 className="mb-4 font-semibold text-white">Itens mensais</h3>

      <ul className=" text-sm bg-gray-800 border border-gray-600 rounded-lg">
        <div className="w-full px-3 py-2 border-b border-gray-600 flex items-center justify-between text-white ">
          Quantidade CNPJ
          <input
            type="number"
            min={1}
            value={value.cnpjQuantity}
            onChange={(e) =>
              onChange({
                ...value,
                cnpjQuantity: Number(e.target.value),
              })
            }
            className="bg-gray-800 border border-gray-600 rounded-md p-1 ml-3 w-16"
          />
        </div>
        <div className=" px-3 py-2 border-b border-gray-600 flex items-center justify-between text-white">
          Quantidade de Comprovações
          <input
            type="number"
            min={1}
            value={value.comprovacoes}
            onChange={(e) =>
              onChange({
                ...value,
                comprovacoes: Number(e.target.value),
              })
            }
            className="hover:bg-gray-700 bg-gray-800 border border-gray-600 rounded-md p-1 ml-3 w-20"
          />
        </div>
        {options.map((option, index) => (
          <li
            key={option.key}
            className={`flex items-center px-3 ${
              index !== options.length - 1 ? 'border-b border-gray-600' : ''
            }`}
          >
            <input
              type="checkbox"
              id={option.key}
              checked={value[option.key]}
              onChange={() => handleToggle(option.key)}
              className="w-4 h-4 border border-gray-400 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor={option.key} className="w-full py-3 ml-2 cursor-pointer text-white">
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsMonthly;
