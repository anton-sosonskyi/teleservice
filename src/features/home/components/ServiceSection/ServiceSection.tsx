import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const ServiceSection: React.FC<Props> = ({children}) => {
  return (
    <section className="w-full flex flex-col text-black">
      {children}
    </section>
  );
};
