import { useState } from 'react';
import { createPortal } from 'react-dom';
import type { ImplementationCost } from '../types/ImplementationCost';
import type { PricingType } from '../types/Pricing';
import { X } from 'lucide-react';

type Props = {
  value: ImplementationCost;
  onChange: (value: ImplementationCost) => void;
  pricing: PricingType;
  setPricing: React.Dispatch<React.SetStateAction<PricingType>>;
};

const modalTitles: Record<keyof PricingType['implementation'], string> = {
  tutorialTraining: 'Treinamento por vídeo tutorial',
  consultantTraining: 'Treinamento 1:1 com consultor',
  custom: 'Customização',
};

const ImplementationCosts = ({ value, onChange, pricing, setPricing }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<keyof PricingType['implementation'] | null>(null);
  const [tempValue, setTempValue] = useState(0);

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [tempCustomDescription, setTempCustomDescription] = useState(
    value.customDescription || 'XXXXXX',
  );

  const handleToggle = (key: keyof PricingType['implementation']) => {
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

  const handleCloseModal = () => {
    setIsOpen(false);
    setEditingKey(null);
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

    handleCloseModal();
  };

  const handleOpenCustomModal = () => {
    setTempCustomDescription(value.customDescription || 'XXXXXX');
    setIsCustomModalOpen(true);
  };

  const handleCloseCustomModal = () => {
    setIsCustomModalOpen(false);
  };

  const handleSaveCustomDescription = () => {
    onChange({
      ...value,
      customDescription: tempCustomDescription.trim() || 'XXXXXX',
    });

    handleCloseCustomModal();
  };

  const options = [
    { key: 'tutorialTraining', label: 'Treinamento por vídeo tutorial' },
    { key: 'consultantTraining', label: 'Treinamento 1:1 com consultor' },
    { key: 'custom', label: 'Customização: ' },
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
            {editingKey ? modalTitles[editingKey] : 'Editar valor'}
          </h2>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter text-[13px] font-medium leading-none tracking-normal text-[#5C6164]">
              Valor
            </label>

            <input
              type="number"
              min={0}
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

  const customModal =
    isCustomModalOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
        onClick={handleCloseCustomModal}
      >
        <div
          className="relative flex min-h-[227px] w-[300px] flex-col gap-[16px] rounded-[20px] bg-white p-[24px] opacity-100 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleCloseCustomModal}
            className="absolute right-[24px] top-[24px] text-gray-400 transition hover:text-gray-700"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>

          <h2 className="pr-8 font-inter text-[20px] font-bold leading-none tracking-normal text-[#2A2D2E]">
            Editar Customização
          </h2>

          <div className="flex flex-col gap-[8px]">
            <label className="font-inter text-[13px] font-medium leading-none tracking-normal text-[#5C6164]">
              Nome da customização
            </label>

            <input
              type="text"
              value={tempCustomDescription}
              onChange={(e) => setTempCustomDescription(e.target.value)}
              className="h-[48px] w-full rounded-[12px] border-2 border-[#26A86E] px-[16px] font-inter text-[13px] font-medium leading-none tracking-normal text-[#2A2D2E] outline-none"
              autoFocus
            />
          </div>

          <button
            type="button"
            onClick={handleSaveCustomDescription}
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
        Custo de Implantação
      </h3>

      <ul className="flex w-full flex-col gap-[10px] pt-[8px] pb-[12px] text-sm">
        {options.map((option) => (
          <li key={option.key} className="flex flex-col">
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

                <span className="min-w-0 flex-1 font-inter text-[13px] font-normal leading-none tracking-normal text-[#2A2D2E]">
                  {option.label}

                  {option.key === 'custom' && (
                    <>
                      {' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenCustomModal();
                        }}
                        className="font-inter text-[13px] font-normal leading-none tracking-normal text-orange-600 underline"
                      >
                        {value.customDescription || 'XXXXXX'}
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
                  {pricing.implementation[option.key].toFixed(2).replace('.', ',')}
                </span>
              </button>
            </label>
          </li>
        ))}
      </ul>

      {priceModal}
      {customModal}
    </div>
  );
};

export default ImplementationCosts;
