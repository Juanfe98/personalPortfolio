import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { DiFirebase, DiReact, DiAndroid, DiSass, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List} from './TechnologiesStyles';
import { ListItem2 } from './atoms/ListItem';

const Technologies = () =>  {

  const {t} = useTranslation("portfolio");

  return ( 
     <Section id="tech"> 
      <SectionDivider />
      <SectionTitle>{t`technologies`}</SectionTitle>
      <SectionText>
        {t`technologies_subtitle`}
      </SectionText>
      <List>
        {/* TODO: Create mongoDB to store items and add array for locales in subset */}
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
}


export default Technologies;
