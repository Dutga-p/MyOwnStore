import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './componets/Home'
import Products from './componets/Products'
import { ThemeProvider } from './componets/themes/ThemeProvider'
import { CartProvider} from './componets/car/CartProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)