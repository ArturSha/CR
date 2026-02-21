import styled from 'styled-components';
import type { languageType } from '@/shared/libs';

const gradients: Record<languageType, string> = {
  en: 'linear-gradient(270deg, #06225d 0%, #02011f 37.03%), #ffffff',
  ru: 'linear-gradient(270deg, #1a0a3d 0%, #0d0020 40%), #ffffff',
  de: 'linear-gradient(270deg, #0a2e1a 0%, #011208 40%), #ffffff',
  es: 'linear-gradient(270deg, #3d1a00 0%, #1a0500 40%), #ffffff',
  tr: 'linear-gradient(270deg, #3d0a0a 0%, #1a0000 40%), #ffffff',
};

interface FooterWrapperProps {
  $lang?: languageType;
}

export const FooterWrapper = styled.footer<FooterWrapperProps>`
  background: ${({ $lang }) => gradients[$lang ?? 'en'] ?? gradients['en']};
  padding-top: 60px;
  padding-bottom: 12px;
  transition: background 0.5s ease;
`;
