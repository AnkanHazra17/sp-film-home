"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselImgs = [
  "https://www.surfacepro.com.tw/uploads/use/1920_0/202405101623522886.png",
  "https://www.surfacepro.com.tw/uploads/use/1920_0/202403301603271b96.png",
  "https://www.surfacepro.com.tw/uploads/use/1920_0/20240330160308d936.png",
];

const CustomCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="mt-6 w-full"
    >
      <CarouselContent>
        {carouselImgs.map((img, i) => (
          <CarouselItem key={i} className="flex justify-center z-10 px-16">
            <Image
              src={img}
              alt="image"
              width={800}
              height={300}
              className="rounded-lg w-full"
            ></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CustomCarousel;
