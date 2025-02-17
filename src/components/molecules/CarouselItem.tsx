import React from "react";
import Image from "../atoms/Image";

interface CarouselItemProps {
  src: string;
  alt: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} className="h-[500px] w-full object-cover" />
  );
};

export default CarouselItem;
