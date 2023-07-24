import { ArrowRight } from "src/components/ArrowRight";


type Props = {
  sectionName: string;
};

export const NoHomeSectionContent: React.FC<Props> = ({ sectionName }) => {
  const upperCasedTitle = sectionName[0].toUpperCase() + sectionName.slice(1);
  return (
    <>
      <h2 className="text-[16px] leading-[22px] font-semibold">
        {sectionName === "ticket" 
        ? `Your Support ${upperCasedTitle}s` 
        : `Your ${upperCasedTitle}s`}
      </h2>

      <div className="py-[12px] pl-[16px] pr-[24px] flex justify-between items-center text-sm shadow-lg">
        <div className="flex flex-col">
          <h3 className="font-semibold">{`No ${upperCasedTitle}s`}</h3>
          <p className="max-w-[25ch] text-grey">
            {`Order a ${sectionName} first and it will show up here.`}
          </p>
        </div>

        <ArrowRight size={24} className="bg-[#f5f6f6] rounded" />
      </div>
    </>
  );
};
