import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Props = {
  size: number;
  className?: string;
};

export const ArrowRight: React.FC<Props> = ({ size, className }) => {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
};
