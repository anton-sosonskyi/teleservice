import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type Props = {
  size: number;
  bgColor?: string;
  className?: string;
}

export const ArrowRight: React.FC<Props> = ({ size, bgColor, className }) => {
  return (
    <div className={`w-[${size}px] h-[${size}px] flex justify-center items-center ${className}`}>
      <KeyboardArrowRightIcon />
    </div>
  );
};
