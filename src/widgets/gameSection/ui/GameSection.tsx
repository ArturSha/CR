import { useGameContext, useTranslation } from '@/shared/libs';
import brand from '@/shared/assets/images/brand.png';
import slot from '@/shared/assets/images/slot.png';
import bg from '@/shared/assets/images/background.png';
import { Button } from '@/shared/ui/button';
import CloseIcon from '@mui/icons-material/Close';
import { GameIframe } from './gameIframe.styled';
import { Box } from '@/shared/ui/box';
import { Brand, SlotImg } from './images.styled';

const GAME_URL =
  'https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en';

export const GameSection = () => {
  const { isGameOpen, setIsGameOpen } = useGameContext();
  const { t } = useTranslation();

  if (isGameOpen) {
    return (
      <Box position="relative" width="100%" height="100svh">
        <Button
          onClick={() => setIsGameOpen(false)}
          aria-label="Close game"
          sx={{
            position: 'absolute',
            top: 6,
            left: 6,
            zIndex: 10,
            background: 'rgba(10, 16, 40, 0.75)',
            color: '#fff',
            '&:hover': {
              background: 'rgba(236, 140, 55, 0.85)',
            },
          }}
        >
          <CloseIcon />
        </Button>
        <GameIframe src={GAME_URL} title="Book of Ra Deluxe" allowFullScreen />
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        background: `url(${bg}) center / cover no-repeat`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <Brand src={brand} alt="Casino Royale" />
        <SlotImg src={slot} alt="Slots 777" />
        <Button variant="cta" onClick={() => setIsGameOpen(true)}>
          {t('openTheGame')}
        </Button>
      </Box>
    </Box>
  );
};
