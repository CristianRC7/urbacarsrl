export default function QuienesSomos() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl font-extrabold text-[#b63a24] sm:text-5xl mb-12">
            Misión, Visión y Valores
          </h2>
          <div className="mt-4 text-xl text-gray-600 space-y-12">
            <div className="bg-white border-l-4 border-[#c93030] p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-[#b63a24] mb-4">Misión</h3>
              <p>
                Brindar a nuestros clientes la oportunidad de adquirir lotes de calidad, seguros y accesibles, que les permitan construir el hogar de sus sueños y alcanzar su bienestar familiar.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#f8b500] p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-[#b63a24] mb-4">Visión</h3>
              <p>
                Ser reconocidos como la empresa líder en la venta de lotes, destacándonos por nuestra integridad, transparencia y compromiso con la satisfacción total de nuestros clientes.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#007a4e] p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-[#b63a24] mb-4">Valores</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-semibold text-[#007a4e]">Integridad:</span> Actuar con honestidad, ética y transparencia en todas nuestras actividades y relaciones comerciales.</li>
                <li><span className="font-semibold text-[#007a4e]">Calidad:</span> Ofrecer lotes de alta calidad, con servicios e infraestructura adecuados, que cumplan con los estándares más exigentes de seguridad y comodidad.</li>
                <li><span className="font-semibold text-[#007a4e]">Servicio al cliente:</span> Priorizar las necesidades y expectativas de nuestros clientes, brindando un servicio amable, oportuno y personalizado, orientado a superar sus expectativas.</li>
                <li><span className="font-semibold text-[#007a4e]">Trabajo en equipo:</span> Fomentar un ambiente de colaboración entre nuestros empleados, promoviendo la participación, el respeto mutuo y la contribución activa de cada miembro del equipo.</li>
                <li><span className="font-semibold text-[#007a4e]">Sostenibilidad:</span> Promover prácticas responsables con el medio ambiente en el desarrollo de nuestros proyectos, buscando minimizar el impacto ambiental y fomentando la conservación de áreas naturales.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
