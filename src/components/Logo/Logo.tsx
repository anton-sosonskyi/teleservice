import { Link } from "react-router-dom";

type Props = {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link to="/" className={`${className}`}>
      <img src="/images/logo.jpg" alt="teleservice" />
    </Link>
  );
};
