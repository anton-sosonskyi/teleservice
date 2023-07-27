import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import images from "src/assets/index";
import { Button } from "src/components/Button";
import { ButtonBack } from "src/components/ButtonBack";
import { ThemeContext } from "src/features/theme/ThemeContext";

export const PageNotFound = () => {
  const { changeColor } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    changeColor("#ffffff");
  }, []);

  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-full mt-2 mb-[72px]">
        <ButtonBack size={20} />
      </div>

      <div className="w-full h-[280px]">
        <img
          className="w-full h-full"
          src={images.ErrorImg}
          alt="error"
        />
      </div>

      <h2 className="mb-6 text-[24px] leading-[32px] font-bold text-[#263238]">
        Oops!
      </h2>

      <p className="mb-8 text-sm font-semibold text-center text-[#6C6D6E]">
        We can’t seem to find the page you are looking for
      </p>

      <Button
        className="py-[10px] px-4 text-base font-bold border border-azure text-azure"
        onClick={() => navigate("/home")}
      >
        Back to Homepage
      </Button>
    </div>
  );
};
