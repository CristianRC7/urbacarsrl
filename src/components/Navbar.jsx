import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/urbacar.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="bg-[#b63a24] text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src={Logo} alt="Urbacar Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('inicio')} className="px-3 py-2 rounded-md text-lg font-medium hover:bg-[#a03320] hover:text-white">Inicio</button>
              <button onClick={() => scrollToSection('quienes-somos')} className="px-3 py-2 rounded-md text-lg font-medium hover:bg-[#a03320] hover:text-white">Quiénes Somos</button>
              <button onClick={() => scrollToSection('proyectos')} className="px-3 py-2 rounded-md text-lg font-medium hover:bg-[#a03320] hover:text-white">Proyectos</button>
              <button onClick={() => scrollToSection('galeria')} className="px-3 py-2 rounded-md text-lg font-medium hover:bg-[#a03320] hover:text-white">Galería</button>
              <button onClick={() => scrollToSection('contactanos')} className="px-3 py-2 rounded-md text-lg font-medium hover:bg-[#a03320] hover:text-white">Contáctanos</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#a03320] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#b63a24] focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#a03320] hover:text-white w-full text-left">Inicio</button>
            <button onClick={() => scrollToSection('quienes-somos')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#a03320] hover:text-white w-full text-left">Quiénes Somos</button>
            <button onClick={() => scrollToSection('proyectos')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#a03320] hover:text-white w-full text-left">Proyectos</button>
            <button onClick={() => scrollToSection('galeria')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#a03320] hover:text-white w-full text-left">Galería</button>
            <button onClick={() => scrollToSection('contactanos')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#a03320] hover:text-white w-full text-left">Contáctanos</button>
          </div>
        </div>
      )}
    </nav>
  )
}