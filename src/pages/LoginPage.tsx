import { UsersRafiki } from "src/components/Icons/UsersRafiki";
import { LoginForm } from "src/components/LoginForm";
import { Logo } from "src/components/Logo";

export const LoginPage = () => {
  return (
    <div className="h-full flex items-center">
      <div className="h-full px-[32px] inline-flex flex-col justify-center items-center grow max-w-[608px] ">
        <Logo className="mb-[88px]" />

        <LoginForm />
      </div>

      <div className="h-full flex flex-col justify-center items-center grow bg-[#f8f8f8] max-lg:hidden">
        <div>
          <UsersRafiki />
        </div>
      </div>
    </div>
  );
};
