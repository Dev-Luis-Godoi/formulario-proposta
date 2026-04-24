import { useEffect, useState } from 'react';
import { CalendarIcon, X } from 'lucide-react';

type Props = {
  value: string | null;
  onChange: (value: string | null) => void;
};

const ExpirationsDate = ({ value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatLocalDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const parseLocalDate = (dateString: string | null) => {
    if (!dateString) return null;

    const [year, month, day] = dateString.split('-').map(Number);

    if (!year || !month || !day) return null;

    return new Date(year, month - 1, day);
  };

  const selectedDate = parseLocalDate(value);

  const openModal = () => {
    setCurrentDate(selectedDate ?? new Date());
    setIsOpen(true);
  };

  const addDaysToDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const handleQuickSelect = (days: number) => {
    const date = addDaysToDate(days);
    onChange(formatLocalDate(date));
    setCurrentDate(date);
  };

  const getQuickButtonClass = (days: number) => {
    const targetDate = formatLocalDate(addDaysToDate(days));
    const isActive = value === targetDate;

    return `px-5 py-2 rounded-2xl text-sm font-medium transition-colors ${
      isActive ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;
  };

  const handleSelectDay = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

    onChange(formatLocalDate(date));
  };

  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative flex flex-col gap-3 w-full">
      <label className="text-sm font-medium text-gray-700">Validade da proposta:</label>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handleQuickSelect(30)}
          className={getQuickButtonClass(30)}
        >
          30 dias
        </button>

        <button
          type="button"
          onClick={() => handleQuickSelect(60)}
          className={getQuickButtonClass(60)}
        >
          60 dias
        </button>

        <button
          type="button"
          onClick={() => handleQuickSelect(90)}
          className={getQuickButtonClass(90)}
        >
          90 dias
        </button>
        <button
          type="button"
          onClick={openModal}
          className="w-full h-10 px-3 rounded-md border border-emerald-300 text-left bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 items-center justify-between flex"
        >
          {selectedDate ? selectedDate.toLocaleDateString('pt-BR') : 'Selecionar data'}
          <CalendarIcon size={15} />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-[320px] rounded-3xl bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X size={18} />
            </button>

            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => changeMonth(-1)} className="text-xl">
                  ‹
                </button>

                <span className="font-semibold capitalize min-w-[140px] text-center">
                  {currentDate.toLocaleDateString('pt-BR', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>

                <button type="button" onClick={() => changeMonth(1)} className="text-xl">
                  ›
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
              <span>D</span>
              <span>S</span>
              <span>T</span>
              <span>Q</span>
              <span>Q</span>
              <span>S</span>
              <span>S</span>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;

                const isSelected =
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentDate.getMonth() &&
                  selectedDate.getFullYear() === currentDate.getFullYear();

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleSelectDay(day)}
                    className={`w-10 h-10 rounded-full text-sm transition ${
                      isSelected ? 'bg-emerald-500 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-5 w-full bg-emerald-600 text-white py-3 rounded-2xl font-medium hover:bg-emerald-700 transition"
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpirationsDate;
