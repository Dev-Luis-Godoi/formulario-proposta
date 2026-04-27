import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

type Props = {
  challenges: string[];
  solutions: string[];
};

const ChallengesSolutions = ({ challenges, solutions }: Props) => {
  return (
    <View style={[{ flexDirection: 'row', gap: 16 }]}>
      <View style={[{ flex: 1 }]}>
        <Text style={styles.title}>Desafios</Text>
        {challenges.map((item, i) => (
          <Text key={i} style={[{ fontSize: 10, marginBottom: 4 }]}>
            • {item}
          </Text>
        ))}
      </View>

      <View style={[{ flex: 1 }]}>
        <Text style={styles.title}>Soluções</Text>
        {solutions.map((item, i) => (
          <Text key={i} style={[{ fontSize: 10, marginBottom: 4 }]}>
            • {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ChallengesSolutions;
