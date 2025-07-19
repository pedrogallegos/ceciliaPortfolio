'use client'
export default function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className='fixed top-0 left-0 w-full bg-white/50 backdrop-blur-md z-50 shadow-sm'>
            <nav className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
                {/* Logo/Nombre */}
                <div className='text-2xl font-bold text-acuarela-azul1'>
                    Cecilia Gallegos
                </div>
                {/* Menú de navegación */}
                <div className='flex space-x-6'>
                    <button
                        onClick={() => scrollToSection('inicio')}
                        className='nav-button relative text-gray-700 hover:text-acuarela-azul1 transition-all duration-300 py-2 px-3'
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className='nav-button relative text-gray-700 hover:text-acuarela-azul1 transition-all duration-300 py-2 px-3'

                    >
                        Sobre mí
                    </button>
                    <button
                        onClick={() => scrollToSection('obras')}
                        className='nav-button relative text-gray-700 hover:text-acuarela-azul1 transition-all duration-300 py-2 px-3'
                    >
                        Obras
                    </button>
                    <button
                        onClick={() => scrollToSection('contacto')}
                        className='nav-button relative bg-acuarela-azul1 text-white px-4 py-2 rounded-full hover:bg-acuarela-azul2 hover:shadow-lg hover:scale-105 transition-all duration-300 nav-button'
                    >
                        Contacto
                    </button>
                </div>
            </nav>
        </header>
    )
}