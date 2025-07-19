'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function GallerySection () {
    // Data from example for gallery
    const obras = [
        { id: 1, titulo: "Paisajes Sereno", descripcion: "Acuarela sobre papel", imagen: "/images/obras/images.jpg"},
        { id: 2, titulo: "Paisajes Sereno", descripcion: "Acuarela sobre papel", imagen: "/images/obras/images.jpg"},
        { id: 3, titulo: "Paisajes Sereno", descripcion: "Acuarela sobre papel", imagen: "/images/obras/images.jpg"},
        { id: 4, titulo: "Paisajes Sereno", descripcion: "Acuarela sobre papel", imagen: "/images/obras/images.jpg"},
    ]
    return (
        <section className='py-20 bg-white'>
            <div className='max-w-6xl mx-auto px-6'></div>
            <h2 className='text-4xl font-bold text-gray-900 text-center mb-12'>
                Mis obras
            </h2>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
        >
            {obras.map((obra) => (
                <SwiperSlide key={obra.id}>
                    <div className='bg-acuarela-agua p-6 rounded-lg shadow-lg gallery-card'>
                        <div className='h-64 rounded-lg mb-4 overflow-hidden'>
                            <Image
                                src={obra.imagen}
                                alt={obra.titulo}
                                width={500}
                                height={300}
                                className='w-full h-64 object-cover rounded-lg mb-4 gallery-image'
                            />
                        </div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                        {obra.titulo}
                    </h3>
                    <p className='text-gray-600'>{obra.descripcion}</p>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
        </section>
    )
}