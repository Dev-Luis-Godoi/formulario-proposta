import { Image, Page, StyleSheet } from '@react-pdf/renderer';
import DashboardImage from '../../../assets/Funcionalidade - Dashboard.png';

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: 1920,
    height: 1080,
    top: 0,
    left: 0,
  },
});
const Dashboard = () => {
  return (
    <Page size={[1920, 1080]}>
      <Image src={DashboardImage} style={styles.background} />
    </Page>
  );
};

export default Dashboard;
