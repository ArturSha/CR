import { Typography as TypographyMUI, type TypographyProps } from '@mui/material';

export const Typography = (props: TypographyProps) => {
  const { children, color = 'primary', ...restProps } = props;
  return (
    <TypographyMUI color={color} {...restProps}>
      {children}
    </TypographyMUI>
  );
};
