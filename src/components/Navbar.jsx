import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/urbacar.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#b63a24] shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src={Logo} alt="Urbacar Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['inicio', 'quienes-somos', 'proyectos', 'galeria', 'contactanos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 rounded-md text-lg font-medium ${
                    isScrolled ? 'text-white hover:bg-[#a03320]' : 'text-white hover:bg-white hover:text-[#b63a24]'
                  } transition-colors duration-300`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-white hover:bg-[#a03320]' : 'text-white hover:bg-white hover:text-[#b63a24]'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300`}
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

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-64 h-full bg-[#b63a24] transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['inicio', 'quienes-somos', 'proyectos', 'galeria', 'contactanos'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#a03320] transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  )
}