import { useParams } from "react-router-dom";
import { AttributesList } from "src/components/AttributesList";
import { ButtonBack } from "src/components/ButtonBack";
import { DetailsSection } from "src/components/DetailsSection";
import { useStore } from "src/store/store";
import { TicketDetailsType } from "src/types/TicketType";

const attributes: {title: string, key: keyof TicketDetailsType}[] = [
  {title: "Created on", key: "date"},
  {title: "Days since creation", key: "daysPass"},
  {title: "Ticket type", key: "ticketType"},
  {title: "Contract", key: "contract"},
  {title: "Device", key: "device"},
  {title: "Description", key: "description"},
  {title: "Status", key: "status"},
];

export const TicketDetailsPage = () => {
  const ticket = useStore((state) => state.ticket);
  const { ticketId } = useParams();

  return (
    <section>
      <div className="mb-[12px] mt-[8px] flex items-center">
        <ButtonBack size={20}  />
      </div>

      <h1 className="mb-[24px] text-[22px] leading-[30px] font-semibold text-black">
        {`Ticket #${ticketId}`}
      </h1>

      <DetailsSection title="Product Attributes">
        <AttributesList object={{...ticket, daysPass: 1}} attributes={attributes} verticalSpace="16px" />
      </DetailsSection>
    </section>
  );
};
