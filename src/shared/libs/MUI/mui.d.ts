import '@mui/material/Button';
import '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    cta: true;
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}
