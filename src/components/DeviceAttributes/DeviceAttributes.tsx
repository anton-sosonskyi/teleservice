import { Product } from "src/types/ProductType";

type Props = {
  product: Product;
};

const attributes = [
  {title:"Product", key: "name"},
  {title:"Serial Number", key: "serialNumber"},
  {title:"IMEI", key: "imei"},
  {title:"Inventory Number", key: "inventoryNumber"},
  {title: "Software Version", key: "softVersion"},
];

export const DeviceAttributes: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex gap-[24px]">
      <div className="">
        <img src="./images/device.jpg" alt="device" />
      </div>

      <div className="text-[14px] leading-[20px] font-normal flex flex-col gap-[14px]">
        {attributes.map(attribute => (
        <div key={attribute.title} className="">
          <span className="font-semibold">{attribute.title}: </span>
          {product[attribute.key as keyof Product]}
        </div>
        ))}
      </div>
    </div>
  );
};
