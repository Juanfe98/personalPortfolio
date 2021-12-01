import React from 'react'
import Link from 'next/link';
import { NavLink } from '../HeaderStyles';

export const NavbarItem = ({redirectTo, name}) => {
  return (
    <>
     <li style={{textAlign: 'center'}}>
        <Link href={redirectTo}>
          <NavLink>{name}</NavLink>
        </Link>
      </li>
    </>
  )
}
