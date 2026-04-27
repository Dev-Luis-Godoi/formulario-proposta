import { useState } from 'react';
import { createPortal } from 'react-dom';
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

  const [isErpModalOpen, setIsErpModalOpen] = useState(false);
  const [tempErpName, setTempErpName] = useState(value.erpName ?? 'XXXXXX');

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

  const handleCloseModal = () => {
    setIsOpen(false);
    setFieldEditing(null);
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

    handleCloseModal();
  };

  const handleOpenErpModal = () => {
    setTempErpName(value.erpName ?? 'XXXXXX');
    setIsErpModalOpen(true);
  };

  const handleCloseErpModal = () => {
    setIsErpModalOpen(false);
  };

  const handleSaveErpName = () => {
    onChange({
      ...value,
      erpName: tempErpName.trim() || 'XXXXXX',
    });

    handleCloseErpModal();
  };

  const options = [
    { key: 'xmlCollector', label: 'Sistema coletor de XML' },
    { key: 'erpIntegrationAccess', label: 'Integração com ERP' },
    { key: 'apiIntegrationAccess', label: 'Acesso à API de integração' },
    { key: 'occurrencesModule', label: 'Módulo de ocorrências' },
    { key: 'antifraudeModule', label: 'Módulo antifraude para canhoto' },
  ] as const;

  const priceModal =
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
        onClick={handleCloseModal}
      >
        <div
          className="relative flex min-h-[227px] w-[300px] flex-col gap-[16px] rounded-[20px] bg-white p-[24px] opacity-100 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleCloseModal}
            className="absolute right-[24px] top-[24px] text-gray-400 transition hover:text-gray-700"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>

          <h2 className="pr-8 font-inter text-[20px] font-bold leading-none tracking-normal text-[#2A2D2E]">
            {fieldEditing ? modalTitles[fieldEditing] : 'Editar valor'}
          </h2>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter text-[13px] font-medium leading-none tracking-normal text-[#5C6164]">
              Valor
            </label>

            <input
              type="number"
              min={1}
              value={tempValue}
              onChange={(e) => setTempValue(Number(e.target.value))}
              className="h-[48px] w-full rounded-[12px] border-2 border-[#26A86E] px-[16px] font-inter text-[13px] font-medium leading-none tracking-normal text-[#2A2D2E] outline-none"
              autoFocus
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="h-[48px] w-full rounded-[12px] bg-[#26A86E] font-inter text-[15px] font-semibold leading-none tracking-normal text-white transition hover:bg-[#1F8A5A]"
          >
            Salvar
          </button>
        </div>
      </div>,
      document.body,
    );

  const erpModal =
    isErpModalOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
        onClick={handleCloseErpModal}
      >
        <div
          className="relative flex min-h-[227px] w-[300px] flex-col gap-[16px] rounded-[20px] bg-white p-[24px] opacity-100 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleCloseErpModal}
            className="absolute right-[24px] top-[24px] text-gray-400 transition hover:text-gray-700"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>

          <h2 className="pr-8 font-inter text-[20px] font-bold leading-none tracking-normal text-[#2A2D2E]">
            Editar Campo
          </h2>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter text-[13px] font-medium leading-none tracking-normal text-[#5C6164]">
              Nome do ERP
            </label>

            <input
              type="text"
              value={tempErpName}
              onChange={(e) => setTempErpName(e.target.value)}
              className="h-[48px] w-full rounded-[12px] border-2 border-[#26A86E] px-[16px] font-inter text-[13px] font-medium leading-none tracking-normal text-[#2A2D2E] outline-none"
              autoFocus
            />
          </div>

          <button
            type="button"
            onClick={handleSaveErpName}
            className="h-[48px] w-full rounded-[12px] bg-[#26A86E] font-inter text-[15px] font-semibold leading-none tracking-normal text-white transition hover:bg-[#1F8A5A]"
          >
            Salvar
          </button>
        </div>
      </div>,
      document.body,
    );

  return (
    <div>
      <h3 className="mb-4 h-[16px] font-inter text-[13px] font-semibold leading-none tracking-normal text-[#26A86E]">
        Custo Mensal
      </h3>

      <ul className="flex w-full flex-col gap-[10px] pt-[8px] pb-[12px] text-sm">
        <li className="flex min-h-[32px] w-full items-center justify-between gap-[8px]">
          <p className="min-w-0 flex-1 font-inter text-[13px] font-normal leading-none tracking-normal text-[#2A2D2E]">
            Plano básico (
            <button
              type="button"
              onClick={() => handleOpenModal('cnpj')}
              className="text-orange-600 underline"
            >
              {value.cnpjQuantity}
            </button>{' '}
            CNPJ, até{' '}
            <button
              type="button"
              onClick={() => handleOpenModal('comprovacoes')}
              className="text-orange-600 underline"
            >
              {value.comprovacoes.toLocaleString()}
            </button>{' '}
            comprovações/mês)
          </p>

          <div className="shrink-0">
            <PriceTag value={basePlanTotal} onClick={() => handleOpenModal('total')} />
          </div>
        </li>

        {options.map((option) => (
          <li key={option.key}>
            <label className="flex min-h-[32px] w-full cursor-pointer items-center justify-between gap-[8px]">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="relative shrink-0">
                  <input
                    type="checkbox"
                    checked={value[option.key]}
                    onChange={() => handleToggle(option.key)}
                    className="sr-only"
                  />

                  <div
                    className={`h-6 w-11 rounded-full transition ${
                      value[option.key] ? 'bg-[#26A86E]' : 'bg-gray-300'
                    }`}
                  />

                  <div
                    className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                      value[option.key] ? 'translate-x-5' : ''
                    }`}
                  />
                </div>

                <span className="min-w-0 flex-1 font-inter text-[13px] font-normal leading-none tracking-normal text-[#5C6164]">
                  {option.label}

                  {option.key === 'erpIntegrationAccess' && (
                    <>
                      {' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenErpModal();
                        }}
                        className="font-inter text-[13px] font-normal leading-none tracking-normal text-orange-600 underline"
                      >
                        {value.erpName || 'XXXXXX'}
                      </button>
                    </>
                  )}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(option.key);
                }}
                className="flex shrink-0 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] px-4 py-1.5 transition hover:bg-[#ECECEC]"
              >
                <span className="font-inter text-xs font-normal text-gray-400">R$</span>

                <span className="font-inter text-sm font-semibold text-gray-700">
                  {pricing.monthly[option.key].toFixed(2).replace('.', ',')}
                </span>
              </button>
            </label>
          </li>
        ))}
      </ul>

      {priceModal}
      {erpModal}
    </div>
  );
};

export default OptionsMonthly;
