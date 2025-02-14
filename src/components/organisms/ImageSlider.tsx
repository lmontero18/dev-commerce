import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../molecules/CarouselItem";
import { BannerData } from "@/data/BannerData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ImageSlider: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="w-full mx-auto">
      {loading ? (
        <Skeleton height={480} width="100%" />
      ) : (
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          arrows={false}
          draggable={false}
        >
          {BannerData.map((img, index) => (
            <CarouselItem key={index} src={img.src} alt={img.alt} />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default ImageSlider;
