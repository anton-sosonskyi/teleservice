import { ArrowRight } from "../ArrowRight";
import { NoHomeItemsContent } from "../NoHomeItemsContent";

type Props = {
  sectionName: string;
  items?: any;
}

export const ServiceSection: React.FC<Props> = ({ sectionName, items }) => {
  return (
    <section className="w-full flex flex-col text-black">
      {!items && (
        <NoHomeItemsContent sectionName={sectionName} />
      )}
    </section>
  );
};
