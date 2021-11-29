import React from 'react'
import {SocialIcons} from '../HeaderStyles';

export const SocialIcon = ({redirectTo, Icon, iconSize="3rem"}) => {
  return (
    <>
       <SocialIcons href={redirectTo}>
        <Icon size={iconSize} />
      </SocialIcons>
    </>
  )
}
