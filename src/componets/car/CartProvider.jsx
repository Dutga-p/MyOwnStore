import { createContext, useState, useEffect } from 'react';

// No exportar el contexto en la misma línea
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product) => {
    if (product.stock === 0) {
      showNotification('Producto agotado', 'error');
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          showNotification(`Stock máximo: ${product.stock} unidades`, 'error');
          return prevCart;
        }
        showNotification(`${product.name} agregado al carrito`, 'success');
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        showNotification(`${product.name} agregado al carrito`, 'success');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    showNotification('Producto eliminado', 'success');
  };

  const updateQuantity = (productId, newQuantity, productStock) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    if (newQuantity > productStock) {
      showNotification(`Stock máximo: ${productStock} unidades`, 'error');
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    showNotification('Carrito vaciado', 'success');
  };

  const getItemSubtotal = (item) => item.price * item.quantity;
  const getCartTotal = () => cart.reduce((total, item) => total + getItemSubtotal(item), 0);
  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getShippingCost = () => getCartTotal() >= 100 ? 0 : 15;
  const getFinalTotal = () => getCartTotal() + getShippingCost();

  const handleCheckout = () => {
    if (cart.length === 0) {
      showNotification('El carrito está vacío', 'error');
      return;
    }
    
    showNotification('Redirigiendo a pago...', 'success');
    
    setTimeout(() => {
      clearCart();
      showNotification('¡Compra simulada con éxito!', 'success');
    }, 1500);
  };

  const value = {
    cart,
    notification,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemSubtotal,
    getCartTotal,
    getCartCount,
    getShippingCost,
    getFinalTotal,
    handleCheckout,
    showNotification
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Exportar al final
export { CartContext };