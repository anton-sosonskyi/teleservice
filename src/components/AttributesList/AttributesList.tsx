type Props<T, K extends keyof T> = {
  object: T;
  attributes: { title: string; key: K}[];
  renderImage?: () => JSX.Element;
  verticalSpace?: string;
};

export const AttributesList = <T, K extends keyof T>({
  object,
  attributes,
  renderImage,
  verticalSpace = "14px",
}: Props<T, K>) => {
  return (
    <div className="flex gap-[24px]">
      {renderImage && renderImage()}

      <div
        className={`text-[14px] leading-[20px] font-normal flex flex-col basis-full gap-[${verticalSpace}]`}
      >
        {attributes.map(({ title, key }) => (
          <div key={title} className="w-full flex flex-wrap items-center gap-[6px]">
            <span className="font-semibold">{title}: </span>
            {key === "status" ? (
              <span className="px-6 py-1 w-fit flex justify-center items-center rounded-full text-orange bg-[#ffd6ba]">{object[key] as keyof object}</span>
            ) : (
              (object[key] as keyof object)
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
