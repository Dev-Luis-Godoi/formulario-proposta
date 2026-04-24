import { View, Text } from '@react-pdf/renderer';

type Props = {
  company: {
    name: string;
    cnpj: string;
    requester: string;
  };
  expirationDays: string | null;
};

const Header = ({ company, expirationDays }: Props) => {
  return (
    <View>
      <Text>Empresa:{company.name}</Text>
      <Text>CNPJ: {company.cnpj}</Text>
      <Text>Solicitante: {company.requester}</Text>

      <Text>Validade da proposta: {expirationDays}</Text>
    </View>
  );
};

export default Header;
