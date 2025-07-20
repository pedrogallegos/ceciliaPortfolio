'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function GallerySection () {
    // Data from example for gallery
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const obras = [
        { id: 1, titulo: "El dolor está en las cosas inofensivas", tecnica: "Acuarela sobre papel", medidas: " 70x100 cm", año:"2025", imagen: "/images/obras/el-dolor-está-cosas-inofensivas.jpg"},
        { id: 2, titulo: "El dolor está en las cosas inofensivas: autorretrato funerario", tecnica: "Mixta, Xilografía y colografía con aditivas", medidas: "35x25 cm - 56x38 cm", año: "2025" , imagen: "/images/obras/dolor-está-cosas-inofensivas.jpg"},
        { id: 3, titulo: "Paisajes Sereno", descripcion: "Acuarela sobre papel", imagen: "/images/obras/images.jpg"},
        { id: 4, titulo: "Paisajes Sereno", descripcion: "Acuarela sobre papel", imagen: "/images/obras/images.jpg"},
    ]
    return (
        <section className='py-20 bg-white'>
            <div className='max-w-6xl mx-auto px-6'></div>
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={ isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 50 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className='text-4xl font-bold text-gray-900 text-center mb-12'>
                Mis obras
            </motion.h2>
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
                    <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate= {{ opacity: 1, y: 0}}
                        transition= {{ duration: 0.5, delay: obra.id * 0.1}}
                        className='bg-acuarela-agua p-6 rounded-lg shadow-lg gallery-card'>
                        <div className='h-64 rounded-lg mb-4 overflow-hidden'>
                            <Image
                                src={obra.imagen}
                                alt={obra.titulo}
                                width={500}
                                height={300}
                                className='w-full h-64 object-cover rounded-lg mb-4 gallery-image'
                            />
                        </div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2 text-center'>
                        {obra.titulo}
                    </h3>
                    <div className='text-center'>
                        <h4 className='text-gray-700 font-semibold'>{obra.tecnica}</h4>
                        <p className='text-gray-600'>{obra.medidas}</p>
                        <p className='text-gray-500'>{obra.año}</p>
                    </div>
                    </motion.div>
                </SwiperSlide>
            ))}

        </Swiper>
        </section>
    )
}