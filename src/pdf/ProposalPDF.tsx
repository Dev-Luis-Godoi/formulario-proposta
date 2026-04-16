/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, Page, Text, View } from '@react-pdf/renderer';

type Props = {
  data: any;
  price: any;
};

const ProposalPDF = ({ data, price }: Props) => {
  return (
    <Document>
      <Page>
        <View>
          <Text>Empresa: {data.company.name}</Text>
          <Text>CNPJ: {data.company.cnpj}</Text>
          <Text>Solicitante: {data.company.requester}</Text>

          <Text>--------------------</Text>

          <Text>Total: R$ {price.total}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProposalPDF;
