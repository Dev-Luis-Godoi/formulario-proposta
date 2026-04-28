import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import FreeItemsImage from '../../assets/Itens da proposta gratis.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});

const FreeItems = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={FreeItemsImage} style={styles.background} />
    </Page>
  );
};

export default FreeItems;
