import images from "src/assets/index";

export const PageNotFound = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h2 className="text-[18px] leading-[21px]">
        No results found
      </h2>

      <img src={images.ErrorImg} alt="error" />
    </div>
  );
};
