type Props = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export const DetailsSection: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div className={className}>
      <div className="mb-[16px] py-[9px] px-[16px] bg-[#f1f1f1]">
        <h3 className="text-[16px] leading-[22px] font-bold text-black">{title}</h3>
      </div>
      {children}
    </div>
  );
};
