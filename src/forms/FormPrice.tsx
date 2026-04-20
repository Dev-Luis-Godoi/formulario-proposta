import type { OptionalMonthly } from '../types/optionalMonthly';
import type { ImplementationCost } from '../types/ImplementationCost';
import OptionsMonthly from '../components/OptionalMonthly';
import ImplementationCosts from '../components/ImplementationCost';
import Costs from '../components/Cost';
import { calculatePrice } from '../services/calculatePrice';

type Props = {
  options: OptionalMonthly;
  setOptions: (value: OptionalMonthly) => void;
  implementation: ImplementationCost;
  setImplementation: (value: ImplementationCost) => void;
};

const FormPrice = ({ options, setOptions, implementation, setImplementation }: Props) => {
  const payload = {
    monthlyOptions: options,
    implementation: implementation,
  };
  const price = calculatePrice(payload);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <OptionsMonthly value={options} onChange={setOptions} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <ImplementationCosts value={implementation} onChange={setImplementation} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <Costs price={price} />
      </div>
    </div>
  );
};

export default FormPrice;
