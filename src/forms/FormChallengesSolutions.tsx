import { useState } from 'react';
import Challenges from '../components/Challenge';
import Solutions from '../components/Solution';

const FormChallengesSolutions = () => {
  const [challenges, setChallenges] = useState<string[]>([]);
  const [solutions, setSolutions] = useState<string[]>([]);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 flex items-center gap-3 mb-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
          2
        </div>

        <h1 className="text-[20px] font-semibold text-gray-800">Desafios e Soluções</h1>
      </div>

      <div className="md:pr-6">
        <Challenges values={challenges} onChange={setChallenges} />
      </div>

      <div className="md:border-l md:pl-6">
        <Solutions values={solutions} onChange={setSolutions} />
      </div>
    </form>
  );
};

export default FormChallengesSolutions;
