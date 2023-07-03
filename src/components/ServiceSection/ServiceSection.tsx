import { ArrowRight } from "../ArrowRight";

type Props = {
  sectionTitle: string;
}

export const ServiceSection: React.FC<Props> = ({ sectionTitle }) => {
  return (
    <section className="w-full flex flex-col text-black">
      <h2 className="text-[16px] leading-[22px] font-semibold">{sectionTitle}
      </h2>

      <div className="py-[12px] pl-[16px] pr-[24px] flex justify-between items-center text-sm shadow-lg">
        <div className="flex flex-col">
          <h3 className="font-semibold">No Devices</h3>
          <p className="max-w-[25ch] text-grey">
            Order a device first and it will show up here.
          </p>
        </div>

        <ArrowRight size={24} className="bg-[#f5f6f6] rounded" />
      </div>
    </section>
  );
};
