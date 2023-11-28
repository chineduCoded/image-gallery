"use client"
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image";
import { images } from "@/lib/images";


export default function Page() {
  return (
    <section className="py-12">
        <div className="container">
            <Swiper
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{ type: "bullets", clickable: true }}
            modules={[ Navigation, Pagination ]}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
            className="h-96 w-full rounded-lg"
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="flex h-full w-full items-center justify-center">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={300}
                            className="block h-full object-cover"
                             />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}
