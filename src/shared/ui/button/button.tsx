import type { ButtonProps } from '@mui/material/Button';
import ButtonMUI from '@mui/material/Button';

export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;
  return <ButtonMUI {...restProps}>{children}</ButtonMUI>;
};
