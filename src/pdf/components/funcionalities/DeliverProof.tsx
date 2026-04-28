import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import DelieverProofImage from '../../../assets/Funcionalidade - Comprovação de entrega.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const DelieverProof = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={DelieverProofImage} style={styles.background} />
    </Page>
  );
};

export default DelieverProof;
