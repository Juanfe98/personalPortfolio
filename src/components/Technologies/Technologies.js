import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List} from './TechnologiesStyles';
import { ListItem2 } from './atoms/ListItem';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of tecnolgies, in software development from mobile to web development in back-end and front-end
    </SectionText>
    <List>
      <ListItem2 
        Icon={DiFirebase} 
        title="Databases" 
        paragraph="Non relational databases like mongoDB and relational databases like MySQL and informix."
      />
      <ListItem2 
        Icon={DiReact} 
        title="React.js" 
        paragraph="Multiple applications developed using react.js, working with styled components, Sass and more."
      />
      <ListItem2 
        Icon={DiAndroid} 
        title="React Native" 
        paragraph="Mobile applications developed using React Native, maps, google auth, QR readers, complex informative apps."
      />
    </List>
  </Section>
);

export default Technologies;
