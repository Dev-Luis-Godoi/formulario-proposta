import Challenges from '../components/Challenge';
import Solutions from '../components/Solution';
import type { Proposal } from '../types/Proposal';
import FormSectionHeader from '../utils/SectionHeader';

type Props = {
  proposal: Proposal;
  setProposal: React.Dispatch<React.SetStateAction<Proposal>>;
};

const FormChallengesSolutions = ({ proposal, setProposal }: Props) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-6">
      <div className="md:col-span-3">
        <FormSectionHeader step={2} title="Desafios e Soluções" />
      </div>

      <div>
        <Challenges
          values={proposal.challenges}
          onChange={(challenges) => setProposal((prev) => ({ ...prev, challenges }))}
        />
      </div>

      <div className="hidden md:block w-[1px] min-h-[407px] bg-[#E5E5E5] opacity-100 rotate-0" />

      <div>
        <Solutions
          values={proposal.solutions}
          onChange={(solutions) => setProposal((prev) => ({ ...prev, solutions }))}
        />
      </div>
    </form>
  );
};

export default FormChallengesSolutions;
