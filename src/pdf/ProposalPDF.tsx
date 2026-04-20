/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, Page, Text, View } from '@react-pdf/renderer';
import Header from './components/Header';
import ChallengesSolutions from './components/ChallengesSolutions';
import Pricing from './components/Pricing';

type Props = {
  data: any;
  price: any;
};

const ProposalPDF = ({ data, price }: Props) => {
  return (
    <Document>
      <Page>
        <View>
          <Header company={data.company} expirationDays={data.proposal.expirationDays} />
          <Text>--------------------</Text>
        </View>
        <View>
          <ChallengesSolutions
            challenges={data.proposal.challenges}
            solutions={data.proposal.solutions}
          />
        </View>
        <View>
          <Pricing price={price} />
        </View>
      </Page>
    </Document>
  );
};

export default ProposalPDF;
