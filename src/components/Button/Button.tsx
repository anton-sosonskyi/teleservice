
type Props = {
  type: "submit" | "button";
  className?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ type, className, children }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
