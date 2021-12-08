import React from "react";
import { Section, SectionDivider, SectionTitle, SectionText, Hr } from '../../styles/GlobalComponents';
import useTranslation from 'next-translate/useTranslation';
import {SectionRow, Img} from './AboutStyles';


export function About() {
  const {t} = useTranslation("portfolio");
  return (
    <Section>
      <SectionDivider/>
      <SectionTitle main>{t`about`}</SectionTitle>
      <SectionRow> 
        <Img 
          src="/images/home_img.jpg" 
          alt="Personal" 
        />
        <SectionText>
          {t`tech_desc`}
          <Hr />
          {t`personal_desc`}
        </SectionText>
      </SectionRow>
    </Section>
  );
}
