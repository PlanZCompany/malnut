import { SectionRow } from "@/data/site-content";
import Image from "next/image";

export type ContentSectionLayout = "row" | "reverse";

export type ContentSectionImage = {
  src: string;
  alt: string;
};

export type ContentSectionProps = {
  id: string;
  heading: string;
  image: ContentSectionImage;
  rows: SectionRow[];
  layout?: ContentSectionLayout;
  className?: string;
};

function renderRow(row: SectionRow, index: number) {
  if (row.type === "text") {
    return (
      <p
        key={`${row.type}-${index}`}
        className="text-base leading-7 text-muted-foreground"
      >
        {row.value}
      </p>
    );
  }

  return (
    <div key={`${row.type}-${index}`} className="space-y-3">
      {row.title ? (
        <h3 className="text-base font-semibold">{row.title}</h3>
      ) : null}

      <ul className="space-y-2 text-base leading-7 text-muted-foreground">
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

export function ContentSection({
  id,
  heading,
  image,
  rows,
  layout = "row",
  className,
}: ContentSectionProps) {
  const isReverse = layout === "reverse";

  return (
    <section id={id} className={className}>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={isReverse ? "lg:order-2" : undefined}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        <div className={isReverse ? "lg:order-1" : undefined}>
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {heading}
            </h2>

            <div className="space-y-4">
              {rows.map((row, index) => renderRow(row, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
