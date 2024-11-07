import { useState, useEffect } from 'react'

export default function Inicio() {
  const images = [
    '/carousel-1.jpg',
    '/carousel-2.jpg',
    '/carousel-3.jpg',
    '/carousel-4.jpg',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Carousel image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a Urbacar S.R.L.</h1>
          <p className="text-xl">Tu futuro hogar comienza aquí</p>
        </div>
      </div>
    </section>
  )
}