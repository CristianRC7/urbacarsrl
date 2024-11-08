import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './screens/Inicio'
import QuienesSomos from './screens/QuienesSomos'
import Proyectos from './screens/Proyectos'
import Galeria from './screens/Galeria'
import Contactanos from './screens/Contactanos'
import ProyectoDetalle from './components/ProyectoDetalle'

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Inicio />
                <QuienesSomos />
                <Proyectos />
                <Galeria />
              </main>
              <Contactanos />
            </>
          } />
          <Route path="/proyecto/:id" element={<ProyectoDetalle />} />
        </Routes>
      </div>
    </Router>
  )
}