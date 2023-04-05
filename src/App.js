import './App.css';

// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Utility
import themeFile from './utility/theme';

const theme = createTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'></div>
    </ThemeProvider>
  );
}

export default App;
