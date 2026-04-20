import React, { useState } from 'react';

type Props = {
  value: string | null;
  onChange: (value: string | null) => void;
};

type OptionType = '30' | '60' | '90' | 'custom';

const ExpirationsDate = ({ value, onChange }: Props) => {
  const [selected, setSelected] = useState<OptionType>('30');

  const addDays = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  };

  const handleButtonClick = (val: OptionType) => {
    setSelected(val);

    if (val !== 'custom') {
      const futureDate = addDays(Number(val));
      onChange(futureDate);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected('custom');
    onChange(e.target.value);
  };

  const getButtonClass = (val: OptionType) => {
    const isActive = selected === val;
    return `px-5 py-2 rounded-2xl text-sm font-medium transition-colors ${
      isActive ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-sm font-medium text-gray-700">Validade da proposta:</label>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handleButtonClick('30')}
          className={getButtonClass('30')}
        >
          30 dias
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('60')}
          className={getButtonClass('60')}
        >
          60 dias
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick('90')}
          className={getButtonClass('90')}
        >
          90 dias
        </button>
      </div>

      <input
        type="date"
        value={value ?? ''}
        onChange={handleDateChange}
        className="w-full h-10 px-3 mt-1 border-radius-12 rounded-md border border-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 "
      />
    </div>
  );
};

export default ExpirationsDate;
