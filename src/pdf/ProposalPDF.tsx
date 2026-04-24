import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import Header from './components/HeaderPDF';
import ChallengesSolutions from './components/ChallengesSolutionsPDF';
import Pricing from './components/PricingPDF';
import type { ProposalPayload } from '../types/Payload';
import type { Price } from '../types/Price';

type Props = {
  data: ProposalPayload;
  price: Price;
};

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const ProposalPDF = ({ data, price }: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header company={data.company} expirationDays={data.proposal.expirationDays} />
        </View>

        <View style={styles.divider} />

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
