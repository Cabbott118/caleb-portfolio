// Components, Pages, & Sections
import BannerSection from './sections/BannerSection';
import Footer from './components/Footer/Footer';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// // Utility
import themeFile from './utility/theme';

const theme = createTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
