type Props = {
  price: {
    monthly: number;
    implementation: number;
    cnpj: number;
    comprovacoes: number;
    total: number;
  };
  action?: React.ReactNode;
};

const Costs = ({ price, action }: Props) => {
  return (
    <div className="flex w-full flex-col gap-[24px] md:max-lg:h-full md:max-lg:flex-row md:max-lg:items-center md:max-lg:justify-between md:max-lg:gap-[20px] lg:flex-col lg:items-stretch lg:justify-start lg:gap-[20px]">
      <div className="flex w-full items-start justify-between md:max-lg:w-[360px] lg:w-full">
        <div className="flex flex-col gap-[8px]">
          <span className="font-inter text-[16px] font-normal leading-none tracking-normal text-white lg:text-[13px]">
            Custo Mensal
          </span>

          <span className="font-inter text-[13px] font-normal leading-none tracking-normal text-white/70">
            Implantação
          </span>
        </div>

        <div className="flex flex-col items-end gap-[8px]">
          <span className="font-inter text-[24px] font-bold leading-none tracking-normal text-white">
            {price.monthly.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>

          <span className="font-inter text-[16px] font-bold leading-none tracking-normal text-white/90">
            {price.implementation.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </div>

      <div className="w-full md:max-lg:w-auto lg:w-full">{action}</div>
    </div>
  );
};

export default Costs;
