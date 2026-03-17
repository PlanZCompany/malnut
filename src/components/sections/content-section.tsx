"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionRow } from "@/data/site-content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { ContactButton } from "../sute-sidebar";

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
};

function renderRow(row: SectionRow, index: number) {
  if (row.type === "text") {
    return (
      <p
        key={`${row.type}-${index}`}
        className="text-base md:text-xl leading-7 text-muted-foreground"
      >
        {row.value}
      </p>
    );
  }

  return (
    <div key={`${row.type}-${index}`} className="space-y-3">
      {row.title ? (
        <h3 className="text-base md:text-xl font-semibold">{row.title}</h3>
      ) : null}

      <ul className="space-y-2 text-base md:text-xl leading-7 text-muted-foreground">
        {row.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
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
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      className="mx-auto w-full max-w-sm"
      aria-label={`${heading} image gallery`}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.src}>
            <div className="relative aspect-[4/6]">
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
}: ContentSectionProps) {
  const isReverse = layout === "reverse";

  return (
    <section id={id} className={className}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={`${isReverse ? "lg:order-2" : undefined} relative`}>
          <div className="absolute z-0 inset-0 md:inset-y-0 inset-x-22 bg-[#445D23] rotate-9"></div>
          <SectionMedia images={images} heading={heading} />
        </div>

        <div className={isReverse ? "lg:order-1" : undefined}>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {heading}
            </h2>

            <div className="space-y-4">
              {rows.map((row, index) => renderRow(row, index))}
            </div>

            {!!button && (
              <div className="w-fit min-w-[200px]">
                <ContactButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
