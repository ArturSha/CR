import type { DividerProps } from '@mui/material/Divider';
import DividerMUI from '@mui/material/Divider';
export const Divider = (props: DividerProps) => {
  const { color = '#7a8fc4', ...restProps } = props;
  return <DividerMUI color={color} {...restProps} />;
};
