import Login from './components/Login';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Login />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
