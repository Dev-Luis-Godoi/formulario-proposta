import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import SupportImage from '../../assets/Suporte.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const Support = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={SupportImage} style={styles.background} />
    </Page>
  );
};

export default Support;
