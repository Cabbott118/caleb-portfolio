// Components, Pages, & Sections
import BannerSection from './sections/BannerSection';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ServicesSection from './sections/ServicesSection';

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
      {/* <Projects /> */}
      {/* <Clients /> */}

      <Footer />
    </ThemeProvider>

    // <ThemeProvider theme={theme}>
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='about' element={<About />} />
    //       <Route path='contact' element={<Contact />} />
    //       <Route path='projects' element={<Projects />} />
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
