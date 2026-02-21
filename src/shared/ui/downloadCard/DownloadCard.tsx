import { Box } from '../box';
import { Card } from './card.styled';
import brand from '@/shared/assets/images/brand.png';
import { Typography } from '../typography';
import { Button } from '../button';
import DownloadIcon from '@mui/icons-material/Download';
import { useTranslation } from '@/shared/libs';

export const DownloadCard = () => {
  const { t } = useTranslation('translation');
  return (
    <Card>
      <img src={brand} alt="Casino Royale" width={176} />
      <Box textAlign="center">
        <Typography color="#fff" variant="h5">
          {t('downloadCard.title')}
        </Typography>
        <Typography color="#BABABA" variant="body1">
          {t('downloadCard.subtitle')}
        </Typography>
      </Box>
      <Button variant="cta" startIcon={<DownloadIcon />}>
        {t('downloadCard.button')}
      </Button>
    </Card>
  );
};
