import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SocialBtn = styled(Link)`
  transition:
    transform 0.18s,
    filter 0.18s;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    filter: brightness(1.15);
  }
`;
