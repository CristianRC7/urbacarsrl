import Navbar from './components/Navbar'
import Inicio from './screens/Inicio'
import QuienesSomos from './screens/QuienesSomos'
import Proyectos from './screens/Proyectos'
import Galeria from './screens/Galeria'
import Contactanos from './screens/Contactanos'

export default function Component() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-20">
        <Inicio />
        <QuienesSomos />
        <Proyectos />
        <Galeria />
      </main>
      <Contactanos />
    </div>
  )
}