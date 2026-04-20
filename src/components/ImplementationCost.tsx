import type { ImplementationCost } from '../types/ImplementationCost';

type Props = { value: ImplementationCost; onChange: (value: ImplementationCost) => void };

const ImplementationCosts = ({ value, onChange }: Props) => {
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      customDescription: e.target.value,
    });
  };

  const handleDisabled = (key: keyof ImplementationCost) => {
    if (key === 'none') {
      onChange({
        tutorialTraining: false,
        consultantTraining: false,
        custom: false,
        customDescription: '',
        none: !value.none,
      });
      return;
    }

    onChange({
      ...value,
      none: false,
      [key]: !value[key],
    });
  };

  const options = [
    { key: 'tutorialTraining', label: 'Tutorial de treinamento' },
    { key: 'consultantTraining', label: 'Consultoria de treinamento 1-1' },
    { key: 'custom', label: 'Customização' },
    { key: 'none', label: 'Nenhuma implementação' },
  ] as const;

  return (
    <div>
      <h3 className="mb-4 font-semibold ">Itens de implementação</h3>

      <ul className="w-full text-sm  border border-gray-600 rounded-lg">
        {options.map((option, index) => (
          <li
            key={option.key}
            className={`flex flex-col px-3 ${
              index !== options.length - 1 ? 'border-b border-gray-600' : ''
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={option.key}
                checked={value[option.key]}
                onChange={() => handleDisabled(option.key)}
                disabled={value.none && option.key !== 'none'}
                className="w-4 h-4 border border-gray-400 rounded  focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              />

              <label htmlFor={option.key} className="w-full py-3 ml-2 cursor-pointer ">
                {option.label}
              </label>
            </div>

            {option.key === 'custom' && value.custom && (
              <input
                type="text"
                placeholder="Descreva a customização"
                value={value.customDescription}
                onChange={handleDescriptionChange}
                className="mb-3 ml-6 px-3 py-2 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            {option.key === 'none' && value.none && (
              <p className="ml-6 mb-3 text-sm italic text-gray-400">
                Nenhuma implementação adicional será necessária.
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImplementationCosts;
