import { createTheme, ThemeProvider } from '@mui/material';
import { pink } from "@mui/material/colors";
import React from 'react';
import { createRoot } from 'react-dom/client';
import CraftBeerPiApp from './App';
import { AlertProvider } from './components/alert/AlertProvider';
import { CBPiProvider } from './components/data';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-72473288-2');
// ReactGA.pageview(window.location.pathname + window.location.search);
//import { StyledEngineProvider } from '@mui/material/styles';

console.log("%cCraftBeerPi 4.0 🍻", "color:#8efa00; background:#000; font-size: 30pt");
console.log("%cCreated with ♥️ by Manuel Fritsch", "color:#8efa00; background:#000; font-size: 10pt");

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#fff"
    },
    secondary: pink,
  },
  typography: {
    fontFamily: [
      'Anton',
    ].join(','),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
          }
        }
      }
    },
    MuiPaper: {
            styleOverrides: { root: { backgroundImage: 'unset',
                              backgroundColor: '#333333' } },
           },
    MuiTooltip: {
      tooltip: {
        fontSize: '1em',
/*        color: 'yellow',
        backgroundColor: 'red' */
      }
    }
  }
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <AlertProvider>
    <CBPiProvider>
     
    
      <CraftBeerPiApp />
     
    
    </CBPiProvider>
    </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
