import { View, Text, StyleSheet, Page, Image } from '@react-pdf/renderer';
import type { ProposalPayload } from '../../types/ProposalPayload';
import type { PricingType } from '../../types/Pricing';
import logo from '../../assets/logo.png';
type Props = {
  price: {
    monthly: number;
    implementation: number;
    cnpj: number;
    comprovacoes: number;
    total: number;
  };
  data: ProposalPayload;
  pricing: PricingType;
};

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },

  headerBox: {
    position: 'absolute',
    left: 111,
    top: 90,
    width: 900,
  },

  logo: {
    width: 187.47,
    height: 32,
    marginBottom: 18,
  },

  title: {
    color: '#093045',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1,
  },

  content: {
    position: 'absolute',
    left: 158,
    top: 230,
    width: 1660,
  },

  sectionTitle: {
    color: '#2A2D2E',
    fontSize: 32,
    fontWeight: 600,
    marginBottom: 16,
  },

  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
    borderBottomStyle: 'dotted',
    marginBottom: 18,
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
    paddingLeft: 36,
  },

  itemTextWrapper: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 40,
  },

  bullet: {
    fontSize: 22,
    color: '#2A2D2E',
    marginRight: 16,
    lineHeight: 1.2,
  },

  itemText: {
    color: '#2A2D2E',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1,
  },

  bold: {
    fontWeight: 700,
  },

  valueText: {
    width: 180,
    color: '#2A2D2E',
    fontSize: 22,
    fontWeight: 400,
    textAlign: 'right',
    lineHeight: 1.2,
  },

  monthlySummaryBox: {
    marginTop: 8,
    marginBottom: 44,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    paddingLeft: 36,
  },

  summaryLabel: {
    color: '#2A2D2E',
    fontSize: 20,
    fontWeight: 400,
  },

  summaryValue: {
    color: '#2A2D2E',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'right',
  },

  finalValue: {
    color: '#47BE88',
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'right',
    lineHeight: 1,
  },

  implementationNote: {
    color: '#2A2D2E',
    fontSize: 20,
    fontWeight: 400,
    marginTop: 18,
    paddingLeft: 0,
    lineHeight: 1,
  },

  implementationFinal: {
    color: '#26A86E',
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'right',
    marginTop: -28,
    lineHeight: 1,
  },
});

const Pricing = ({ price, data, pricing }: Props) => {
  const { monthlyOptions, implementation } = data;

  const monthlyItems = [
    {
      visible: true,
      label: (
        <Text>
          Plano básico com <Text style={styles.bold}>{monthlyOptions.cnpjQuantity} CNPJ</Text> e até{' '}
          <Text style={styles.bold}>{monthlyOptions.comprovacoes.toLocaleString('pt-BR')}</Text>{' '}
          comprovações por mês
        </Text>
      ),
      value: price.cnpj + price.comprovacoes,
    },
    {
      visible: monthlyOptions.cnpjQuantity > 1,
      label: (
        <Text>
          <Text style={styles.bold}>{monthlyOptions.cnpjQuantity - 1} CNPJs</Text> adicionais
        </Text>
      ),
      value: price.cnpj,
    },
    {
      visible: monthlyOptions.xmlCollector,
      label: (
        <Text>
          Sistema <Text style={styles.bold}>coletor de XML</Text>
        </Text>
      ),
      value: pricing.monthly.xmlCollector,
    },
    {
      visible: monthlyOptions.erpIntegrationAccess,
      label: (
        <Text>
          Integração com <Text style={styles.bold}>ERP</Text>
        </Text>
      ),
      value: pricing.monthly.erpIntegrationAccess,
    },
    {
      visible: monthlyOptions.apiIntegrationAccess,
      label: (
        <Text>
          Acesso a <Text style={styles.bold}>API</Text> de integração
        </Text>
      ),
      value: pricing.monthly.apiIntegrationAccess,
    },
    {
      visible: monthlyOptions.occurrencesModule,
      label: (
        <Text>
          Módulo de <Text style={styles.bold}>ocorrências</Text>
        </Text>
      ),
      value: pricing.monthly.occurrencesModule,
    },
    {
      visible: monthlyOptions.antifraudeModule,
      label: (
        <Text>
          Módulo <Text style={styles.bold}>antifraude</Text> para canhoto
        </Text>
      ),
      value: pricing.monthly.antifraudeModule,
    },
  ];

  const implementationItems = [
    {
      visible: implementation.tutorialTraining,
      label: (
        <Text>
          Treinamento por <Text style={styles.bold}>vídeo tutorial</Text> na plataforma
        </Text>
      ),
      value: pricing.implementation.tutorialTraining,
    },
    {
      visible: implementation.consultantTraining,
      label: (
        <Text>
          Primeiro treinamento <Text style={styles.bold}>1:1</Text> com{' '}
          <Text style={styles.bold}>consultor</Text>
        </Text>
      ),
      value: pricing.implementation.consultantTraining,
    },
    {
      visible: implementation.custom,
      label: (
        <Text>
          Customização{' '}
          <Text style={styles.bold}>{implementation.customDescription || 'personalizada'}</Text>
        </Text>
      ),
      value: pricing.implementation.custom,
    },
  ];

  const finalMonthlyPrice = price.monthly;
  return (
    <Page size={[1920, 1080]} style={styles.page}>
      <View style={styles.headerBox}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.title}>CUSTOS E ITENS CONTRATADOS</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Custos mensais</Text>
        <View style={styles.divider} />

        {monthlyItems
          .filter((item) => item.visible)
          .map((item, index) => (
            <View key={`monthly-${index}`} style={styles.itemRow}>
              <View style={styles.itemTextWrapper}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemText}>{item.label}</Text>
              </View>

              <Text style={styles.valueText}>{formatCurrency(item.value)}</Text>
            </View>
          ))}

        <View style={styles.divider} />

        <View style={styles.monthlySummaryBox}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>*Custo total</Text>
            <Text style={styles.summaryValue}>{formatCurrency(price.monthly)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>*Custo final</Text>
            <Text style={styles.finalValue}>{formatCurrency(finalMonthlyPrice)}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Custos de implantação</Text>
        <View style={styles.divider} />

        {implementationItems
          .filter((item) => item.visible)
          .map((item, index) => (
            <View key={`implementation-${index}`} style={styles.itemRow}>
              <View style={styles.itemTextWrapper}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.itemText}>{item.label}</Text>
              </View>

              <Text style={styles.valueText}>{formatCurrency(item.value)}</Text>
            </View>
          ))}

        <View style={styles.divider} />

        <Text style={styles.implementationNote}>
          *Custos cobrados em parcela única após assinatura de contrato
        </Text>

        <Text style={styles.implementationFinal}>{formatCurrency(price.implementation)}</Text>
      </View>
    </Page>
  );
};

export default Pricing;
