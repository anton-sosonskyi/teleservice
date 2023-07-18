import { NavLink } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  link: string;
}

export const BottomMobNavLink: React.FC<Props> = (props) => {
  return (
    <NavLink
      to={props.link}
      className="flex flex-col justify-center items-center gap-[8px]"
      style={({ isActive }) => ({
        color: isActive ? "#198d99" : "#757474",
      })}
      {...props}
    >
      {props.children}
    </NavLink>
  );
};
