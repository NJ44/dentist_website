import { useLanguage } from '../contexts/LanguageContext';
import { translations as heTranslations } from '../translations/he';

export const useTranslation = () => {
  const { language } = useLanguage();
  // We only support Hebrew now, but we keep the structure for compatibility
  const t = heTranslations;

  return { t, language };
};

