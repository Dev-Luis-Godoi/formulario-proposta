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
    <form className="flex h-full min-h-[465px] flex-col">
      <div className="mb-6">
        <FormSectionHeader step={2} title="Desafios e Soluções" />
      </div>

      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-[1fr_1px_1fr]">
        <div className="flex h-full flex-col">
          <Challenges
            values={proposal.challenges}
            onChange={(challenges) => setProposal((prev) => ({ ...prev, challenges }))}
          />
        </div>

        <div className="hidden w-[1px] bg-[#F5F5F5] opacity-100 md:block" />

        <div className="flex h-full flex-col">
          <Solutions
            values={proposal.solutions}
            onChange={(solutions) => setProposal((prev) => ({ ...prev, solutions }))}
          />
        </div>
      </div>
    </form>
  );
};

export default FormChallengesSolutions;
