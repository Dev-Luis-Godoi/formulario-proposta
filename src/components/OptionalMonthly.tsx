import { useState } from 'react';
import type { OptionalMonthly } from '../types/optionalMonthly';
import type { PricingType } from '../types/Pricing';
import { X } from 'lucide-react';
import PriceTag from '../utils/PriceTag';

type Props = {
  value: OptionalMonthly;
  onChange: (value: OptionalMonthly) => void;
  pricing: PricingType;
  setPricing: React.Dispatch<React.SetStateAction<PricingType>>;
  price: {
    monthly: number;
    cnpj: number;
    comprovacoes: number;
  };
};

type FieldEditing = 'cnpj' | 'comprovacoes' | keyof PricingType['monthly'] | 'total' | null;

const modalTitles: Record<string, string> = {
  cnpj: 'Quantidade de CNPJ',
  comprovacoes: 'Comprovações por mês',
  total: 'Total do plano básico',
  xmlCollector: 'Sistema coletor de XML',
  erpIntegrationAccess: 'Integração com ERP',
  apiIntegrationAccess: 'Acesso à API',
  occurrencesModule: 'Módulo de ocorrências',
  antifraudeModule: 'Módulo antifraude',
};

const OptionsMonthly = ({ value, onChange, pricing, setPricing, price }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fieldEditing, setFieldEditing] = useState<FieldEditing>(null);
  const [tempValue, setTempValue] = useState<number>(0);

  const basePlanCalculated = price.cnpj + price.comprovacoes;

  const basePlanTotal = value.basePlanOverride ?? basePlanCalculated;

  const handleToggle = (key: keyof OptionalMonthly) => {
    if (typeof value[key] === 'boolean') {
      onChange({
        ...value,
        [key]: !value[key],
      });
    }
  };

  const handleOpenModal = (field: FieldEditing) => {
    setFieldEditing(field);

    if (field === 'cnpj') {
      setTempValue(value.cnpjQuantity);
    } else if (field === 'comprovacoes') {
      setTempValue(value.comprovacoes);
    } else if (field === 'total') {
      setTempValue(basePlanTotal);
    } else if (field) {
      setTempValue(pricing.monthly[field]);
    }

    setIsOpen(true);
  };

  const handleSave = () => {
    if (fieldEditing === 'cnpj') {
      onChange({
        ...value,
        cnpjQuantity: tempValue || 1,
      });
    } else if (fieldEditing === 'comprovacoes') {
      onChange({
        ...value,
        comprovacoes: tempValue || 1000,
      });
    } else if (fieldEditing === 'total') {
      onChange({
        ...value,
        basePlanOverride: tempValue,
      });
    } else if (fieldEditing) {
      setPricing({
        ...pricing,
        monthly: {
          ...pricing.monthly,
          [fieldEditing]: tempValue,
        },
      });
    }

    setIsOpen(false);
    setFieldEditing(null);
  };

  const options = [
    { key: 'xmlCollector', label: 'Sistema coletor de XML' },
    { key: 'erpIntegrationAccess', label: 'Integração com ERP' },
    { key: 'apiIntegrationAccess', label: 'Acesso à API de integração' },
    { key: 'occurrencesModule', label: 'Módulo de ocorrências' },
    { key: 'antifraudeModule', label: 'Módulo antifraude para canhoto' },
  ] as const;

  return (
    <div>
      <h3 className="mb-4 font-semibold text-[#26A86E]">Custo Mensal</h3>

      <ul className="text-sm">
        <div className="w-full py-2 flex items-center justify-between">
          <p>
            Plano básico (
            <button
              type="button"
              onClick={() => handleOpenModal('cnpj')}
              className="underline text-orange-600"
            >
              {value.cnpjQuantity}
            </button>{' '}
            CNPJ, até{' '}
            <button
              type="button"
              onClick={() => handleOpenModal('comprovacoes')}
              className="underline text-orange-600"
            >
              {value.comprovacoes.toLocaleString()}
            </button>{' '}
            comprovações/mês)
          </p>

          <PriceTag value={basePlanTotal} onClick={() => handleOpenModal('total')} />
        </div>

        {options.map((option, index) => (
          <li
            key={option.key}
            className={`${index !== options.length - 1 ? 'border-gray-200' : ''}`}
          >
            <label className="flex items-center gap-3 w-full cursor-pointer py-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={value[option.key]}
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

              <span className="flex-1">{option.label}</span>

              <button
                type="button"
                onClick={() => handleOpenModal(option.key)}
                className="px-4 py-1.5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] flex items-center gap-1 min-w-[90px] justify-center hover:bg-[#ECECEC] transition"
              >
                <span className="text-gray-400 text-xs">R$</span>
                <span className="text-sm font-semibold text-gray-700">
                  {pricing.monthly[option.key].toFixed(2).replace('.', ',')}
                </span>
              </button>
            </label>
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

            <h2 className="text-lg font-semibold">
              {fieldEditing ? modalTitles[fieldEditing] : 'Editar valor'}
            </h2>

            <input
              type="number"
              min={1}
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

export default OptionsMonthly;
