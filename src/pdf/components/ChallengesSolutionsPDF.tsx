import { View, Text, Page, StyleSheet, Image } from '@react-pdf/renderer';

import logo from '../../assets/logo.png';
import checkIcon from '../../assets/check.png';
import xIcon from '../../assets/x.png';

type Props = {
  challenges: string[];
  solutions: string[];
};

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
  },

  headerBox: {
    position: 'absolute',
    left: 111,
    top: 90,
    width: 803,
    height: 90,
    gap: 10,
  },

  logo: {
    width: 187,
    height: 32,
    marginTop: 4.88,
  },

  title: {
    fontFamily: 'Helvetica',
    color: '#093045',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1.2,
  },

  descriptionBox: {
    position: 'absolute',
    left: 111,
    top: 247,
    width: 1270,
  },

  description: {
    fontFamily: 'Helvetica',
    color: '#04141D',
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.4,
  },

  columnsWrapper: {
    position: 'absolute',
    left: 111,
    top: 468,
    width: 1698,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  challengeColumn: {
    width: 760,
  },

  solutionColumn: {
    width: 820,
  },

  badgeChallenge: {
    width: 182,
    height: 54,
    backgroundColor: '#FF4F59',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
  },

  badgeSolution: {
    width: 195,
    height: 54,
    backgroundColor: '#26A86E',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
  },

  badgeText: {
    fontFamily: 'Helvetica',
    fontSize: 32,
    fontWeight: 700,
    color: '#FFFFFF',
    lineHeight: 1,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },

  icon: {
    width: 16,
    height: 16,
    marginTop: 4,
    marginRight: 14,
  },

  itemText: {
    flex: 1,
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 400,
    color: '#212323',
    lineHeight: 1.2,
  },
});

const ChallengesSolutionsPDF = ({ challenges, solutions }: Props) => {
  return (
    <Page size={[1920, 1080]} style={styles.page}>
      <View style={styles.headerBox}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.title}>DESAFIOS E SOLUÇÕES</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.description}>
          Durante a reunião de demonstração o consultor realiza diversas perguntas a fim de
          identificar os desafios enfrentados pela empresa na gestão de entregas. Após essa análise
          inicial, o consultor fará apontamentos para melhorar o processo e quais ferramentas
          utilizar no dia a dia.
        </Text>
      </View>

      <View style={styles.columnsWrapper}>
        <View style={styles.challengeColumn}>
          <View style={styles.badgeChallenge}>
            <Text style={styles.badgeText}>DESAFIOS</Text>
          </View>

          {challenges.map((item, index) => (
            <View key={`challenge-${index}`} style={styles.itemRow}>
              <Image src={xIcon} style={styles.icon} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.solutionColumn}>
          <View style={styles.badgeSolution}>
            <Text style={styles.badgeText}>SOLUÇÕES</Text>
          </View>

          {solutions.map((item, index) => (
            <View key={`solution-${index}`} style={styles.itemRow}>
              <Image src={checkIcon} style={styles.icon} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default ChallengesSolutionsPDF;
