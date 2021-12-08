import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcon } from '../global/SocialIcon';
import {capitalizeEachWord} from '../../helpers/functions';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  
  const {t} = useTranslation("portfolio");

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{capitalizeEachWord(t`call_me`)}</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{t`send_me_email`}</LinkTitle>
          <LinkItem href="mailto:juanmontana1398@gmail.com">juanmontana1398@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{t`slogan_text`} - Juan Felipe Montaña Perdomo</Slogan>
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
