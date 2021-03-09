import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme({
  palette: {
    // gray
    primary: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
      darker: '#404040', // dark gray
      darkest: '#202020', // darker gray
    },
    // red
    secondary: {
      main: '#e0e0e0',
      light: '#f5f5f5', // almost white (whitesmoke)
      dark: '#aeaeae',
    },
  },
  otherColors: {
    text: {
      lighter: 'whitesmoke',
      light: '#d0d0d0',
      dark: '#202020',
    },
    background: {
      dark: '#4e0000', // darker red
      mainDarker: '#757575',
    },
  },
});

export default baseTheme;
