import { useState } from 'react'

const imagenes = [
  { id: 1, categoria: 'cañaveral', titulo: 'Cañaveral 1', enlace: '/canaveral1.jpg' },
  { id: 2, categoria: 'cañaveral', titulo: 'Cañaveral 2', enlace: '/canaveral2.jpg' },
  { id: 3, categoria: 'olimpo1', titulo: 'Olimpo 1-A', enlace: '/olimpo1a.jpg' },
  { id: 4, categoria: 'olimpo1', titulo: 'Olimpo 1-B', enlace: '/olimpo1b.jpg' },
  { id: 5, categoria: 'olimpo2', titulo: 'Olimpo 2-A', enlace: '/olimpo2a.jpg' },
  { id: 6, categoria: 'olimpo2', titulo: 'Olimpo 2-B', enlace: '/olimpo2b.jpg' },
  { id: 7, categoria: 'visitas', titulo: 'Visita 1', enlace: '/visita1.jpg' },
  { id: 8, categoria: 'visitas', titulo: 'Visita 2', enlace: '/visita2.jpg' },
  { id: 9, categoria: 'cañaveral', titulo: 'Cañaveral 3', enlace: '/canaveral3.jpg' },
  { id: 10, categoria: 'olimpo1', titulo: 'Olimpo 1-C', enlace: '/olimpo1c.jpg' },
  { id: 11, categoria: 'olimpo2', titulo: 'Olimpo 2-C', enlace: '/olimpo2c.jpg' },
  { id: 12, categoria: 'visitas', titulo: 'Visita 3', enlace: '/visita3.jpg' },
]

export default function Galeria() {
  const [filtro, setFiltro] = useState('todos')
  const [modalImage, setModalImage] = useState(null)

  const imagenesFiltradas = filtro === 'todos' 
    ? imagenes 
    : imagenes.filter(img => img.categoria === filtro)

  const abrirModal = (imagen) => {
    setModalImage(imagen)
  }

  const cerrarModal = () => {
    setModalImage(null)
  }

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#b63a24] sm:text-5xl mb-12 text-center">
          Galería de Imágenes
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          {['todos', 'cañaveral', 'olimpo1', 'olimpo2', 'visitas'].map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltro(categoria)}
              className={`px-4 py-2 rounded-full ${
                filtro === categoria
                  ? 'bg-[#b63a24] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-300`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagenesFiltradas.map((imagen) => (
            <div
              key={imagen.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => abrirModal(imagen)}
            >
              <img src={imagen.enlace} alt={imagen.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{imagen.titulo}</h3>
                <p className="text-sm text-gray-600">{imagen.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={cerrarModal}>
          <div className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.enlace} alt={modalImage.titulo} className="w-full h-auto" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">{modalImage.titulo}</h3>
              <p className="text-gray-600">{modalImage.categoria}</p>
            </div>
            <button
              onClick={cerrarModal}
              className="mt-4 px-4 py-2 bg-[#b63a24] text-white rounded hover:bg-[#a03320] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}