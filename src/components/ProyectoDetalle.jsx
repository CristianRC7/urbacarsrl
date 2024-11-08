import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const proyectos = [
  { 
    id: 1, 
    titulo: "El Cañaveral", 
    imagen: "/canaveral.jpg",
    descripcion: "Bienvenido a 'El Cañaveral', donde encontrarás más que un hogar; encontrarás una comunidad diseñada para el disfrute de toda la familia. Descubre cómo la vida en nuestro proyecto se combina perfectamente con momentos de alegría y conexión. Descubre una nueva dimensión de hogar en 'El Cañaveral', donde la accesibilidad se une a la adaptabilidad. Estamos emocionados de presentarte un proyecto que no solo es una inversión en propiedades, sino en tu estilo de vida. Imagina disfrutar de tardes soleadas en nuestras áreas de juego para niños, mientras los más pequeños se divierten con seguridad. Para los adultos, ofrecemos zonas de esparcimiento y relajación donde cada día se siente como unas vacaciones."
  },
  { 
    id: 2, 
    titulo: "Olimpo 1", 
    imagen: "/olimpo1.jpg",
    descripcion: "Bienvenido a 'Olimpo 1', donde encontrarás más que un hogar; encontrarás una comunidad diseñada para el disfrute de toda la familia. Descubre cómo la vida en nuestro proyecto se combina perfectamente con momentos de alegría y conexión. Descubre una nueva dimensión de hogar en 'Olimpo 1', donde la accesibilidad se une a la adaptabilidad. Estamos emocionados de presentarte un proyecto que no solo es una inversión en propiedades, sino en tu estilo de vida. Imagina disfrutar de tardes soleadas en nuestras áreas de juego para niños, mientras los más pequeños se divierten con seguridad. Para los adultos, ofrecemos zonas de esparcimiento y relajación donde cada día se siente como unas vacaciones."
  },
  { 
    id: 3, 
    titulo: "Olimpo 2", 
    imagen: "/olimpo2.jpg",
    descripcion: "Bienvenido a 'Olimpo 2', donde encontrarás más que un hogar; encontrarás una comunidad diseñada para el disfrute de toda la familia. Descubre cómo la vida en nuestro proyecto se combina perfectamente con momentos de alegría y conexión. Descubre una nueva dimensión de hogar en 'Olimpo 2', donde la accesibilidad se une a la adaptabilidad. Estamos emocionados de presentarte un proyecto que no solo es una inversión en propiedades, sino en tu estilo de vida. Imagina disfrutar de tardes soleadas en nuestras áreas de juego para niños, mientras los más pequeños se divierten con seguridad. Para los adultos, ofrecemos zonas de esparcimiento y relajación donde cada día se siente como unas vacaciones."
  },
]

export default function ProyectoDetalle() {
  const { id } = useParams()
  const proyecto = proyectos.find(p => p.id === parseInt(id))

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-[#b63a24] mb-6">{proyecto.titulo}</h1>
          <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-64 object-cover rounded-lg mb-6" />
          <p className="text-gray-700 text-lg">{proyecto.descripcion}</p>
        </div>
      </div>
    </div>
  )
}