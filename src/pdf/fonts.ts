import { Font } from '@react-pdf/renderer';

import MavenProRegular from '../assets/fonts/MavenPro-Regular.ttf';
import MavenProMedium from '../assets/fonts/MavenPro-Medium.ttf';
import MavenProSemiBold from '../assets/fonts/MavenPro-SemiBold.ttf';
import MavenProBold from '../assets/fonts/MavenPro-Bold.ttf';

Font.register({
  family: 'MavenPro',
  fonts: [
    {
      src: MavenProRegular,
      fontWeight: 400,
    },
    {
      src: MavenProMedium,
      fontWeight: 500,
    },
    {
      src: MavenProSemiBold,
      fontWeight: 600,
    },
    {
      src: MavenProBold,
      fontWeight: 700,
    },
  ],
});
Font.registerHyphenationCallback((word) => [word]);
