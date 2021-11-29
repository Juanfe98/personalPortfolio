import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcon } from '../global/SocialIcon';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:juanmontana1398@gmail.com">juanmontana1398@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Writing code to make live simpler</Slogan>
        </CompanyContainer>
          <SocialIcon 
            Icon={AiFillGithub} 
            redirectTo="https://github.com/Juanfe98" 
          />
          <SocialIcon 
            Icon={AiFillLinkedin} 
            redirectTo="https://www.linkedin.com/in/juan-monta%C3%B1a/" 
          />
          <SocialIcon 
            Icon={AiFillInstagram} 
            redirectTo="https://www.instagram.com/juanfmp98/" 
          />
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
