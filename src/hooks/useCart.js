import { useContext } from 'react';
import { CartContext } from '../context/car/CartProvider';

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
}