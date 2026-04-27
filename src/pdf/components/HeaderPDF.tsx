import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import background from '../../assets/fundo-header.png';

type Props = {
  company: {
    name: string;
    cnpj: string;
    requester: string;
  };
  expirationDays: string | null;
};

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    fontFamily: 'Helvetica',
    backgroundColor: '#07384A',
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },

  leftContent: {
    position: 'absolute',
    left: 58,
    top: 85,
    width: 360,
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  proposalTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 88,
  },

  cnpj: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  companyName: {
    color: '#36C180',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  requester: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  validityBox: {
    position: 'absolute',
    left: 58,
    bottom: 60,
    width: 430,
  },

  validityTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  validityText: {
    color: '#FFFFFF',
    fontSize: 8.8,
    lineHeight: 1.45,
  },

  macbook: {
    position: 'absolute',
    right: -235,
    top: 65,
    width: 680,
  },
});

const Header = ({ company, expirationDays }: Props) => {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <Image src={background} style={styles.background} />
      <View style={styles.leftContent}>
        <Text style={styles.brand}>Transporte+</Text>
        <Text style={styles.proposalTitle}>PROPOSTA COMERCIAL</Text>

        <Text style={styles.cnpj}>{company.cnpj || '00.000.000/0000-00'}</Text>
        <Text style={styles.companyName}>{company.name || 'NOME DA EMPRESA'}</Text>
        <Text style={styles.requester}>Solicitante: {company.requester || 'Fulano de tal'}</Text>
      </View>

      <View style={styles.validityBox}>
        <Text style={styles.validityTitle}>Validade da proposta</Text>
        <Text style={styles.validityText}>
          A proposta é válida até o dia {expirationDays || '00/00/0000'}. Não garantimos os valores
          e condições após vencimento.
        </Text>
        <Text style={styles.validityText}>
          Este documento não tem validade de registro e é apenas uma forma objetiva e prática de
          apresentar a proposta.
        </Text>
      </View>

      {/* <Image src={macbookComTela} style={styles.macbook} /> */}
    </Page>
  );
};

export default Header;
