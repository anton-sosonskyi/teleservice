import { useLocation } from "react-router-dom";
import { ContractIcon } from "./icons/ContractIcon";
import { DeviceIcon } from "./icons/DeviceIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { OrderIcon } from "./icons/OrderIcon";
import { SupportIcon } from "./icons/SupportIcon";
import { useContext, useMemo } from "react";
import { ThemeContext } from "src/features/theme/ThemeContext";
import { BottomMobNavLink } from "../BottomMobNavLink";

const links = [
  {
    name: "device",
    icon: DeviceIcon,
  },
  {
    name: "contract",
    icon: ContractIcon,
  },
  {
    name: "home",
    icon: HomeIcon,
  },
  {
    name: "order",
    icon: OrderIcon,
  },
  {
    name: "support",
    icon: SupportIcon,
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
        {links.map((item) => {
          const upperCased = item.name[0].toUpperCase() + item.name.slice(1);
          const isIconFilled = pathname.slice(0, item.name.length + 1).includes(item.name);
          return (
            <BottomMobNavLink link={`/${item.name}`} key={item.name}>
              <item.icon fill={isIconFilled ? "#198d99" : "#757474"} />

              <span className="text-[10px] leading-[12px] font-semibold">
                {upperCased}
              </span>
            </BottomMobNavLink>
          );
        })}
      </nav>
    </div>
  );
};
