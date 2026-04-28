import { Document } from '@react-pdf/renderer';
import './fonts';

import HeaderPDF from './components/HeaderPDF';
import ChallengesSolutions from './components/ChallengesSolutionsPDF';
import Pricing from './components/PricingPDF';
import type { ProposalPayload } from '../types/ProposalPayload';
import type { Price } from '../types/Price';
import FreeItems from './components/FreeItemsPDF';
import type { PricingType } from '../types/Pricing';
import TechnicalRequire from './components/TechnicalRequiresPDF';
import DeliveryManagement from './components/funcionalities/DeliveryManagement';
import Dashboard from './components/funcionalities/Dashboard';
import ProofFlow from './components/funcionalities/ProofFlow';
import OccurenceModule from './components/funcionalities/OccurenceModule';
import DelieverProof from './components/funcionalities/DeliverProof';
import Support from './components/SupportPDF';
import NextSteps from './components/NextStepsPDF';
import Consultant from './components/ConsultantPDF';

type Props = {
  data: ProposalPayload;
  price: Price;
  pricing: PricingType;
};

const ProposalPDF = ({ data, price, pricing }: Props) => {
  return (
    <Document>
      <HeaderPDF company={data.company} expirationDays={data.proposal.expirationDays} />
      <ChallengesSolutions
        challenges={data.proposal.challenges}
        solutions={data.proposal.solutions}
      />
      <FreeItems />
      <Pricing data={data} price={price} pricing={pricing} />
      <TechnicalRequire />
      <DeliveryManagement />
      <Dashboard />
      <ProofFlow />
      <OccurenceModule />
      <DelieverProof />
      <Support />
      <NextSteps />
      <Consultant />
    </Document>
  );
};

export default ProposalPDF;
