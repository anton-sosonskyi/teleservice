import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Button } from "../Button/Button";
import { useNavigate } from 'react-router-dom';


export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <Button
      type={"button"}
      className="w-[32px] h-[32px] flex flex-col justify-center items-center bg-[#fff]"
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewOutlinedIcon  fontSize='medium' />
    </Button>
  );
};
