import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function TerminosCondiciones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-[#b63a24] mb-8 text-center">
              Términos y Condiciones
            </h1>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
                <p className="leading-relaxed">
                  Al acceder y utilizar este sitio web, aceptas estar sujeto a estos Términos y Condiciones, 
                  todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento 
                  de las leyes locales aplicables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso del Sitio Web</h2>
                <p className="leading-relaxed mb-3">
                  Este sitio web es propiedad de Urbacar S.R.L. y está destinado a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proporcionar información sobre nuestros proyectos inmobiliarios</li>
                  <li>Facilitar el contacto entre clientes potenciales y nuestra empresa</li>
                  <li>Mostrar galerías de imágenes de nuestras propiedades</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propiedad Intelectual</h2>
                <p className="leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo pero no limitado a textos, gráficos, 
                  logos, imágenes y software, es propiedad de Urbacar S.R.L. o de sus proveedores de 
                  contenido y está protegido por las leyes de propiedad intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Información de Propiedades</h2>
                <p className="leading-relaxed">
                  La información sobre propiedades mostrada en este sitio web se proporciona solo con 
                  fines informativos. Aunque nos esforzamos por mantener la información actualizada y 
                  precisa, no garantizamos la exactitud, integridad o actualidad de la información.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitación de Responsabilidad</h2>
                <p className="leading-relaxed">
                  Urbacar S.R.L. no será responsable de ningún daño directo, indirecto, incidental, 
                  consecuente o punitivo que surja del uso o la imposibilidad de usar este sitio web 
                  o sus servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificaciones</h2>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las 
                  modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
                <p className="leading-relaxed">
                  Para cualquier pregunta sobre estos Términos y Condiciones, contáctanos en:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Urbacar S.R.L.</strong></p>
                  <p>Dirección: C/Suárez de Figueroa N° 536, entre Av. Cañoto y Cordillera</p>
                  <p>Teléfono: (+591) 67708762</p>
                  <p>Email: urbacarsrl.536@gmail.com</p>
                </div>
              </section>
            </div>

            <div className="mt-12 flex justify-center">
              <Link 
                to="/" 
                className="inline-block bg-[#b63a24] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#a03320] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Volver a Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
