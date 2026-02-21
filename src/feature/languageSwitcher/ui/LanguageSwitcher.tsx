import { useState, useEffect } from 'react';
import type { SelectChangeEvent } from '@mui/material';
import type { languageType } from '@/shared/libs';
import { i18n, languages, useTranslation } from '@/shared/libs';
import { Select } from '@/shared/ui/select';
import { MenuItem } from '@/shared/ui/menuItem';
import { LangSelectWrapper } from './selectWrapper.styled';
import { languageFlags } from './languageFlags';

const isValidLanguage = (lang: string): lang is languageType => {
  return languages.includes(lang as languageType);
};

export const LanguageSwitcher = () => {
  const getInitialLanguage = (): languageType => {
    const stored = localStorage.getItem('i18nextLng');
    return isValidLanguage(stored ?? '') ? (stored as languageType) : 'en';
  };

  const [selectedLocale, setSelectedLocale] = useState<languageType>(getInitialLanguage);
  const { t } = useTranslation('languages');
  const onChange = (e: SelectChangeEvent) => {
    const lang = e.target.value as languageType;
    i18n.changeLanguage(lang);
    setSelectedLocale(lang);
    localStorage.setItem('i18nextLng', lang);
    window.location.reload();
  };

  useEffect(() => {
    document.documentElement.lang = selectedLocale;
  }, [selectedLocale]);

  return (
    <LangSelectWrapper>
      <Select
        value={selectedLocale}
        onChange={onChange}
        size="small"
        sx={{
          '& .MuiSelect-select': {
            alignItems: 'center',
            display: 'flex',
            gap: 1,
          },
          '&.MuiOutlinedInput-root': {
            width: '100%',
            borderRadius: '12px',
            background: '#1d2952ff',
            color: '#d4dff8',
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              background: '#364c8fff',
              color: '#d4dff8',
            },
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang} value={lang} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img width={24} height={24} src={languageFlags[lang]} alt={lang} />
            {t(lang)}
          </MenuItem>
        ))}
      </Select>
    </LangSelectWrapper>
  );
};
