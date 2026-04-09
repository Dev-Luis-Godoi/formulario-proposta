import React, { useState } from 'react';
import type { ExpirationDate } from '../types/ExpirationDate';

type Props = {
  value: ExpirationDate['days'] | null;
  onChange: (value: number | null) => void;
};

const ExpirationsDate = ({ value, onChange }: Props) => {
  const isCustom = value !== null && value !== 30;

  const [mode, setMode] = useState<'default' | 'custom'>(isCustom ? 'custom' : 'default');

  const [customValue, setCustomValue] = useState(isCustom ? String(value) : '');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;

    if (val === '30') {
      setMode('default');
      onChange(30);
    } else {
      setMode('custom');
      onChange(null);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!/^\d*$/.test(val)) return;

    setCustomValue(val);

    if (val === '') {
      onChange(null);
    } else {
      onChange(Number(val));
    }
  };

  return (
    <div className="flex flex-col p-2 gap-2 bg-[#4682B4]">
      <label className="text-white ">Validade da proposta:</label>

      <select
        value={mode === 'default' ? '30' : 'custom'}
        onChange={handleSelectChange}
        className="px-3 py-2 rounded-md border bg-[#4682B4]"
      >
        <option value="30">30 dias (padrão)</option>
        <option value="custom">Outro valor</option>
      </select>

      {mode === 'custom' && (
        <input
          type="text"
          placeholder="Digite a quantidade de dias"
          value={customValue}
          onChange={handleCustomChange}
          className="px-3 py-2 rounded-md border outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
};

export default ExpirationsDate;
