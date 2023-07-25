import { useContext, useEffect } from "react";
import { Button } from "src/components/Button";
import { ConfigurationMenu } from "src/components/ConfigurationMenu";
import { ServiceSection } from "src/features/home/components/ServiceSection";
import { ThemeContext } from "src/features/theme/ThemeContext";
import { DevicesSectionIcon } from "../icons/DevicesSectionIcon";
import { ContractsSectionIcon } from "../icons/ContractsSectionIcon";
import { TicketSectionIcon } from "../icons/TicketSectionIcon";

export const HomePage = () => {
  const { changeColor } = useContext(ThemeContext);

  useEffect(() => {
    changeColor("#ffffff");
  }, []);

  return (
    <section className="h-full w-full flex flex-col">
      <ConfigurationMenu />

      <h1 className="mb-[32px] text-black text-[22px] leading-[30px] font-semibold">
        Hello!
      </h1>

      <div className="w-full mb-[32px] flex flex-col gap-[24px]">
        <ServiceSection
          sectionName="Devices"
          title="Iphone 12 Pro"
          subTitle="Ordered 12.01.2023"
          icon={<DevicesSectionIcon />}
          link="/device"
        />

        <ServiceSection
          sectionName="Contracts"
          title="Contract"
          subTitle="Ordered 12.01.2023"
          icon={<ContractsSectionIcon />}
          link="/contract"
        />

        <ServiceSection
          sectionName="Tickets"
          title="What can we help you with?"
          subTitle="You have 1 ticket open"
          icon={<TicketSectionIcon />}
          link="/support"
        />
      </div>

      <Button
        type="button"
        className="w-full h-[48px] hover:shadow-lg bg-azure text-[#fefefe] text-base font-bold"
      >
        New order
      </Button>
    </section>
  );
};
