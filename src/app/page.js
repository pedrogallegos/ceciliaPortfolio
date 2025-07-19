import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import GallerySection from '../components/GallerySection'
import Header from '../components/Header'
import ContactSection from '../components/ContactSection'
export default function Home() {
  return (
    <div>
    <Header />
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <ContactSection />
    </div>
  )
}
