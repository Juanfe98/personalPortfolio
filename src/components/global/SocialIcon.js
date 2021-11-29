import React from 'react'
import {SocialIcons} from '../Header/HeaderStyles';

export const SocialIcon = ({redirectTo, Icon, iconSize="3rem"}) => {
  return (
    <>
       <SocialIcons href={redirectTo}>
        <Icon size={iconSize} />
      </SocialIcons>
    </>
  )
}
