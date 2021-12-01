import React from 'react'
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation';
import { LanguagesContainer } from '../HeaderStyles';

var spanishImg = '/images/spanish.png';
var englishImg = '/images/english.png';

export const LanguagePicker = () => {
  const {locale, locales} = useRouter();
  const { t } = useTranslation("portfolio");
  const changeLanguage = async () => {
    const test = locales.filter(item => item !== locale);
    setLanguage(test[0]);
  }

  return (
    <LanguagesContainer onClick={changeLanguage}>
      <img 
        src={locale === 'en' ? englishImg : spanishImg} 
        width="30px" 
        height="30px"
        alt="country flag"
      />
      <span>{t`change language`}</span>
    </LanguagesContainer>
  )
}
export default LanguagePicker
