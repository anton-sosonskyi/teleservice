import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "src/components/Button";
import { ButtonClose } from "src/components/ButtonClose";
import { AttributesList } from "src/components/AttributesList";
import { DetailsSection } from "src/components/DetailsSection";
import { Device } from "src/types/ProductType";
import { useStore } from "src/store/store";
import images from "src/assets/index";

const attributes: Array<{ title: string, key: keyof Device }> = [
  { title: "Product", key: "name" },
  { title: "Serial Number", key: "serialNumber" },
  { title: "IMEI", key: "imei" },
  { title: "Inventory Number", key: "inventoryNumber" },
  { title: "Software Version", key: "softVersion" },
];

export const DeviceDetails = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const userDevices = useStore((state) => state.userDevices);
  const { deviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!deviceId) {
      return;
    }

    const product = userDevices.find((item) => item.id === +deviceId)!;
    setDevice(product);
  }, []);

  return (
    <section className="pb-16">
      <div className="mb-[12px] mt-[8px] flex justify-end items-center">
        <ButtonClose onClose={() => navigate(-1)} />
      </div>

      {device && (
        <>
          <h2 className="mb-[22px] text-[18px] leading-[24px] font-semibold text-black">
            {`Device #${device?.inventoryNumber} - ${device?.name}`}
          </h2>

          <DetailsSection title="Product Attributes" className="mb-[24px]">
            <AttributesList
              object={device}
              attributes={attributes}
              renderImage={() => (
                <div>
                  <img src={images.DeviceImg} alt="device" />
                </div>
              )}
            />
          </DetailsSection>

          <DetailsSection title="Overview">
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
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's.
              </div>
            </div>
          </DetailsSection>
        </>
      )}

      <div className="my-[24px] flex flex-col gap-[24px]">
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
