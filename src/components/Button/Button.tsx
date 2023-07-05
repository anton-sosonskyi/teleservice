
type Props = {
  type: "submit" | "button";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
