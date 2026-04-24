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
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <FormSectionHeader step={2} title="Desafios e Soluções" />
      </div>
      <div className='"md:pr-6"'>
        <Challenges
          values={proposal.challenges}
          onChange={(challenges) => setProposal((prev) => ({ ...prev, challenges }))}
        />
      </div>
      <div className=" md:pl-6">
        <Solutions
          values={proposal.solutions}
          onChange={(solutions) => setProposal((prev) => ({ ...prev, solutions }))}
        />
      </div>
    </form>
  );
};

export default FormChallengesSolutions;
