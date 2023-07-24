import { Link } from "react-router-dom";
import images from "src/assets/index";

type Props = {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link to="/" className={`${className}`}>
      <img src={images.LogoImg} alt="teleservice" />
    </Link>
  );
};
