"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Nut } from "lucide-react";
import { SectionRow } from "@/data/site-content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { ContactButton } from "../sute-sidebar";

import Products from "@/components/sections/products";
import { bgProducts, bgProductsType } from "@/constants/bgProducts";

export type ContentSectionLayout = "row" | "reverse";

export type ContentSectionImage = {
  src: string;
  alt: string;
};

export type ContentSectionProps = {
  id: string;
  heading: string;
  images: ContentSectionImage[];
  rows: SectionRow[];
  layout?: ContentSectionLayout;
  className?: string;
  button?: boolean;
  products?: boolean;
};

function renderRow(row: SectionRow, index: number) {
  if (row.type === "text") {
    return (
      <p
        key={`${row.type}-${index}`}
        className="text-base md:text-xl leading-7 text-walnut"
      >
        {row.value}
      </p>
    );
  }

  return (
    <div key={`${row.type}-${index}`} className="space-y-3">
      {row.title ? (
        <h3 className="text-base md:text-xl font-semibold text-espresso">
          {row.title}
        </h3>
      ) : null}

      <ul
        className={
          row.columns === 2
            ? "grid grid-cols-2 gap-2 text-base md:text-xl leading-7 text-walnut"
            : "space-y-2 text-base md:text-xl leading-7 text-walnut"
        }
      >
        {row.items.map((item) => (
          <li key={item} className="flex gap-2">
            <Nut className="mt-1 h-5 w-5 shrink-0 text-[#4A7C4E]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionMedia({
  images,
  heading,
}: {
  images: ContentSectionImage[];
  heading: string;
}) {
  if (images.length <= 1) {
    const image = images[0];

    if (!image) return null;

    return (
      <div className="relative mx-auto w-[calc(100%-30px)] max-w-sm">
        <div className="absolute inset-0 z-0 bg-pistachio rotate-3 lg:rotate-9"></div>
        <div className="relative z-10 aspect-4/5">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[calc(100%-30px)] max-w-sm">
      <div className="absolute inset-0 z-0 bg-pistachio rotate-3 lg:rotate-9"></div>
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="relative z-10 w-full"
        aria-label={`${heading} image gallery`}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.src}>
              <div className="relative aspect-4/6">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 md:-left-10">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </CarouselPrevious>

        <CarouselNext className="right-3 md:-right-10">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </CarouselNext>
      </Carousel>
    </div>
  );
}

export function ContentSection({
  id,
  heading,
  images,
  rows,
  layout = "row",
  className,
  button = false,
  products = false,
}: ContentSectionProps) {
  const isReverse = layout === "reverse";

  return (
    <section id={id} className={cn("scroll-mt-24 lg:scroll-mt-8", className)}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={isReverse ? "lg:order-2" : undefined}>
          <SectionMedia images={images} heading={heading} />
        </div>

        <div className={isReverse ? "lg:order-1" : undefined}>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-espresso">
              {heading}
            </h2>

            <div className="space-y-4">
              {rows.map((row, index) => renderRow(row, index))}
            </div>

            {!!button && (
              <div className="w-full sm:w-fit sm:min-w-50">
                <ContactButton size="lg" />
              </div>
            )}
          </div>
        </div>
      </div>

      {!!products && (
        <div className="w-full overflow-x-clip">
          <Products data={bgProducts as bgProductsType[]} source="bg" />
        </div>
      )}
      <div className="w-full h-[9px] bg-gradient-to-r from-cream via-pistachio to-cream mt-10 md:mt-20"></div>
    </section>
  );
}
