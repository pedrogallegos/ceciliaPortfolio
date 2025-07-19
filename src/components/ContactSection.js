'use client'
import { useState } from 'react'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulación de envío (aqui se va a conectar con el backend)
        setTimeout(() => {
            setSubmitStatus('¡Mensaje enviado con éxito! Te responderemos pronto.')
            setIsSubmitting(false)
            setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
        }, 2000)
    }

    return (
        <section id='contacto' className='py-20 bg-gradient-to-br from-purple-50 to-pink-50'>
            <div className='container mx-auto px-6'>
                <div className='max-w-4xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
                            Hablemos
                        </h2>
                        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a darles vida.
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-12 items-start'>
                        {/* Información de contacto */}
                        <div className='space-y-8'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
                                    Información de contacto
                                </h3>
                                <div className='space-y-4'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='font-medium text-gray-800'>Email</p>
                                            <p className='text-gray-600'>cecilia@email.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-pink-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='font-medium text-gray-800'>Teléfono</p>
                                            <p className='text-gray-600'>+52 123 456 7890</p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className='font-medium text-gray-800'>Ubicación</p>
                                            <p className='text-gray-600'>Ciudad de México, México</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white p-6 rounded-2xl shadow-lg'>
                                <h4 className='text-lg font-semibold text-gray-800 mb-3'>
                                    ¿Listo para comenzar?
                                </h4>
                                <p className='text-gray-600 mb-4'>
                                    Cada proyecto es único y me emociona poder ser parte de tu visión creativa.
                                </p>
                                <div className='flex space-x-4'>
                                    <a href='#' className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors'>
                                        <svg className='w-5 h-5 text-purple-600' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'/>
                                        </svg>
                                    </a>
                                    <a href='#' className='w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors'>
                                        <svg className='w-5 h-5 text-pink-600' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.764-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z'/>
                                        </svg>
                                    </a>
                                    <a href='#' className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors'>
                                        <svg className='w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className='bg-white p-8 rounded-2xl shadow-xl'>
                            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>
                                Envíame un mensaje
                            </h3>
                            
                            {submitStatus && (
                                <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
                                    <p className='text-green-700'>{submitStatus}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div>
                                        <label htmlFor='nombre' className='block text-sm font-medium text-gray-700 mb-2'>
                                            Nombre *
                                        </label>
                                        <input
                                            type='text'
                                            id='nombre'
                                            name='nombre'
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors'
                                            placeholder='Tu nombre'
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                            Email *
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors'
                                            placeholder='tu@email.com'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='asunto' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Asunto *
                                    </label>
                                    <input
                                        type='text'
                                        id='asunto'
                                        name='asunto'
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors'
                                        placeholder='¿En qué puedo ayudarte?'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='mensaje' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id='mensaje'
                                        name='mensaje'
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none'
                                        placeholder='Cuéntame sobre tu proyecto...'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                                >
                                    {isSubmitting ? (
                                        <span className='flex items-center justify-center'>
                                            <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : (
                                        'Enviar mensaje'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}