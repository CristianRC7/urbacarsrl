import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from './Navbar'

const proyectos = [
  { 
    id: 1, 
    titulo: "El Cañaveral", 
    imagen: "/canaveral.jpg",
    descripcion: `Bienvenido a 'El Cañaveral', donde encontrarás más que un hogar; encontrarás una comunidad diseñada para el disfrute de toda la familia. Descubre cómo la vida en nuestro proyecto se combina perfectamente con momentos de alegría y conexión.

    Descubre una nueva dimensión de hogar en 'El Cañaveral', donde la accesibilidad se une a la adaptabilidad. Estamos emocionados de presentarte un proyecto que no solo es una inversión en propiedades, sino en tu estilo de vida. Imagina disfrutar de tardes soleadas en nuestras áreas de juego para niños, mientras los más pequeños se divierten con seguridad. Para los adultos, ofrecemos zonas de esparcimiento y relajación donde cada día se siente como unas vacaciones.

    En el corazón de 'El Cañaveral', te espera un espacio especial: nuestro impresionante Área Social. Un lugar donde las risas, la diversión y la conexión familiar se entrelazan en un ambiente acogedor. Este espacio ha sido diseñado para ser el epicentro de las experiencias compartidas.

    En 'El Cañaveral', creemos que la calidad no debería comprometerse por el precio. Te ofrecemos precios accesibles para que puedas realizar tu sueño de tener tu propio hogar sin sacrificar la calidad ni las comodidades. Sabemos que cada cliente es único, y es por eso que en 'El Cañaveral' ofrecemos una variedad de opciones de pago adaptadas a tu comodidad financiera. Desde plazos flexibles hasta opciones personalizadas, nuestro objetivo es hacer que la adquisición de tu nuevo hogar sea lo más sencilla posible.

    Además de precios atractivos y flexibilidad en los pagos, 'El Cañaveral' ofrece un entorno que combina la funcionalidad con el confort. Con servicios básicos, espacios verdes y una ubicación estratégica, este proyecto está diseñado pensando en tu bienestar y comodidad.

    Nosotros no solo construimos hogares; construimos comunidades. En 'El Cañaveral', nos comprometemos a crear un entorno donde te sientas seguro, cómodo y parte de algo más grande. También queremos que cada miembro de la familia disfrute de 'El Cañaveral'. Desde áreas verdes para picnics familiares hasta canchas deportivas para la diversión activa, nuestra Área Social está diseñada para adaptarse a las diversas edades e intereses de todos.

    Te invitamos a ser parte de 'El Cañaveral', donde los sueños de un hogar propio se hacen realidad sin comprometer tu estabilidad financiera.

    ¿Estás listo para dar el paso hacia un futuro más accesible y adaptado a ti?`
  },
  { 
    id: 2, 
    titulo: "Olimpo 1", 
    imagen: "https://i.postimg.cc/NfJx7Vd9/LOGO-EL-OLIMPO.png",
    descripcion: `Bienvenido a "El Olimpo 1", un proyecto excepcional que redefine el concepto de vida urbana. "El Olimpo 1 es más que una urbanización, es un estilo de vida elevado. Situado estratégicamente en la zona nor-este de la ciudad, específicamente por la Virgen de lujan, este proyecto ha sido diseñado para ofrecer comodidad, accesibilidad y calidad de vida excepcionales.

    En El Olimpo 1, tu comodidad es nuestra prioridad. Contamos con todos los servicios básicos para garantizar que tu vida diaria sea sin complicaciones. Desde suministro de agua confiable hasta conexiones de electricidad seguras, nos aseguramos de cubrir todas tus necesidades.

    A tan solo 2 minutos de distancia, descubrirás un encantador pueblo que agrega una dimensión extra a tu vida, en "ZAFRANILLA" contaras con un colegio para la educación de tus seres queridos, un centro de salud para tu bienestar y canchas deportivas donde se celebran emocionantes campeonatos.

    Nuestra urbanización brilla con seguridad y belleza, gracias a un sistema de alumbrado público, disfruta de paseos nocturnos seguros y un ambiente acogedor que resalta el paisaje, con líneas de transporte que atraviesan El Olimpo 1, la movilidad nunca ha sido tan fácil. Conecta con diferentes partes de la ciudad de manera eficiente, permitiéndote aprovechar al máximo lo que la ciudad tiene para ofrecer, mientras disfrutas de la tranquilidad de tu hogar.

    En El Olimpo 1, no solo vendemos terrenos, ofrecemos la oportunidad de construir tu hogar en un entorno que mejora tu calidad de vida. El Olimpo 1 es el lugar donde tus aspiraciones se encuentran con la realidad. Únete a nosotros en esta emocionante travesía hacia un futuro lleno de posibilidades. ¿Listo para hacer de El Olimpo 1 tu nuevo hogar?`
  },
  { 
    id: 3, 
    titulo: "Olimpo 2", 
    imagen: "https://i.postimg.cc/7YYVzDnr/LOGO-EL-OLIMPO-2.png",
    descripcion: `Te invitamos a explorar 'El Olimpo 2', un proyecto que fusiona la serenidad de un entorno verde con las comodidades esenciales a solo minutos de distancia. Descubre cómo este desarrollo se convierte en tu refugio perfecto, equilibrando la naturaleza con las conexiones comunitarias. En el corazón de 'El Olimpo 2' encontrarás un oasis verde que va más allá de lo común. Nuestra amplia área verde no solo ofrece un respiro natural, sino que también alberga una cancha que se convierte en el escenario perfecto para actividades deportivas y recreativas, a tan solo 2 minutos de distancia, descubrirás un encantador pueblo que agrega una dimensión extra a tu vida en 'El Olimpo 2'. Este pueblo cuenta con un colegio para la educación de tus seres queridos, un centro de salud para tu bienestar y canchas deportivas donde se celebran emocionantes campeonatos, la movilidad es sencilla gracias a las líneas de transporte que conectan directamente con la urbanización. Viaja con facilidad hacia y desde tu hogar, permitiéndote disfrutar de todo lo que el entorno tiene para ofrecer. Este proyecto no solo es sobre adquirir un lote de terreno; es sobre construir una vida plena. 'El Olimpo 2' combina la belleza natural con las comodidades modernas y la vitalidad de una comunidad activa, te invitamos a ser parte de algo más grande. Un lugar donde la tranquilidad y la conexión comunitaria se entrelazan para crear un hogar verdaderamente excepcional. ¿Listo para vivir en armonía con la naturaleza y la comunidad?`
  },
]

export default function ProyectoDetalle() {
  const { id } = useParams()
  const proyecto = proyectos.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="relative h-72 sm:h-96 md:h-[30rem]">
              
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-6 sm:p-10 md:p-16">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{proyecto.descripcion}</p>
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
    </div>
  )
}