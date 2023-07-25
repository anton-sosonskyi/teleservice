import { Button } from "src/components/Button";
import { ButtonBack } from "src/components/ButtonBack";
import { SortPriceInput } from "src/components/SortPriceInput";

import { useContext, useEffect } from "react";
import { ThemeContext } from "src/features/theme/ThemeContext";
import { useStore } from "src/store/store";
import { DeviceLink } from "../components/DeviceLink";

export const DevicesPage = () => {
  const userDevices = useStore((state) => state.userDevices);
  const { changeColor } = useContext(ThemeContext);

  useEffect(() => {
    changeColor("#f5f6f6");
  }, []);

  return (
    <section className="w-full h-full pt-[16px]">
      <div className="mb-[24px]">
        <ButtonBack size={32} />
      </div>

      <h1 className="mb-[20px] text-[22px] leading-[30px] text-semibold text-black">
        My Devices
      </h1>

      <div className="mb-[24px]">
        <SortPriceInput />
      </div>

      <div className="mb-[48px]">
        {userDevices.map((device) => (
            <DeviceLink
              key={device.id}
              id={device.id}
              deviceName={device.model}
              orderDate={device.orderDate}
            />
          ))}
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
