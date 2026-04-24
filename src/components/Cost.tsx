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
    <div className="w-full rounded-[24px] p-8 bg-gradient-to-b from-[#2FA36B] to-[#248C5C]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-white text-lg font-medium">Custo Mensal</span>

          <span className="text-white text-3xl font-bold">
            {price.monthly.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white/80 text-lg">Implantação</span>

          <span className="text-white/80 text-2xl font-semibold">
            {price.implementation.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </div>

      <div className="mt-4">{action}</div>
    </div>
  );
};

export default Costs;
