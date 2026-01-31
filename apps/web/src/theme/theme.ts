'use client';

import { createTheme } from '@mui/material/styles';

import { palette } from './palette';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: palette.green[8],
      light: palette.green[6],
      dark: palette.green[8],
      contrastText: palette.white,
    },
    secondary: {
      main: palette.grey[9],
      light: palette.grey[6],
      dark: palette.grey[9],
      contrastText: palette.white,
    },
    error: {
      main: palette.text.red8,
      contrastText: palette.white,
    },
    background: {
      default: palette.white,
      paper: palette.white,
    },
    text: {
      primary: palette.text.grey9,
      secondary: palette.text.grey6,
    },
    divider: palette.grey[4],
  },
  typography: {
    fontFamily: '"Inter", "GT Planar", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.44,
    },
    h2: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.44,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.33,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.33,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          borderRadius: 6,
          fontSize: '0.75rem',
          padding: '6px 8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          border: `1px solid ${palette.grey[4]}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 400,
          fontSize: '0.75rem',
          height: 28,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
