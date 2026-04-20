import { View, Text } from '@react-pdf/renderer';

type Props = {
  challenges: string[];
  solutions: string[];
};

const ChallengesSolutions = ({ challenges, solutions }: Props) => {
  return (
    <View>
      <Text>Desafios</Text>

      {challenges.length === 0 ? (
        <Text>Nenhum desafio informado</Text>
      ) : (
        challenges.map((item, index) => <Text key={index}>• {item}</Text>)
      )}

      <View>
        <Text> Soluções</Text>

        {solutions.length === 0 ? (
          <Text>Nenhuma solução informada</Text>
        ) : (
          solutions.map((item, index) => <Text key={index}>• {item}</Text>)
        )}
      </View>
    </View>
  );
};

export default ChallengesSolutions;
