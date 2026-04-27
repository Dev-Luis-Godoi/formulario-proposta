type Props = {
  step: number;
  title: string;
};

const FormSectionHeader = ({ step, title }: Props) => {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="w-[28px] h-[28px] bg-[#26A86E] rounded-[14px] flex items-center justify-center text-white text-sm opacity-100 rotate-0">
        <span className="font-inter text-[14px] font-bold leading-none tracking-normal text-white">
          {step}
        </span>
      </div>

      <h1 className="text-[17px] font-inter font-semibold leading-none  text-[#2A2D2E]">{title}</h1>
    </div>
  );
};

export default FormSectionHeader;
