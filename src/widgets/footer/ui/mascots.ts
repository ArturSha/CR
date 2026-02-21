import type { languageType } from '@/shared/libs';
import man from '@/shared/assets/images/man.png';
import slotGame from '@/shared/assets/images/slotGame.png';
import slotGame1 from '@/shared/assets/images/slotGame1.png';
import dice from '@/shared/assets/images/dice.png';
import roulette from '@/shared/assets/images/roulette.png';

export const mascots: Record<languageType, string> = {
  en: man,
  de: slotGame,
  ru: slotGame1,
  es: dice,
  tr: roulette,
};
