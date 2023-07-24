import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

type Props = {
  color?: string;
  size: number;
}

export const ButtonBack: React.FC<Props> = ({ color, size }) => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      className="flex flex-col justify-center items-center"
      style={{height: size, width: size, backgroundColor: color}}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewOutlinedIcon  fontSize='medium' />
    </Button>
  );
};
