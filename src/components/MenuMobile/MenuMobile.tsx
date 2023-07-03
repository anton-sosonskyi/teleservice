import { NavLink, useLocation } from "react-router-dom";
import { ContractIcon } from "./icons/ContractIcon";
import { DeviceIcon } from "./icons/DeviceIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { OrderIcon } from "./icons/OrderIcon";
import { SupportIcon } from "./icons/SupportIcon";
import { CustomNavLink } from "../CustomNavLink";

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

export const MenuMobile = () => {
  const { pathname } = useLocation();
  return (
    <nav className="w-full h-[72px] flex justify-center items-center gap-[38px]">
      {links.map((item) => {
        const upperCased = item.name[0].toUpperCase() + item.name.slice(1);
        const isIconFilled = pathname === `/${item.name}`;
        return (
          <CustomNavLink link={`/${item.name}`} {...{ key: item.name }}>
            <item.icon fill={isIconFilled ? "#198d99" : "#757474"} />

            <span className="text-[10px] leading-[12px] font-semibold">
              {upperCased}
            </span>
          </CustomNavLink>
        );
      })}
    </nav>
  );
};
