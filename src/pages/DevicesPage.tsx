import { Button } from "src/components/Button";
import { ButtonBack } from "src/components/ButtonBack";
import { CustomSelect } from "src/components/CustomSelect";
import { DeviceItem } from "src/components/DeviceItem";

export const DevicesPage = () => {
  return (
    <section className="w-full h-full pt-[16px]">
      <div className="mb-[24px]">
        <ButtonBack />
      </div>

      <h1 className="mb-[20px] text-[22px] leading-[30px] text-semibold text-black">
        My Devices
      </h1>
      
      <div className="mb-[24px]">
        <CustomSelect />
      </div>

      <div className="mb-[48px]">
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
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
