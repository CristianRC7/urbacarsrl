import { Link } from 'react-router-dom'

export default function Proyectos() {
  const proyectos = [
    { id: 1, titulo: "El Cañaveral", imagen: "https://i.postimg.cc/mDjPFzSC/LOGO-CANAVERAL.webp" },
    { id: 2, titulo: "Olimpo 1", imagen: "https://i.postimg.cc/NfJx7Vd9/LOGO-EL-OLIMPO.png"},
    { id: 3, titulo: "Olimpo 2", imagen: "https://i.postimg.cc/7YYVzDnr/LOGO-EL-OLIMPO-2.png" },
  ]

  return (
    <section id="urbanizaciones" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#b63a24] sm:text-5xl mb-12 text-center">
          Nuestras Urbanizaciones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="bg-white overflow-hidden shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
              <img className="w-full h-48 object-cover" src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{proyecto.titulo}</h3>
                <Link
                  to={`/proyecto/${proyecto.id}`}
                  className="mt-4 inline-block bg-[#b63a24] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a03320] transition-colors duration-300"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}