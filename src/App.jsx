import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Inicio from './screens/Inicio'
import QuienesSomos from './screens/QuienesSomos'
import NuestraHistoria from './screens/NuestraHistoria'
import Proyectos from './screens/Proyectos'
import Galeria from './screens/Galeria'
import Contactanos from './screens/Contactanos'

import Navbar from './components/Navbar'
import ProyectoDetalle from './components/ProyectoDetalle'
import FloatingButton from './components/FloatingButton'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Inicio />
                <div data-aos="fade-up">
                  <QuienesSomos />
                </div>
                <div data-aos="fade-up">
                  <NuestraHistoria />
                </div>
                <div data-aos="fade-up">
                  <Proyectos />
                </div>
                <div data-aos="fade-up">
                  <Galeria />
                </div>
              </main>
              <Contactanos />
              <FloatingButton />
            </>
          } />
          <Route path="/proyecto/:id" element={
            <>
              <ProyectoDetalle />
              <FloatingButton />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}