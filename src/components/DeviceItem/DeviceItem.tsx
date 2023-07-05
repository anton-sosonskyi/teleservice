import { ArrowRight } from "../ArrowRight";
import { DeviceIcon } from "./icons/DeviceIcon";

export const DeviceItem = () => {
  return (
    <div className="py-[12px] flex items-center gap-[8px] border-b-[1px] border-[#e5e5e5]">
      <DeviceIcon />
      <div>
        <h4 className="text-[14px] leading-[16px] font-medium text-black">
          IPhone 12 Pro
          </h4>
        <span className="text-[12px] leading-[14px] font-normal text-[#757474]">
          Ordered 12/01/2021
        </span>
      </div>

      <ArrowRight size={24} className="ml-auto h-[24px] bg-[#fff] rounded" />
    </div>
  );
};
