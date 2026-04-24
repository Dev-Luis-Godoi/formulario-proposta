import { useState } from 'react';
import type { ImplementationCost } from '../types/ImplementationCost';
import type { PricingType } from '../types/Pricing';
import { X } from 'lucide-react';

type Props = {
  value: ImplementationCost;
  onChange: (value: ImplementationCost) => void;
  pricing: PricingType;
  setPricing: React.Dispatch<React.SetStateAction<PricingType>>;
};

const ImplementationCosts = ({ value, onChange, pricing, setPricing }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<keyof PricingType['implementation'] | null>(null);
  const [tempValue, setTempValue] = useState(0);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      customDescription: e.target.value,
    });
  };
  const handleToggle = (key: keyof ImplementationCost) => {
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

  const handleOpenModal = (key: keyof PricingType['implementation']) => {
    setEditingKey(key);
    setTempValue(pricing.implementation[key]);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!editingKey) return;

    setPricing({
      ...pricing,
      implementation: {
        ...pricing.implementation,
        [editingKey]: tempValue,
      },
    });

    setIsOpen(false);
    setEditingKey(null);
  };

  const options = [
    { key: 'tutorialTraining', label: 'Treinamento por vídeo tutorial' },
    { key: 'consultantTraining', label: 'Treinamento 1:1 com consultor' },
    { key: 'custom', label: 'Customização' },
    { key: 'none', label: 'Nenhuma implementação' },
  ] as const;

  return (
    <div>
      <h3 className="mb-4 font-semibold text-[#26A86E]">Custo de Implantação</h3>

      <ul className="w-full text-sm  border-b">
        {options.map((option, index) => (
          <li
            key={option.key}
            className={`flex flex-col  ${index !== options.length - 1 ? ' border-gray-600' : ''}`}
          >
            <label className="flex items-center gap-3  w-full justify-between cursor-pointer py-3  ">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={value.none ? option.key === 'none' : value[option.key]}
                    onChange={() => handleToggle(option.key)}
                    className="sr-only"
                  />

                  <div
                    className={`w-11 h-6 rounded-full transition ${
                      value[option.key] ? 'bg-[#26A86E]' : 'bg-gray-300'
                    }`}
                  />

                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                      value[option.key] ? 'translate-x-5' : ''
                    }`}
                  />
                </div>

                <span>{option.label}</span>
              </div>

              {option.key !== 'none' && (
                <button
                  type="button"
                  onClick={() => handleOpenModal(option.key)}
                  className="px-4 py-1.5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] flex items-center gap-1 min-w-[90px] justify-center hover:bg-[#ECECEC] transition"
                >
                  <span className="text-gray-400 text-xs">R$</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {pricing.implementation[option.key].toFixed(2).replace('.', ',')}
                  </span>
                </button>
              )}
            </label>

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

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="relative bg-white rounded-xl p-6 w-[350px] flex flex-col gap-4 shadow-lg">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold">Editar valor da implementação</h2>

            <input
              type="number"
              min={0}
              value={tempValue}
              onChange={(e) => setTempValue(Number(e.target.value))}
              className="px-3 py-2 border rounded-md"
              autoFocus
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-200 rounded-md">
                Cancelar
              </button>

              <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded-md">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImplementationCosts;
