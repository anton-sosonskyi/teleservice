import { ButtonBack } from "src/components/ButtonBack";
import { NewTicketForm } from "../components/NewTicketForm/NewTicketForm";
import { useContext, useEffect } from "react";
import { ThemeContext } from "src/features/theme/ThemeContext";

export const NewTicketPage = () => {
  const { changeColor } = useContext(ThemeContext);

  useEffect(() => {
    changeColor("#f5f6f6");
  }, []);

  return (
    <section>
      <div className="mt-[10px] mb-[24px]">
        <ButtonBack size={20} />
      </div>

      <h1 className="text-[22px] leading-[30px] font-semibold">
        New ticket
      </h1>
      <NewTicketForm />
    </section>
  );
};
