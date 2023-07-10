import { useNavigate } from "react-router-dom";
import { Button } from "src/components/Button";
import { ButtonClose } from "src/components/ButtonClose";
import { DeviceAttributes } from "src/components/DeviceAttributes";
import { DeviceDetailsSection } from "src/components/DeviceDetailsSection";

export const DeviceDetails = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="mb-[12px] mt-[8px] flex justify-end items-center">
        <ButtonClose onClose={() => navigate(-1)} />
      </div>

      <h2 className="mb-[22px] text-[18px] leading-[24px] font-semibold text-black">
        Device #1901 - iPhone 8 32GB Blue
      </h2>

      <DeviceDetailsSection title="Product Attributes">
        <DeviceAttributes
          product={{
            name: "iPhone 8 32GB Blue",
            serialNumber: 3356855487860,
            imei: 990000862471854,
            inventoryNumber: 43,
            softVersion: "7.9.0",
          }}
        />
      </DeviceDetailsSection>

      <DeviceDetailsSection title="Overview">
        <div className="text-[14px] leading-[20px] font-normal flex flex-col gap-[14px]">
          <div>
            <span className="font-semibold">Vertragsbeginn: </span>
            12.01.2021
          </div>
          <div>
            <span className="font-semibold">Vertragsende: </span>
            12.01.2025
          </div>
          <div>
            <span className="font-semibold">Status: </span>
            <span className="font-semibold">Ordered</span>
          </div>
          <div>
            <span className="font-semibold">Contract: </span>
            Contract Name
          </div>
          <div className="max-w-[35ch]">
            <span className="font-semibold">Description: </span>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's.
          </div>
        </div>
      </DeviceDetailsSection>

      <div className="mt-[24px] flex flex-col gap-[24px]">
        <Button
          type="button"
          className="w-full h-[48px] hover:shadow-lg bg-azure text-[#fefefe] text-base font-bold"
        >
          Order Hardware Accessories
        </Button>

        <Button
          type="button"
          className="w-full h-[48px] hover:shadow-lg bg-[#fff] text-orange text-base font-bold border border-orange"
        >
          Request Support
        </Button>
      </div>
    </section>
  );
};
