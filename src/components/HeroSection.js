'use client'
import { useMousePosition } from '../hooks/useMousePosition'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
export default function HeroSection() {
    const { x, y } = useMousePosition()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <motion.section 
            initial= {{ opacity: 2 }}
            animate= {{ opacity: 3 }}
            transition= {{ duration: .1 }}
            className='h-96 flex items-center justify-center bg-gradient-to-b from-acuarela-azul1 to-acuarela-turquesa relative acuarela-bg overflow-hidden'>
            
            {/* Partículas que siguen el mouse */}
            {isMounted && (
                <div className='particles-bg'>
                    <div 
                        className='particle'
                        style={{
                            transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    ></div>
                    <div 
                        className='particle'
                        style={{
                            transform: `translate(${x * 0.015}px, ${y * 0.015}px)`,
                            transition: 'transform 0.15s ease-out'
                        }}
                    ></div>
                    <div 
                        className='particle'
                        style={{
                            transform: `translate(${x * 0.01}px, ${y * 0.01}px)`,
                            transition: 'transform 0.2s ease-out'
                        }}
                    ></div>
                    <div 
                        className='particle'
                        style={{
                            transform: `translate(${x * 0.025}px, ${y * 0.025}px)`,
                            transition: 'transform 0.12s ease-out'
                        }}
                    ></div>
                </div>
            )}
            
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='text-center relative z-10'>
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className='text-6xl font-bold text-white mb-4 drop-shadow-lg'>
                    Hola soy Cecilia
                </motion.h1>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate= {{ y: 0, opacity: 1 }}
                    transition= {{ duration: 0.8, delay: 0.6 }}
                    className='text-xl text-white/90 drop-shadow-md'>Pintora de profesión
                </motion.p>
            </motion.div>
        </motion.section>
    )
}