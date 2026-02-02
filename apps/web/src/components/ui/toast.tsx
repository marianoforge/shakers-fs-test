'use client';

import { createContext, useCallback, useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type ToastType = 'success' | 'error' | 'info';

interface ToastState {
  open: boolean;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [toast, setToast] = useState<ToastState>({
    open: false,
    message: '',
    type: 'success',
  });

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    setToast({ open: true, message, type });
  }, []);

  const handleClose = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  const getStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return { background: '#EDF7F6', color: '#033028' };
      case 'error':
        return { background: '#FFF0ED', color: '#CA4810' };
      case 'info':
      default:
        return { background: '#F4F5F5', color: '#181B1A' };
    }
  };

  const styles = getStyles(toast.type);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: isMobile ? 'center' : 'right',
        }}
        sx={{
          top: isMobile ? 16 : 24,
          ...(isMobile && {
            left: '50%',
            right: 'auto',
            transform: 'translateX(-50%)',
          }),
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1,
            background: styles.background,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            minWidth: isMobile ? 'auto' : 200,
            maxWidth: isMobile ? 'calc(100vw - 32px)' : 'none',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Typography
            sx={{
              color: styles.color,
              fontSize: isMobile ? 14 : 16,
              fontWeight: 400,
              lineHeight: isMobile ? '20px' : '22px',
            }}
          >
            {toast.message}
          </Typography>
        </Box>
      </Snackbar>
    </ToastContext.Provider>
  );
}
