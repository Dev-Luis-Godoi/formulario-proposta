import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import NextStepsImage from '../../assets/Proximos passos.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const NextSteps = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={NextStepsImage} style={styles.background} />
    </Page>
  );
};

export default NextSteps;
