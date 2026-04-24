type Props = {
  value: number;
  onClick?: () => void;
};

const PriceTag = ({ value, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center px-4 py-1.5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] gap-1 min-w-[90px] justify-center hover:bg-[#ECECEC] transition"
    >
      <span className="text-gray-400 text-xs">R$</span>
      <span className="text-sm font-semibold text-gray-700">
        {value.toFixed(2).replace('.', ',')}
      </span>
    </button>
  );
};

export default PriceTag;
