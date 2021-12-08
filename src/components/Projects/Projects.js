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
import { projects } from '../../constants/constants';


const Projects = () => {
  
  var {t} = useTranslation("portfolio");
  
  return ( 
    <Section noPadding id="projects">
      <SectionDivider />
        <SectionTitle main>{t`projects`}</SectionTitle>
        <GridContainer>
          {projects.map(({id, image,title,description, tags, source, visit}) => 
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map(tag => 
                    <Tag key={Math.random()}>{tag}</Tag>
                    )}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )}
        </GridContainer>
    </Section>
  );
}

export default Projects;