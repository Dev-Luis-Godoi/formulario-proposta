import React, { useState } from 'react';
import { Trash, X, XIcon } from 'lucide-react';

type Props = {
  values: string[];
  onChange: (values: string[]) => void;
};

const Challenges = ({ values, onChange }: Props) => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = () => {
    const trimmed = input.trim();

    if (!trimmed) return;

    if (values.includes(trimmed)) {
      setInput('');
      setIsOpen(false);
      return;
    }

    onChange([...values, trimmed]);
    setInput('');
    setIsOpen(false);
  };

  const handleRemove = (index: number) => {
    const newValues = values.filter((_, i) => i !== index);
    onChange(newValues);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <label className="font-inter text-[13px] font-semibold leading-none tracking-normal text-[#DC3343]">
        Desafios
      </label>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-4">
          {values.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[11px] bg-[#FBE1E3] text-[#DC3343]">
                  <X size={11} />
                </div>

                <span className="font-inter text-[13px] font-medium leading-none tracking-normal text-[#5C6164]">
                  {item}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="shrink-0 text-gray-400 transition hover:text-[#DC3343]"
                aria-label={`Remover desafio ${item}`}
              >
                <Trash size={14} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-auto flex h-[32px] w-[315.5px] items-center gap-[6px] pt-[10px] pb-[4px] font-inter text-[13px] font-medium leading-none tracking-normal text-[#26A86E]"
        >
          <span>+</span>
          <span>Adicionar desafio</span>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative flex w-full max-w-[400px] flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 text-gray-400 hover:text-gray-700"
              aria-label="Fechar modal"
            >
              <XIcon size={20} />
            </button>

            <h2 className="font-inter text-lg font-semibold text-[#2A2D2E]">Adicionar desafio</h2>

            <h3 className="font-inter text-[13px] font-medium leading-none tracking-normal text-[#5C6164]">
              Descrição
            </h3>

            <input
              type="text"
              placeholder="Descreva o desafio..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="h-[48px] w-full rounded-[12px] border border-[#E5E5E5] px-[16px] font-inter text-[13px] font-medium outline-none focus:ring-2 focus:ring-[#26A86E]"
              autoFocus
            />

            <button
              type="button"
              onClick={handleAdd}
              className="h-[40px] w-full rounded-[10px] bg-[#26A86E] px-[14px] font-inter text-[13px] font-medium leading-none tracking-normal text-white"
            >
              Adicionar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenges;
