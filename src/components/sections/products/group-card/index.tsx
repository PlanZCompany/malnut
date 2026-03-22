import GenericImage from "@/components/shared/Image";
import GenericHeading from "@/components/texts/generic-heading";
import GenericParagraph from "@/components/texts/generic-paragraph";
import { bgProductsType, singleBgProductType } from "@/constants/bgProducts";
import React from "react";

const GroupCard = ({ product }: { product: bgProductsType }) => {
  const productsNamesContent = product.products.map(
    (product: singleBgProductType, index: number) => (
      <div
        className="bg-espresso/80 min-h-[48px] md:min-h-[unset] md:py-[2px] flex"
        key={`group-card-name-${index}`}
      >
        <GenericParagraph
          extraClass="text-center m-auto"
          fontStyle="font-prompt-semibold"
          textColor="text-white"
          pType="large"
        >
          {product.name}
        </GenericParagraph>
      </div>
    )
  );
  const productsTypesContent = product.products.map(
    (product: singleBgProductType, index: number) => (
      <div
        className="bg-espresso/80 min-h-[48px] md:min-h-[unset] md:py-[2px] flex"
        key={`group-card-type-${index}`}
      >
        <GenericParagraph
          extraClass="text-center m-auto"
          fontStyle="font-prompt-semibold"
          textColor="text-white"
          pType="large"
        >
          {product.type}
        </GenericParagraph>
      </div>
    )
  );
  const productsSizesContent = product.products.map(
    (product: singleBgProductType, index: number) => (
      <div
        className="bg-espresso/80 min-h-[48px] md:min-h-[unset] md:py-[2px] flex"
        key={`group-card-size-${index}`}
      >
        <GenericParagraph
          extraClass="text-center m-auto max-w-[122px] overflow-hidden break-words md:max-w-[unset]"
          fontStyle="font-prompt-semibold"
          textColor="text-white"
          pType="large"
        >
          {product.size}
        </GenericParagraph>
      </div>
    )
  );
  return (
    <div className="flex flex-col items-center lg:flex-row bg-pistachio rounded-[24px] p-3 gap-3">
      <GenericImage
        src={product.src}
        alt={product.group}
        imageClassName="aspect-[2.4/1.8]"
        wrapperClassName="relative lg:flex-1 w-full sm:w-2/3 aspect-[2.4/1.8] h-full bg-white rounded-[20px] overflow-hidden"
      />

      <div className="lg:flex-[2] w-full  flex flex-col">
        <GenericHeading
          fontStyle="font-prompt-bold"
          headingType="h3"
          textColor="text-secondary"
          extraClass="text-center mx-auto"
        >
          {product.group}
        </GenericHeading>

        <div className="flex justify-evenly gap-1">
          {!!product.products.some((product) => product.name !== "") && (
            <div className="flex-1">
              <GenericHeading
                fontStyle="font-prompt-bold"
                headingType="h4"
                textColor="text-secondary"
                extraClass="text-center mx-auto"
              >
                Name
              </GenericHeading>
              <div className="flex flex-col gap-1">{productsNamesContent}</div>
            </div>
          )}
          <div className="flex-1">
            <GenericHeading
              fontStyle="font-prompt-bold"
              headingType="h4"
              textColor="text-secondary"
              extraClass="text-center mx-auto"
            >
              Type
            </GenericHeading>
            <div className="flex flex-col gap-1">{productsTypesContent}</div>
          </div>
          <div className="flex-1">
            <GenericHeading
              fontStyle="font-prompt-bold"
              headingType="h4"
              textColor="text-secondary"
              extraClass="text-center mx-auto"
            >
              Size
            </GenericHeading>
            <div className="flex flex-col gap-1">{productsSizesContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
