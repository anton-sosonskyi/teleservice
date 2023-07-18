import { useNavigate, useParams } from "react-router-dom";
import { Button } from "src/components/Button";
import { ButtonBack } from "src/components/ButtonBack";

const title = {
  questions: "Questions",
  "device-broken": "Device Broken",
  "device-stolen": "Device Lost or Stolen",
  "device-return": "Return Device",
  "device-contract": "Contract and Sim Card",
};

export const TicketPage = () => {
  const { ticketTopic } = useParams();
  const navigate = useNavigate();

  return (
    <section className="text-black">
      <div className="mb-[24px] mt-[8px]">
        <ButtonBack size={20} color="#f5f6f6"/>
      </div>

      <h1 className="mb-[24px] text-2xl font-semibold">How can we help you?</h1>

      <h2 className="mb-[32px] text-[18px] leading-[26px] font-bold">
        {title[ticketTopic as keyof typeof title]}
      </h2>

      <div className="pt-[16px] pb-[24px] absolute left-0 right-0 px-[32px] bg-white">
        <h3 className="mb-[16px] text-sm font-bold ">
          {title[ticketTopic as keyof typeof title]}
        </h3>

        <p className="mb-[16px] text-xs font-normal text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          nesciunt possimus vitae facilis eos debitis harum aspernatur
          voluptates cupiditate dignissimos sed magnam, alias soluta quasi
          excepturi eligendi fugit est inventore! Blanditiis ratione magni
          maxime. Autem vitae minima voluptatibus ipsum iusto, amet inventore
          exercitationem, maiores adipisci mollitia ab sint est dolorem.
        </p>

        <div className="w-full flex justify-end">
          <Button 
            className="py-[8px] px-[12px] border border-orange text-orange"
            onClick={() => navigate(`/support/${ticketTopic}/newTicket`)}
          >
            Open Ticket
          </Button>
        </div>
      </div>
    </section>
  );
};
