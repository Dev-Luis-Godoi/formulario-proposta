import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import TechRequireImage from '../../assets/Requisitos.png';
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});

const TechnicalRequire = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={TechRequireImage} style={styles.background} />
    </Page>
  );
};

export default TechnicalRequire;
