import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import PP from './pages/PP'
import CP from './pages/CP'
import Shipping from './pages/Shipping'
import Warranty from './pages/Warranty'
import { ThemeProvider } from './context/themes/ThemeProvider'
import { CartProvider} from './context/car/CartProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Products />} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="/TérminosYCondiciones" element={<TermsAndConditions />} />
            <Route path="/PolíticaDePrivacidad" element={<PP />} />
            <Route path="/PolíticaDeCookies" element={<CP />} />
            <Route path="/PolíticaDeCookies" element={<CP />} />
            <Route path="/Envíos" element={<Shipping />} />
            <Route path="/Garantía" element={<Warranty />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)