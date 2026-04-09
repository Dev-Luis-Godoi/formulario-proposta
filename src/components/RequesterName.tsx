import type { Requester } from '../types/Requester';

type Props = {
  value: Requester['name'];
  onChange: (value: string) => void;
};

const RequestersName = ({ value, onChange }: Props) => {
  return (
    <div>
      <label className="text-white flex">Nome do Solicitante:</label>
      <input
        type="text"
        placeholder="Digite nome do solicitante"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 rounded-md border outline-none"
      />
    </div>
  );
};

export default RequestersName;
