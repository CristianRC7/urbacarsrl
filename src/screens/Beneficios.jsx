import { DropletIcon, LightbulbIcon, TreePineIcon,TruckIcon, SchoolIcon, SignatureIcon } from 'lucide-react';

const beneficios = [
  { icon: DropletIcon, title: 'Agua Potable', description: 'Suministro constante de agua potable de alta calidad.' },
  { icon: LightbulbIcon, title: 'Electricidad', description: 'Red eléctrica confiable y de alto voltaje.' },
  { icon: SignatureIcon, title: 'Lotes a sola firma', description: 'Adquiere tu lote con el trámite más sencillo y rápido.' },
  { icon: TreePineIcon, title: 'Áreas Verdes', description: 'Espacios verdes diseñados para el disfrute familiar.' },
  { icon: SchoolIcon, title: 'Unidades Educativas', description: 'Acceso a instituciones educativas cercanas.' },
  { icon: TruckIcon, title: 'Accesibilidad', description: 'Vías de acceso pavimentadas y bien mantenidas.' },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#b63a24] sm:text-5xl mb-12 text-center">
          Beneficios de Nuestras Urbanizaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${
                  index % 3 === 0 ? 'bg-[#b63a24] text-white' :
                  index % 3 === 1 ? 'bg-yellow-400 text-gray-800' :
                  'bg-green-500 text-white'
                }`}>
                  <beneficio.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{beneficio.title}</h3>
              </div>
              <p className="text-gray-600">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
