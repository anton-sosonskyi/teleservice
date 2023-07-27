import React from 'react';
import { useMatch } from 'react-router-dom';
import { BottomMobNavLink } from '../BottomMobNavLink';

export type MenuLinkParams = {
  name: string;
  icon: React.FC<{ fill?: string }>;
  link: string;
}

type Props = {
  menuLink: MenuLinkParams;
}

export const MenuLink: React.FC<Props> = ({ menuLink }) => {
  const { link, name, icon: Icon } = menuLink;
  const match = useMatch(`${link}/*`);
  
  return (
    <BottomMobNavLink link={link} key={name}>
      <Icon fill={match?.pathnameBase === link ? "#198d99" : "#757474"} />
      <span className="text-[10px] leading-[12px] font-semibold">
        {name}
      </span>
    </BottomMobNavLink>
  );
}