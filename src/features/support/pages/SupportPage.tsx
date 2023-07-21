import { useContext, useEffect } from "react";
import { ButtonBack } from "src/components/ButtonBack";
import { ThemeContext } from "src/features/theme/ThemeContext";
import { useForm } from "react-hook-form";
import { Button } from "src/components/Button";
import { SearchInput } from "src/components/SearchInput/SearchInput";
import { SupportTicket } from "../components/SuportTicket";
import { ContractIcon } from "../icons/ContractIcon";
import { DeviceBrokenIcon } from "../icons/DeviceBrokenIcon";
import { DeviceLostIcon } from "../icons/DeviceLostIcon";
import { QuestionsIcon } from "../icons/QuestionsIcon";
import { ReturnDeviceIcon } from "../icons/ReturnDeviceIcon";

const ticketOptions = [
  {
    title: "Questions",
    url: "/questions",
    icon: QuestionsIcon,
  },
  {
    title: "Device Broken",
    url: "/broken-device",
    icon: DeviceBrokenIcon,
  },
  {
    title: "Device Lost or Stolen",
    url: "/device-stolen",
    icon: DeviceLostIcon,
  },
  {
    title: "Return Device",
    url: "/device-return",
    icon: ReturnDeviceIcon,
  },
  {
    title: "Contract and Sim Card",
    url: "/device-contract",
    icon: ContractIcon,
  },
];

export const SupportPage = () => {
  const { changeColor } = useContext(ThemeContext);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    changeColor("#f5f6f6");
  }, []);

  return (
    <section className="w-full h-full pt-[16px]">
      <div className="mb-[24px]">
        <ButtonBack size={20} color="#f5f6f6" />
      </div>

      <h2 className="mb-[16px] text-[22px] leading-[30px] font-semibold text-black-dark">
        How can we help you?
      </h2>

      <SearchInput
        control={control}
        name="search"
        placeHolder="Search tickets"
      />

      <div className="flex justify-center items-center">
        <span className="my-[24px] text-xs text-grey font-normal align-center">
          Or choose an option below
        </span>
      </div>

      <div className="mb-[40px] flex flex-wrap gap-[24px]">
        {ticketOptions.map(({ title, url, icon }) => (
          <SupportTicket
            key={title}
            title={title}
            url={url}
            renderIcon={icon}
          />
        ))}
      </div>

      <Button
        type="button"
        className="mb-[108px] w-full h-[48px] hover:shadow-lg bg-azure text-[#fefefe] text-base font-bold"
      >
        All Tickets
      </Button>
    </section>
  );
};
