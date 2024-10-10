'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const defaultTheme = createTheme();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    htmlFontSize: 17.5,
  },
  palette: {
    mode: 'light',
    info: {
      main: '#486ce3',
    },
    primary: {
      main: '#006c8a',
    },
    secondary: {
      main: '#3e3e3e',
    },
    background: {
      default: '#efefef',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontWeight: '500',
          fontSize: '1.5em',
          marginTop: '35px',
        },
        h3: {
          fontWeight: '500',
          fontSize: '1.2em',
          marginTop: '35px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '1px 1px 50px 1px #b8b8b8',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          [defaultTheme.breakpoints.down('xs')]: {
            padding: '0 !important',
          },
        },
      },
    },
  },
});

export default theme;
