import { Document, Page, View } from '@react-pdf/renderer';
import Header from './components/HeaderPDF';
import ChallengesSolutions from './components/ChallengesSolutionsPDF';
import Pricing from './components/PricingPDF';
import type { ProposalPayload } from '../types/Payload';
import type { Price } from '../types/Price';
import { styles } from './styles';

type Props = {
  data: ProposalPayload;
  price: Price;
};

const ProposalPDF = ({ data, price }: Props) => {
  return (
    <Document>
      <Header company={data.company} expirationDays={data.proposal.expirationDays} />

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <ChallengesSolutions
            challenges={data.proposal.challenges}
            solutions={data.proposal.solutions}
          />
        </View>

        <View style={styles.section}>
          <Pricing price={price} />
        </View>
      </Page>
    </Document>
  );
};

export default ProposalPDF;
