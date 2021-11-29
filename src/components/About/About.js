import React from "react";
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          quae vitae optio nobis impedit cum dolores in incidunt.
          Praesentium quo, maxime ad illum nulla voluptatem nam temporibus,
          voluptatibus id eligendi esse cupiditate dignissimos porro.
        </SectionText>
      </SectionRow>
    </Section>
  );
}
