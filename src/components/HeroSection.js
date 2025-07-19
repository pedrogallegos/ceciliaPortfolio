'use client'
import { useMousePosition } from '../hooks/useMousePosition';

export default function HeroSection() {
    const { x, y } = useMousePosition()

    return (
        <section className='h-96 flex items-center justify-center bg-gradient-to-b from-acuarela-azul1 to-acuarela-turquesa relative acuarela-bg overflow-hidden'>
            
            {/* Partículas que siguen el mouse */}
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
            
            <div className='text-center relative z-10'>
                <h1 className='text-6xl font-bold text-white mb-4 drop-shadow-lg'>
                    Hola soy Cecilia
                </h1>
                <p className='text-xl text-white/90 drop-shadow-md'>Pintora de profesión</p>
            </div>
        </section>
    )
}