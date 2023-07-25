import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "src/components/ArrowRight";

type Props = {
  sectionName: string;
  title: string;
  subTitle: string;
  icon: JSX.Element;
  link: string;
};

export const ServiceSection: React.FC<Props> = ({
  sectionName,
  title,
  subTitle,
  icon,
  link, 
  }) => {
  return (
    <section className="w-full flex flex-col text-black">
      <div className="flex justify-between items-center">
        <h2 className="text-[16px] leading-[22px] font-semibold">
          {sectionName}
        </h2>

        <Link
          to={link}
          className="text-[12px] leading-[16px] font-normal text-azure"
        >
          See all
        </Link>
      </div>

      <Link to={link}>
        <div className="py-[12px] pl-[16px] pr-[24px] flex gap-[8px] items-center text-sm shadow-lg">
          {icon}
          <div className="flex flex-col mr-auto">
            <h3 className="font-semibold">{title}</h3>
            <p className="max-w-[25ch] text-black">{subTitle}</p>
          </div>

          <ArrowRight size={24} className="bg-[#f5f6f6] rounded" />
        </div>
      </Link>
    </section>
  );
};
