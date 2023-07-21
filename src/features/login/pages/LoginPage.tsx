import { UsersRafiki } from "src/components/Icons/UsersRafiki";
import { LoginForm } from "src/features/login/components/LoginForm";
import { Logo } from "src/components/Logo";
import { useStore } from "src/store/store";

export const LoginPage = () => {
  const authUser = useStore(state => state.authUser);
  const onAuth = (isAuth: boolean) => authUser(isAuth);
  return (
    <div className="h-screen flex items-center basis-full">
      <div className="h-full inline-flex flex-col justify-center items-center grow">
        <Logo className="mb-[88px]" />

        <LoginForm onAuth={onAuth} />
      </div>

      <div className="h-full flex flex-col justify-center items-center grow bg-[#f8f8f8] max-lg:hidden">
        <div>
          <UsersRafiki />
        </div>
      </div>
    </div>
  );
};
