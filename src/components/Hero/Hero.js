import React, {useEffect, useState} from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { 
  Section, 
  SectionText, 
  SectionTitle } 
from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { TypingAnimation } from '../global/TypingAnimation'
import { LeftSection } from './HeroStyles';



const Hero = (props) => {
  const { t } = useTranslation("portfolio");
  const { locale } = useRouter();
  const [phrases, setPhrases] = useState([
    t`web developer`,
    t`mobile developer`,
    t`freelancer`,
  ]);
  
  useEffect(() => {
    setPhrases([
      t`web developer`,
      t`mobile developer`,
      t`freelancer`,
    ]);
  },[locale])
  
  return(
    <Section row noPadding>
      <LeftSection>
        <SectionTitle main center>
          {t`welcome`} {t`common:to`} <br/>
          {t`my_portfolio`}
        </SectionTitle>
        <SectionText size="32px">
          {t`i am a`} <TypingAnimation phrases={phrases}/>
        </SectionText>
        <Button onClick={props.handleClick}>{t`download cv`}</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;