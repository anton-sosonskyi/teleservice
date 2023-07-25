import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { validationSchema } from "./LoginForm.schema";
import { useNavigate } from "react-router-dom";
import images from "src/assets/index";
import { theme } from "src/helpers/helpers";
import { FormInput } from "src/components/FormInput";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "src/components/Button";

type Fields = {
  email: string;
  password: string;
};

type Props = {
  onAuth: (isAuth: boolean) => void;
}

export const LoginForm: React.FC<Props> = ({ onAuth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { control, handleSubmit } = useForm<Fields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Fields> = () => {
    navigate("/home");
    onAuth(true);
  };

  return (
    <div className="w-full max-w-[400px] flex flex-col gap-[24px]">
      <h2 className="mb-[24px] text-[22px] leading-[30px] font-semibold">
        Log in
      </h2>
      
      <ThemeProvider theme={theme}>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[56px] w-full flex flex-col items-center gap-[14px]">
            <FormInput
              control={control}
              type="text"
              name="email"
              placeHolder="Enter your email"
            />

            <FormInput
              control={control}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeHolder="Enter your password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>

          <Button
            type="submit"
            className="w-full h-[48px] hover:shadow-lg bg-azure text-[#fefefe] text-base font-bold"
          >
            Login
          </Button>
        </form>
      </ThemeProvider>

      <div className="w-full text-center overflow-hidden">
        <span className="line text-[#757474]">or</span>
      </div>

      <Button
        type="button"
        className="w-full h-[48px] pl-[20px] flex items-center gap-[16px] bg-[#fefefe] text-black text-base font-semibold border border-[#e0e0e0] shadow-lg"
      >
        <img src={images.AzureLogoImg} alt="Azure" />
        Continue with Azure AD
      </Button>
    </div>
  );
};
