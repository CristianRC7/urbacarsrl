import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function PoliticaPrivacidad() {
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
              Política de Privacidad
            </h1>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introducción</h2>
                <p className="leading-relaxed">
                  En Urbacar S.R.L., nos comprometemos a proteger la privacidad de nuestros usuarios. 
                  Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información 
                  personal que nos proporcionas a través de nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Información que Recopilamos</h2>
                <p className="leading-relaxed mb-3">
                  Podemos recopilar los siguientes tipos de información:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información sobre consultas de propiedades</li>
                  <li>Datos de navegación y cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cómo Usamos tu Información</h2>
                <p className="leading-relaxed mb-3">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Proporcionarte información sobre nuestros proyectos inmobiliarios</li>
                  <li>Mejorar nuestros servicios y experiencia del usuario</li>
                  <li>Enviar comunicaciones de marketing (con tu consentimiento)</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protección de Datos</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                  tu información personal contra el acceso no autorizado, la alteración, divulgación o 
                  destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento 
                  electrónico es 100% seguro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartir Información</h2>
                <p className="leading-relaxed">
                  No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu 
                  consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o 
                  cumplir con requisitos legales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
                <p className="leading-relaxed">
                  Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. 
                  Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar 
                  la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Tus Derechos</h2>
                <p className="leading-relaxed mb-3">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar información inexacta</li>
                  <li>Solicitar la eliminación de tu información</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Enlaces a Terceros</h2>
                <p className="leading-relaxed">
                  Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables 
                  de las prácticas de privacidad de estos sitios externos. Te recomendamos revisar sus 
                  políticas de privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cambios a esta Política</h2>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. 
                  Te notificaremos sobre cambios significativos publicando la nueva política en esta página 
                  con una fecha de actualización revisada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
                <p className="leading-relaxed">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tu 
                  información personal, puedes contactarnos a través de:
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
