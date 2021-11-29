import React from 'react'
import { ListContainer, ListItem, ListParagraph, ListTitle } from '../TechnologiesStyles';

export const ListItem2 = ({Icon, iconSize = "4rem", title, paragraph}) => {
  return (
    <ListItem>
        <Icon size={iconSize} />
        <ListContainer>
          <ListTitle>
            {title}
          </ListTitle>
          <ListParagraph>
            {paragraph}
          </ListParagraph>
        </ListContainer>
      </ListItem>
  )
}
