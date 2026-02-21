import { Box as BoxMUI, type BoxProps } from '@mui/material';

export const Box = ({ children, ...props }: BoxProps) => {
  return <BoxMUI {...props}>{children}</BoxMUI>;
};
