import React from 'react';
import { DiFirebase, DiReact, DiAndroid, DiSass, DiNodejsSmall } from 'react-icons/di';
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
       <ListItem2 
        Icon={DiSass} 
        title="Sass" 
        paragraph="Sass preprocessor incorated to multiple projects to work easier and in a optimized way the applications styles."
      />
       <ListItem2 
        Icon={DiNodejsSmall} 
        title="Node.js - express" 
        paragraph="Create API-REST to connect the front-end. experience working with libraries as JWT for authentification, FS for file manipulation and more."
      />
    </List>
  </Section>
);

export default Technologies;
