import InstagramIcon from '@/shared/assets/icons/instagram.png';
import TelegramIcon from '@/shared/assets/icons/telegram.png';
import XIcon from '@/shared/assets/icons/x.png';
import EmailIcon from '@/shared/assets/icons/mail.png';

export const socialLinks = [
  {
    href: 'https://www.instagram.com/',
    icon: InstagramIcon,
    label: 'Instagram',
  },
  {
    href: 'https://t.me/',
    icon: TelegramIcon,
    label: 'Telegram',
  },
  {
    href: 'https://x.com/',
    icon: XIcon,
    label: 'X (Twitter)',
  },
  {
    href: 'mailto:email@example.com',
    icon: EmailIcon,
    label: 'Email',
  },
] as const;
