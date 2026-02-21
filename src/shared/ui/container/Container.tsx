import type { ContainerProps } from '@mui/material';
import { Container as MuiContainer } from '@mui/material';

export const Container = (props: ContainerProps) => {
  const { children, ...rest } = props;
  return <MuiContainer {...rest}>{children}</MuiContainer>;
};
