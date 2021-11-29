import Link from 'next/link';
import React from 'react';
import { FaMountain } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { 
  Container, 
  Div1, 
  Div2, 
  Div3, 
  Span
} from './HeaderStyles';
import { NavbarItem } from './atoms/NavbarItem';
import { SocialIcon } from '../global/SocialIcon';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="https://google.com">
        <a style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', marginBottom: 15, columnGap: 20}}>
          <FaMountain size="3rem" />
          <Span>JFMP</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <NavbarItem redirectTo="#projects" name="Projects" />
      <NavbarItem redirectTo="#tech" name="Technologies" />
      <NavbarItem redirectTo="#about" name="About" />
    </Div2>

    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
