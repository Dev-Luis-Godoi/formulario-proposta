type Props = {
  price: {
    monthly: number;
    implementation: number;
    cnpj: number;
    total: number;
  };
};

const Costs = ({ price }: Props) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg text-white">
      <h3 className="text-lg font-semibold mb-3">Resumo de Custos</h3>

      <div className="flex justify-between">
        <span>Mensal</span>
        <span>R$ {price.monthly}</span>
      </div>

      <div className="flex justify-between">
        <span>Implementação</span>
        <span>R$ {price.implementation}</span>
      </div>

      <div className="flex justify-between">
        <span>CNPJ</span>
        <span>R$ {price.cnpj}</span>
      </div>

      <hr className="my-2 border-gray-600" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span>R$ {price.total}</span>
      </div>
    </div>
  );
};

export default Costs;
