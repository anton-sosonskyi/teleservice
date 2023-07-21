import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import { useNavigate } from 'react-router-dom';
import React from 'react';
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
      className={`w-[${size}px] h-[${size}px] flex flex-col justify-center items-center bg-[${color ? color : "" }]`}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewOutlinedIcon  fontSize='medium' />
    </Button>
  );
};
