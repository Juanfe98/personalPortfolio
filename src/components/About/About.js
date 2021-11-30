import React from "react";
import { Section, SectionDivider, SectionTitle, SectionText, Hr } from '../../styles/GlobalComponents';
import {SectionRow, Img} from './AboutStyles';


export function About() {
  return (
    <Section>
      <SectionDivider/>
      <SectionTitle main>About Me</SectionTitle>
      <SectionRow> 
        <Img 
          src="/images/home_img.jpg" 
          alt="Personal" 
        />
        <SectionText>
          Motivated fullstack developer with a technology computer bachelor degree and 4 years
          of experience in software development.
          <Hr />
          Really enjoy to code, travel and learn new things about other cultures.
        </SectionText>
      </SectionRow>
    </Section>
  );
}
