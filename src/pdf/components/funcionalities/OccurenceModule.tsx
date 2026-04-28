import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import OccurenceModuleImage from '../../../assets/Funcionalidade - Ocorrências.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const OccurenceModule = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={OccurenceModuleImage} style={styles.background} />
    </Page>
  );
};

export default OccurenceModule;
