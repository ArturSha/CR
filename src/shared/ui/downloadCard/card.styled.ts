import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 320px;
  border: 1.5px dashed #ec8c37;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: rgba(236, 140, 55, 0.04);

  @media (min-width: 480px) {
    max-width: 390px;
  }
`;
