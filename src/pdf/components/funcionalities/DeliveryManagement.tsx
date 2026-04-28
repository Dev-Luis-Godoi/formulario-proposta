import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import DeliveryManagementImage from '../../../assets/Funcionalidade - Gestão das entregas.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const DeliveryManagement = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={DeliveryManagementImage} style={styles.background} />
    </Page>
  );
};

export default DeliveryManagement;
