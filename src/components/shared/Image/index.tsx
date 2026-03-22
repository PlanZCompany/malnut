import Image from "next/image";
import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  wrapperClassName: string;
  imageClassName?: string;
  fill?: boolean;
  sizes?: string;
  observe?: boolean;
  priority?: boolean;
};
const GenericImage = ({
  src,
  alt,
  wrapperClassName,
  imageClassName,
  fill = true,
  sizes = "(max-width: 768px) 100vw",
  priority = false,
}: ImageProps) => {
  return (
    <div className={`${wrapperClassName}`}>
      <Image
        src={src ? src : "/images/banner.png"}
        alt={alt || "Content"}
        fill={fill}
        sizes={sizes}
        className={imageClassName || ""}
        priority={priority}
      />
    </div>
  );
};

export default GenericImage;
