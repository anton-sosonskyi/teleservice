type Props = {
  title: string;
  children: React.ReactNode;
};

export const DeviceDetailsSection: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <div className="mb-[16px] py-[9px] px-[16px] bg-[#f5f6f6]">
        <h3 className="text-[16px] leading-[22px] font-bold text-black">{title}</h3>
      </div>
      {children}
    </>
  );
};
