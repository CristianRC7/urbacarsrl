import { useState, useEffect } from 'react'

export default function Inicio() {
  const images = [
    'https://i.postimg.cc/vZ8ZM2yz/oficina.webp',
    'https://i.postimg.cc/4y8Fc3Kn/ingreso-1.webp',
    'https://i.postimg.cc/1RMd2vWP/ingreso-2.webp',
    'https://i.postimg.cc/4dP8C3Qw/ingreso-3.webp',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ position: 'absolute' }}
        >
          <img
            src={img}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Bienvenido a Urbacar S.R.L.</h1>
          <p className="text-lg md:text-xl lg:text-2xl">Tu futuro hogar comienza aquí</p>
        </div>
      </div>
    </section>
  )
}