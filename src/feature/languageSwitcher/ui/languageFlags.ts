import type { languageType } from '@/shared/libs';
import EnFlag from '@/shared/assets/icons/britishFlag.png';
import RuFlag from '@/shared/assets/icons/russianFlag.png';
import DeFlag from '@/shared/assets/icons/germanFlag.png';
import EsFlag from '@/shared/assets/icons/spanishFlag.png';
import TrFlag from '@/shared/assets/icons/turkishFlag.png';

export const languageFlags: Record<languageType, string> = {
  en: EnFlag,
  ru: RuFlag,
  de: DeFlag,
  es: EsFlag,
  tr: TrFlag,
};
