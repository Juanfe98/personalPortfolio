import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { 
  BlogCard, 
  CardInfo, 
  ExternalLinks, 
  GridContainer, 
  HeaderThree, 
  Tag, 
  TagList, 
  TitleContent, 
  UtilityList, 
  Img 
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, Hr } from '../../styles/GlobalComponents';

const Projects = ({projects}) => {  
  const {lang, t} = useTranslation("portfolio");
  return ( 
    <Section noPadding id="projects">
      <SectionDivider />
        <SectionTitle main>{t`projects`}</SectionTitle>
        <GridContainer>
          {projects.map(({_id, mainImage, tags, code, link, i18n}) => 
            <BlogCard key={_id}>
              <Img src={mainImage} />
              <TitleContent>
                <HeaderThree title>{i18n[lang].name}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{i18n[lang].detail}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map(tag => 
                    <Tag key={Math.random()}>{tag}</Tag>
                    )}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={link}>Demo</ExternalLinks>
                <ExternalLinks href={code}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )}
        </GridContainer>
    </Section>
  );
}

export default Projects;