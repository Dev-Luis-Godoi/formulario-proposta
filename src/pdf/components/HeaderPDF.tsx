import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

import background from '../../assets/fundo-header.png';
import macbookComTela from '../../assets/macbook-logo-completo.png';
import logo from '../../assets/logo-dark.png';
import handshake from '../../assets/handshake.png';
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
    width: 1920,
    height: 1080,
  },
  handshake: {
    width: 40,
    height: 40,
    marginRight: 16,
  },

  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },

  headerTitleBox: {
    position: 'absolute',
    left: 111,
    top: 178,
    width: 600,
  },

  logo: {
    width: 187.47,
    height: 32,
    marginTop: 4.88,
  },

  proposalTitle: {
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1.2,
  },

  leadBox: {
    position: 'absolute',
    left: 111,
    top: 411,
    width: 803,
    height: 132,
  },

  cnpj: {
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: 7,
    gap: 4,
  },

  companyName: {
    fontFamily: 'Helvetica',
    color: '#51B98B',
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: 12,
    textTransform: 'uppercase',
    gap: 4,
  },

  requester: {
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.2,
    gap: 4,
  },

  validityBox: {
    position: 'absolute',
    left: 111,
    top: 767,
    width: 762,
    height: 131,
  },

  validityTitle: {
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: 20,
  },

  validityText: {
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.5,
    marginBottom: 8,
  },

  macbook: {
    position: 'absolute',
    left: 941,
    top: 128,
    width: 1000,
    height: 824,
  },
  proposalTitleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const HeaderPDF = ({ company, expirationDays }: Props) => {
  return (
    <Page size={[1920, 1080]} style={styles.page}>
      <Image src={background} style={styles.background} fixed />

      <View style={styles.headerTitleBox}>
        <Image src={logo} style={styles.logo} />

        <View style={styles.proposalTitleRow}>
          <Image src={handshake} style={styles.handshake} />

          <Text style={styles.proposalTitle}>PROPOSTA COMERCIAL</Text>
        </View>
      </View>

      <View style={styles.leadBox}>
        <Text style={styles.cnpj}>{company?.cnpj || '00.000.000/0000-00'}</Text>

        <Text style={styles.companyName}>{company?.name || 'NOME DA EMPRESA'}</Text>

        <Text style={styles.requester}>
          Solicitante: {company?.requester || 'Nome solicitante'}
        </Text>
      </View>

      <View style={styles.validityBox}>
        <Text style={styles.validityTitle}>Validade da proposta</Text>

        <Text style={styles.validityText}>
          A proposta é válida até o dia {expirationDays || '00/00/0000'}. Não garantimos os valores
          e condições após vencimento.
        </Text>

        <Text style={styles.validityText}>
          Este documento não tem validade de registro e é apenas uma forma objetiva e prática de
          apresentar a proposta. A aceitação da proposta é um aceite inicial para seguimento e
          preenchimento de contrato.
        </Text>
      </View>

      <Image src={macbookComTela} style={styles.macbook} />
    </Page>
  );
};

export default HeaderPDF;
