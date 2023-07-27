import { useLocation } from "react-router-dom";
import { ContractIcon } from "./icons/ContractIcon";
import { DeviceIcon } from "./icons/DeviceIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { OrderIcon } from "./icons/OrderIcon";
import { SupportIcon } from "./icons/SupportIcon";
import { useContext, useMemo } from "react";
import { ThemeContext } from "src/features/theme/ThemeContext";
import { MenuLink, MenuLinkParams } from "./MenuLink";

const links: MenuLinkParams[]  = [
  {
    name: "Device",
    icon: DeviceIcon,
    link:"/device",
  },
  {
    name: "Contract",
    icon: ContractIcon,
    link:"/contract",
  },
  {
    name: "Home",
    icon: HomeIcon,
    link:"/home",
  },
  {
    name: "Order",
    icon: OrderIcon,
    link:"/order",
  },
  {
    name: "Support",
    icon: SupportIcon,
    link:"/support",
  },
];

const menuColor = {
  "#ffffff": "#f5f6f6",
  "#f5f6f6": "#fff",
}

export const Menu = () => {
  const { pathname } = useLocation();
  const { currentColor } = useContext(ThemeContext);
  
  const menuBGColor = useMemo(() => menuColor[currentColor as keyof typeof menuColor], [currentColor, pathname]);

  return (
    <div className={`mt-auto fixed left-0 right-0 bottom-0 bg-[${menuBGColor}]`}>
      <nav className={`w-full h-[72px] flex justify-center items-center gap-[38px] bg-[${menuBGColor}]`}>
        {links.map((item) => <MenuLink key={item.name} menuLink={item} />)}
      </nav>
    </div>
  );
};
