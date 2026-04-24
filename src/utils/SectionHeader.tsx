type Props = {
  step: number;
  title: string;
};

const FormSectionHeader = ({ step, title }: Props) => {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
        {step}
      </div>

      <h1 className="text-[20px] font-semibold text-gray-800">{title}</h1>
    </div>
  );
};

export default FormSectionHeader;
