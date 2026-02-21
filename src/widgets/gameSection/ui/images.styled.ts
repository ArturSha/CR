import styled, { keyframes } from 'styled-components';

export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`;

export const Brand = styled.img`
  width: clamp(160px, 30vw, 280px);
  user-select: none;
`;

export const SlotImg = styled.img`
  width: clamp(180px, 36vw, 320px);
  animation: ${float} 3.5s ease-in-out infinite;
  user-select: none;
  filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.6));
`;
