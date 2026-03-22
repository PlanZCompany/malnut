import GenericHeading from "@/components/texts/generic-heading";

import { bgProductsType } from "@/constants/bgProducts";
import GroupCard from "./group-card";

const Products = ({
  data,
  source,
}: {
  data: bgProductsType[];
  source: "gr" | "bg";
}) => {
  const cardContent = (data as bgProductsType[]).map(
    (product: bgProductsType, index: number) => {
      return <GroupCard key={`product-${index}`} product={product} />;
    },
  );

  return (
    <section className="w-full mt-10 md:mt-20">
      <div className="w-full bg- flex flex-col gap-10 items-center justify-between">
        <div
          className={`flex w-full flex-col ${
            source == "gr" && "lg:flex-row lg:flex-wrap justify-evenly"
          }  gap-3 `}
        >
          {cardContent}
        </div>
      </div>
    </section>
  );
};

export default Products;
