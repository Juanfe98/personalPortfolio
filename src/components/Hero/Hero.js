import React from 'react';

import { 
  Section, 
  SectionText, 
  SectionTitle } 
from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { TypingAnimation } from '../global/TypingAnimation'
import { LeftSection } from './HeroStyles';

const phrases = [
  'Web Developer',
  'Mobile Developer',
  'Freelancer',
]

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText size="32px">
        I'm a <TypingAnimation phrases={phrases}/>
      </SectionText>
      <Button onClick={props.handleClick}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;