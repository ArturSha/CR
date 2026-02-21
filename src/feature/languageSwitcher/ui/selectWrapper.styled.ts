import styled from 'styled-components';

export const LangSelectWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 290,
  alignSelf: 'center',

  [theme.breakpoints.up('xl')]: {
    alignSelf: 'flex-end',
  },
}));
