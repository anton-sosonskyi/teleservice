import { useContext, useEffect } from "react";
import { Button } from "src/components/Button";
import { ConfigurationMenu } from "src/components/ConfigurationMenu";
import { ServiceSection } from "src/features/home/components/ServiceSection";
import { ServiceSectionContent } from "src/features/home/components/ServiceSectionContent";
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
    <section className="h-full w-full flex flex-col justify-center">
      <ConfigurationMenu />

      <h1 className="mb-[32px] text-black text-[22px] leading-[30px] font-semibold">
        Hello!
      </h1>

      <div className="w-full mb-[32px] flex flex-col gap-[24px]">
        <ServiceSection>
          <ServiceSectionContent
            sectionName="Devices"
            infoToDisplay={{
              title: "Iphone 12 Pro",
              subTitle: "Ordered 12.01.2023",
            }}
            renderIcon={() => <DevicesSectionIcon />}
            link="device"
          />
        </ServiceSection>

        <ServiceSection>
          <ServiceSectionContent
            sectionName="Contracts"
            infoToDisplay={{
              title: "Contract",
              subTitle: "Ordered 12.01.2023",
            }}
            renderIcon={() => <ContractsSectionIcon />}
            link="contract"
          />
        </ServiceSection>

        <ServiceSection>
          <ServiceSectionContent
            sectionName="Tickets"
            infoToDisplay={{
              title: "What can we help you with?",
              subTitle: "You have 1 ticket open",
            }}
            renderIcon={() => <TicketSectionIcon />}
            link="support"
          />
        </ServiceSection>
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
