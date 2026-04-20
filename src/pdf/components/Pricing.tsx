import { View, Text } from '@react-pdf/renderer';

type Props = {
  price: {
    monthly: number;
    implementation: number;
    cnpj: number;
    comprovacoes: number;
    total: number;
  };
};
const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
const Pricing = ({ price }: Props) => {
  return (
    <View>
      <Text>Resumo de valores</Text>
      <Text>Mensal Opcional: R${price.monthly}</Text>
      <Text>Implementação: R${price.implementation}</Text>
      <Text> CNPJ: {formatCurrency(price.cnpj)}</Text>
      <Text>Comprovações: R${price.comprovacoes}</Text>
      <Text>------------------------------------</Text>
      <Text>Total:{formatCurrency(price.total)}</Text>
    </View>
  );
};

export default Pricing;
