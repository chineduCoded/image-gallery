"use client"
import { useState } from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { images } from "@/lib/images"

export default function Page() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section className="min-h-screen bg-black py-12">
        <div className="container">
            <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
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
                            width={1000}
                            height={300}
                            className="block h-full object-cover"
                             />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnails */}
            <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-3 h-32 w-full rounded-lg"
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <button className="flex h-full w-full items-center justify-center">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            // width={80}
                            // height={80}
                            className="block h-full object-cover"
                             />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}
