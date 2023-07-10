import { ComponentProps } from "react";

type Props = {
  children?: React.ReactNode;
} & ComponentProps<"button">

export const Button: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
