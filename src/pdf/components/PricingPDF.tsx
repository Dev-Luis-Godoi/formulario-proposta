import { View, Text, StyleSheet } from '@react-pdf/renderer';

type Props = {
  price: {
    monthly: number;
    implementation: number;
    cnpj: number;
    comprovacoes: number;
    total: number;
  };
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  total: {
    marginTop: 10,
    paddingTop: 8,
    borderTop: '1px solid #ccc',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
const Pricing = ({ price }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo de valores</Text>

      <View style={styles.row}>
        <Text>Mensal</Text>
        <Text>{formatCurrency(price.monthly)}</Text>
      </View>

      <View style={styles.row}>
        <Text>Implantação</Text>
        <Text>{formatCurrency(price.implementation)}</Text>
      </View>

      <View style={styles.row}>
        <Text>CNPJ</Text>
        <Text>{formatCurrency(price.cnpj)}</Text>
      </View>

      <View style={styles.row}>
        <Text>Comprovações</Text>
        <Text>{formatCurrency(price.comprovacoes)}</Text>
      </View>

      <View style={styles.total}>
        <Text>Total: {formatCurrency(price.total)}</Text>
      </View>
    </View>
  );
};

export default Pricing;
