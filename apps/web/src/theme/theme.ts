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
      main: palette.grey[8],
      light: palette.grey[6],
      dark: palette.grey[9],
      contrastText: palette.white,
    },
    error: {
      main: palette.red[8],
      light: palette.red[4],
      dark: palette.red[8],
      contrastText: palette.white,
    },
    background: {
      default: palette.surface.grey0,
      paper: palette.white,
    },
    text: {
      primary: palette.text.grey9,
      secondary: palette.text.grey6,
    },
    grey: {
      50: palette.grey[0],
      100: palette.grey[2],
      200: palette.grey[4],
      400: palette.grey[6],
      600: palette.grey[8],
      800: palette.grey[9],
    },
    divider: palette.grey[4],
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
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
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.08)',
          border: `1px solid ${palette.grey[4]}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
        filled: {
          backgroundColor: palette.surface.green2,
          color: palette.text.green8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
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
