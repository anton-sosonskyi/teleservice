import { Button } from "src/components/Button";
import { ServiceSection } from "src/components/ServiceSection";

export const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="mb-[32px] text-black text-[22px] leading-[30px] font-semibold">
        Hello!
      </h1>

      <div className="w-full mb-[32px] flex flex-col gap-[24px]">
        <ServiceSection sectionTitle="Your Devices" />
        <ServiceSection sectionTitle="Your Contracts" />
        <ServiceSection sectionTitle="Your Support Tickets" />
      </div>

      <Button
        type="button"
        className="w-full h-[48px] hover:shadow-lg bg-azure text-[#fefefe] text-base font-bold"
      >
        New order
      </Button>
    </div>
  );
};
