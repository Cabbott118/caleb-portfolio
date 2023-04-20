// Components, Pages, & Sections
import Banner from './sections/Banner';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Styled Components
import styled from 'styled-components';

// // Utility
import themeFile from './utility/theme';

const theme = createTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Banner />
      <Services />
      <LightColor>{/* <Projects /> */}</LightColor>
      {/* <Clients /> */}
      <LightColor>
        <Footer />
      </LightColor>
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

// const Banner = styled.div`
//   background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
//   height: 100vh;
//   @media (max-width: 640px) {
//     height: 100%;
//     padding-bottom: 2rem;
//   }
// `;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
