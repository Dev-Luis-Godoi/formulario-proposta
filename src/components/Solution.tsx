import React from 'react';
import type { Solution } from '../types/Solution';
import { Check, Trash2, XIcon } from 'lucide-react';

type Props = {
  values: Solution['description'];
  onChange: (values: string[]) => void;
};

const Solutions = ({ values, onChange }: Props) => {
  const [input, setInput] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

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
    <div className="flex flex-col gap-4">
      <label className="text-[#26A86E] font-semibold">Soluções:</label>

      <div className="flex flex-col gap-4">
        {values.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                <Check size={16} />
              </div>

              <span className="text-gray-700">{item}</span>
            </div>

            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-gray-400 hover:text-esmerald-500 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => setIsOpen(true)} className="w-fit  py-2 text-[#26A86E] ">
        + Adicionar solução
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl p-6 w-[400px] flex flex-col gap-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute py-2 top-5 right-7 text-gray-400 hover:text-gray-700 text-xl"
            >
              <XIcon size={20} />
            </button>
            <h2 className="text-lg font-semibold">Adicionar solução</h2>
            <h3 className="text-[#5C6164]">Descrição</h3>
            <input
              type="text"
              placeholder="Descreva a solução..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="px-3 py-6 rounded-lg border border-[#E5E5E5] outline-none focus:ring-2 focus:ring-[#26A86E]"
              autoFocus
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleAdd}
                className="px-4 py-2 bg-[#26A86E] text-white rounded-full w-full"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Solutions;
