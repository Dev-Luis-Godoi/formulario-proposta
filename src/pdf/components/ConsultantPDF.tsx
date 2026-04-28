import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import ConsultantImage from '../../assets/Contato.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const Consultant = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={ConsultantImage} style={styles.background} />
    </Page>
  );
};

export default Consultant;
