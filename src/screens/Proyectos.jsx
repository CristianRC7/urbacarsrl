export default function Proyectos() {
    const proyectos = [
      { id: 1, titulo: "Proyecto 1", imagen: "/proyecto1.jpg" },
      { id: 2, titulo: "Proyecto 2", imagen: "/proyecto2.jpg" },
      { id: 3, titulo: "Proyecto 3", imagen: "/proyecto3.jpg" },
    ]
  
    return (
      <section id="proyectos" className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#b63a24] sm:text-5xl mb-12 text-center">
            Nuestros Proyectos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="bg-white overflow-hidden shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                <img className="w-full h-48 object-cover" src={proyecto.imagen} alt={proyecto.titulo} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{proyecto.titulo}</h3>
                  <button className="bg-[#b63a24] text-white px-4 py-2 rounded hover:bg-[#a03320] transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }