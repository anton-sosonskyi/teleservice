import { ArrowRight } from "src/components/ArrowRight";
import { DeviceIcon } from "./icons/DeviceIcon";
import { Link } from "react-router-dom";

type Props = {
  deviceName: string;
  orderDate: string;
  id: number;
}

export const DeviceLink: React.FC<Props> = ({ deviceName, orderDate, id }) => {
  return (
    <Link to={`/device/${id}`}>
      <div className="py-[12px] flex items-center gap-[8px] border-b-[1px] border-[#e5e5e5]">
        <DeviceIcon />
        <div>
          <h4 className="text-[14px] leading-[16px] font-medium text-black">
            {deviceName}
          </h4>
          <span className="text-[12px] leading-[14px] font-normal text-[#757474]">
            {orderDate}
          </span>
        </div>

        <ArrowRight size={24} className="ml-auto h-[24px] bg-[#fff] rounded" />
      </div>
    </Link>
  );
};
