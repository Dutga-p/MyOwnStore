import { BrowserRouter, Routes, Route } from 'react-router';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './componets/Home.jsx';
import Products from './componets/Products.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Productos" element={<Products />} />
    </Routes>
  </BrowserRouter>
);