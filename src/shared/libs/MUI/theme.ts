import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: 'rgba(251, 251, 251, 70%)',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'cta' },
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)',
            borderRadius: '12px',
            padding: '13px 36px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 700,
            textTransform: 'none',
            width: '100%',
            maxWidth: '280px',
            justifyContent: 'center',
            '&:hover': {
              opacity: 0.88,
              background: 'linear-gradient(135deg, #f5a623 0%, #ec5b37 100%)',
            },

            '&:active': {
              transform: 'translateY(0)',
            },
          },
        },
      ],
    },
  },
});
