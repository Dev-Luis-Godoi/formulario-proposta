import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import ProofFlowImage from '../../../assets/Funcionalidade - Fluxo de comprovação.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const ProofFlow = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={ProofFlowImage} style={styles.background} />
    </Page>
  );
};

export default ProofFlow;
