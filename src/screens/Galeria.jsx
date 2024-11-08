import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../components/Modal'

const imagenes = [
  { id: 1, categoria: 'cañaveral', titulo: 'Cañaveral 1', enlace: "https://i.postimg.cc/mDjPFzSC/LOGO-CANAVERAL.webp" },
  { id: 2, categoria: 'cañaveral', titulo: 'Cañaveral 2', enlace: "https://i.postimg.cc/mDjPFzSC/LOGO-CANAVERAL.webp" },
  { id: 3, categoria: 'olimpo1', titulo: 'Olimpo 1-A', enlace: 'https://i.postimg.cc/NfJx7Vd9/LOGO-EL-OLIMPO.png' },
  { id: 4, categoria: 'olimpo1', titulo: 'Olimpo 1-B', enlace: 'https://i.postimg.cc/NfJx7Vd9/LOGO-EL-OLIMPO.png' },
  { id: 5, categoria: 'olimpo2', titulo: 'Olimpo 2-A', enlace: 'https://i.postimg.cc/7YYVzDnr/LOGO-EL-OLIMPO-2.png' },
  { id: 6, categoria: 'olimpo2', titulo: 'Olimpo 2-B', enlace: 'https://i.postimg.cc/7YYVzDnr/LOGO-EL-OLIMPO-2.png' },
  { id: 7, categoria: 'visitas', titulo: 'Visita 1', enlace: 'https://i.postimg.cc/4y8Fc3Kn/ingreso-1.webp' },
  { id: 8, categoria: 'visitas', titulo: 'Visita 2', enlace: 'https://i.postimg.cc/1RMd2vWP/ingreso-2.webp' },
  { id: 9, categoria: 'cañaveral', titulo: 'Cañaveral 3', enlace: "https://i.postimg.cc/mDjPFzSC/LOGO-CANAVERAL.webp" },
  { id: 10, categoria: 'olimpo1', titulo: 'Olimpo 1-C', enlace: 'https://i.postimg.cc/NfJx7Vd9/LOGO-EL-OLIMPO.png' },
  { id: 11, categoria: 'olimpo2', titulo: 'Olimpo 2-C', enlace: 'https://i.postimg.cc/7YYVzDnr/LOGO-EL-OLIMPO-2.png' },
  { id: 12, categoria: 'visitas', titulo: 'Visita 3', enlace: 'https://i.postimg.cc/4dP8C3Qw/ingreso-3.webp' },
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
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['todos', 'cañaveral', 'olimpo1', 'olimpo2', 'visitas'].map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltro(categoria)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                filtro === categoria
                  ? 'bg-[#b63a24] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-300 text-xs sm:text-sm md:text-base`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {imagenesFiltradas.map((imagen) => (
              <motion.div
                key={imagen.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => abrirModal(imagen)}
              >
                <img src={imagen.enlace} alt={imagen.titulo} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{imagen.titulo}</h3>
                  <p className="text-sm text-gray-600">{imagen.categoria}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Modal isOpen={!!modalImage} onClose={cerrarModal}>
        {modalImage && (
          <div className="p-4">
            <img src={modalImage.enlace} alt={modalImage.titulo} className="w-full h-auto" />
          </div>
        )}
      </Modal>
    </section>
  )
}