import './App.css';

import { blueGrey } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: { light: blueGrey[400], main: blueGrey[600], dark: blueGrey[800] },
    primary: { light: blueGrey[50], main: blueGrey[100], dark: blueGrey[20] },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"montserrat"', '"roboto"', 'sans-serif'].join(','),
  },
}));


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </div>
);

export default App;
