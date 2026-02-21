import license from '@/shared/assets/images/license.png';
import Age18PlusIcon from '@/shared/assets/icons/Age18PlusIcon.svg';
import { DownloadCard } from '@/shared/ui/downloadCard';
import { Divider } from '@/shared/ui/divider';
import { Box } from '@/shared/ui/box';
import { Typography } from '@/shared/ui/typography';
import { SocialBtn } from './socialBtn.styled';
import { LanguageSwitcher } from '@/feature/languageSwitcher';
import { FooterWrapper } from './footer.styled';
import { Container } from '@/shared/ui/container';
import type { languageType } from '@/shared/libs';
import { useTranslation } from '@/shared/libs';
import { mascots } from './mascots';
import { socialLinks } from './socialLinks';

export const Footer = () => {
  const { t, i18n } = useTranslation('footer');
  const lang = i18n.language as languageType;
  return (
    <FooterWrapper $lang={lang}>
      <Container maxWidth="xxl">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', xl: 'row' }}
          alignItems="center"
          gap={6.5}
          marginBottom={4}
        >
          <Box display={{ xs: 'none', xl: 'block' }}>
            <img src={mascots[lang] ?? mascots['en']} alt="Casino Royale" width={240} />
          </Box>
          <DownloadCard />
          <Box
            display="flex"
            alignItems="center"
            flexDirection={{ xs: 'column', xl: 'row-reverse' }}
            gap={'52px'}
            maxWidth={{ xs: 600, xl: '100%' }}
            width="100%"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={7.5}
              width="100%"
              alignItems={{ xs: 'center', xl: 'flex-end' }}
            >
              <LanguageSwitcher />

              <Box
                textAlign={{ xs: 'center', xl: 'right' }}
                gap={1.5}
                flexDirection="column"
                display="flex"
              >
                <Typography>{t('socialMedia')}</Typography>
                <Box display="flex" gap={0.5}>
                  {socialLinks.map((link) => (
                    <SocialBtn
                      key={link.label}
                      target="_blank"
                      to={link.href}
                      aria-label={link.label}
                    >
                      <img src={link.icon} alt={link.label} />
                    </SocialBtn>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              maxWidth={{ xs: 286, md: 600, xl: 360 }}
              width="100%"
              display="flex"
              gap={3}
              flexDirection={{ xs: 'column', md: 'row', xl: 'column' }}
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'space-between' }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', xl: 'row' }}
                alignItems="center"
                gap={1.5}
                width="100%"
                maxWidth={286}
              >
                <Age18PlusIcon
                  style={{
                    color: 'white',
                    opacity: 0.4,
                  }}
                  width={58}
                  height={58}
                />
                <Typography>{t('age18Plus')}</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', xl: 'row' }}
                alignItems="center"
                gap={1.5}
                width="100%"
                maxWidth={286}
              >
                <img src={license} alt="license" width={58} height={58} />
                <Typography textAlign={{ xs: 'center', xl: 'left' }}>{t('license')}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider variant="middle" flexItem />
      </Container>
    </FooterWrapper>
  );
};
