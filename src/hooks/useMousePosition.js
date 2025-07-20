'use client'
import { useState, useEffect } from 'react'

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        
        window.addEventListener('mousemove', updateMousePosition)

        return () =>{
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return isClient ? mousePosition : { x: 0, y: 0 }
}