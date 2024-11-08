import { MapPin, Phone, Mail, Briefcase } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export default function Contactanos() {
  return (
    <footer id="contactanos" className="bg-[#333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2" size={20} />
                C/Suárez de Figueroa N° 536, entre Av. Cañoto y Cordillera
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                (+591) 67708762
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                urbacarsrl.536@gmail.com
              </p>
              <p className="flex items-center">
                <Briefcase className="mr-2" size={20} />
                Servicio de bienes raíces
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-[#1877F2] transition-colors duration-300 transform hover:scale-110">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-[#E4405F] transition-colors duration-300 transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-[#000000] transition-colors duration-300 transform hover:scale-110">
                <FaTiktok size={24} />
              </a>
              <a href="#" className="hover:text-[#25D366] transition-colors duration-300 transform hover:scale-110">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Ubicación</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30392.851349885423!2d-63.18753399999999!3d-17.786695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9eeb6651f4d%3A0x34f3232dd20151e4!2sURBACAR%20S.R.L.!5e0!3m2!1ses-419!2sbo!4v1731014778108!5m2!1ses-419!2sbo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2a2a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Urbacar S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}