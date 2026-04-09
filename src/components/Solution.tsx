import React from 'react';
import type { Solution } from '../types/Solution';

type Props = {
  values: Solution['description'];
  onChange: (values: string[]) => void;
};

const Solutions = ({ values, onChange }: Props) => {
  const [input, setInput] = React.useState('');

  const handleAdd = () => {
    const trimmed = input.trim();

    if (!trimmed) return;
    if (values.includes(trimmed)) {
      setInput('');
      return;
    }

    onChange([...values, trimmed]);
    setInput('');
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
    <div className="flex flex-col gap-2">
      <label className="text-white">Soluções:</label>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite uma solução e pressione Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Adicionar
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-200 text-black px-3 py-1 rounded-full"
          >
            <span>{item}</span>
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-red-500 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
