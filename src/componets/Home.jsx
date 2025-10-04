import { useState } from "react";
import { Sun, Moon, ShoppingCart, Search, Shield, Truck, CreditCard, Award, Star, ChevronRight, Menu, X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import RTX4070TISuperAsus from '../../public/graphics_card/Asus RTX 4070 TI super.jpg'
import AMDRyzen77800X3D from '../../public/processor/AMDRyzen77800X3D.jpg'
import CorsairVengeance32GB from '../../public/RAM_memory/CorsairVengeance32GB.jpg'
import Samsung990PRO2TB from '../../public/Storage/Samsung990PRO2TB.jpg'

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  // Toggle dark mode
  const dark = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Mostrar notificación temporal
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const categories = [
    { name: "Tarjetas Gráficas", icon: "🎮", color: "from-purple-500 to-pink-500" },
    { name: "Procesadores", icon: "⚡", color: "from-blue-500 to-cyan-500" },
    { name: "Memorias RAM", icon: "💾", color: "from-green-500 to-emerald-500" },
    { name: "Almacenamiento", icon: "💿", color: "from-orange-500 to-red-500" },
    { name: "Placas Madre", icon: "🔧", color: "from-yellow-500 to-orange-500" },
    { name: "Fuentes de Poder", icon: "🔋", color: "from-indigo-500 to-purple-500" }
  ];

  const featuredProducts = [
    { id: 1, name: "RTX 4070 Ti SUPER", price: 899.99, rating: 4.8, reviews: 234, stock: 15, img: RTX4070TISuperAsus },
    { id: 2, name: "AMD Ryzen 7 7800X3D", price: 449.99, rating: 4.9, reviews: 567, stock: 8, img: AMDRyzen77800X3D},
    { id: 3, name: "Corsair Vengeance 32GB", price: 129.99, rating: 4.7, reviews: 892, stock: 25, img: CorsairVengeance32GB},
    { id: 4, name: "Samsung 990 PRO 2TB", price: 199.99, rating: 4.9, reviews: 445, stock: 0, img: Samsung990PRO2TB}
  ];

  const trustBadges = [
    { icon: Shield, text: "Compra Segura", desc: "SSL Certificado" },
    { icon: Truck, text: "Envío Gratis", desc: "En compras superiores a 399.999 COP" },
    { icon: CreditCard, text: "Multiples modos de pago", desc: "Nequi, Bancolombia, Efectivo" },
    { icon: Award, text: "Garantía", desc: "6 meses en productos" }
  ];

  // ========== LÓGICA DEL CARRITO ==========
  
  // Agregar producto al carrito
  const addToCart = (product) => {
    if (product.stock === 0) {
      showNotification('Producto agotado', 'error');
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Si ya existe, aumentar cantidad (validando stock)
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
        // Si no existe, agregarlo
        showNotification(`${product.name} agregado al carrito`, 'success');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    showNotification('Producto eliminado', 'success');
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    const product = featuredProducts.find(p => p.id === productId);
    
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    if (newQuantity > product.stock) {
      showNotification(`Stock máximo: ${product.stock} unidades`, 'error');
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

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
    showNotification('Carrito vaciado', 'success');
  };

  // Calcular subtotal de un item
  const getItemSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // Calcular total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + getItemSubtotal(item), 0);
  };

  // Calcular total de items en el carrito
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcular envío (gratis si supera 399.999 COP que es aprox $100 USD)
  const getShippingCost = () => {
    const total = getCartTotal();
    return total >= 100 ? 0 : 15;
  };

  // Calcular total final
  const getFinalTotal = () => {
    return getCartTotal() + getShippingCost();
  };

  // Procesar compra (simulado)
  const handleCheckout = () => {
    if (cart.length === 0) {
      showNotification('El carrito está vacío', 'error');
      return;
    }
    
    // Aquí iría la lógica de integración con pasarela de pago
    showNotification('Redirigiendo a pago...', 'success');
    console.log('Procesando compra:', {
      items: cart,
      subtotal: getCartTotal(),
      shipping: getShippingCost(),
      total: getFinalTotal()
    });
    
    // Simular checkout
    setTimeout(() => {
      clearCart();
      setCartOpen(false);
      showNotification('¡Compra simulada con éxito!', 'success');
    }, 1500);
  };

  return (
    <div id="main" className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Notificación flotante */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl border-2 animate-slide-in ${
          notification.type === 'success' 
            ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200' 
            : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200'
        }`}>
          <p className="font-medium">{notification.message}</p>
        </div>
      )}

      {/* Overlay del carrito */}
      {cartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Sidebar del carrito */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ${
        cartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header del carrito */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <ShoppingCart size={24} />
              <h2 className="text-xl font-bold">Tu Carrito</h2>
              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                {getCartCount()}
              </span>
            </div>
            <button 
              onClick={() => setCartOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items del carrito */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 dark:text-gray-700 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tu carrito está vacío</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Agrega productos para comenzar
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800">
                    <img 
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">
                        ${item.price.toFixed(2)}
                      </p>
                      
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-1 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Stock: {item.stock} unidades
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">
                        ${getItemSubtotal(item).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}

                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium py-2 transition-colors"
                  >
                    Vaciar carrito
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Resumen y checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 p-6 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Envío</span>
                  <span className="font-semibold">
                    {getShippingCost() === 0 ? (
                      <span className="text-green-600 dark:text-green-400">¡Gratis!</span>
                    ) : (
                      `$${getShippingCost().toFixed(2)}`
                    )}
                  </span>
                </div>
                {getCartTotal() < 100 && (
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    Agrega ${(100 - getCartTotal()).toFixed(2)} más para envío gratis
                  </p>
                )}
                <div className="flex justify-between text-base pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    ${getFinalTotal().toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Proceder al pago
              </button>
              
              <button
                onClick={() => setCartOpen(false)}
                className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 rounded-xl font-medium transition-colors"
              >
                Seguir comprando
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navbar mejorado */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DStore
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Productos</a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ofertas</a>
              <a href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Search size={20} />
              </button>
              
              <button 
                onClick={dark} 
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
              </button>

              <button 
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {getCartCount()}
                  </span>
                )}
              </button>

              <button 
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <nav className="flex flex-col p-4 gap-2">
              <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Inicio</a>
              <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Productos</a>
              <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Ofertas</a>
              <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contacto</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero mejorado */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-20 lg:py-32">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Nuevos productos cada semana
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Construye tu PC<br />de ensueño
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Componentes de última generación con garantía oficial y los mejores precios del mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Ver catálogo completo
                <ChevronRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                Arma tu PC
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  <badge.icon size={24} />
                </div>
                <div>
                  <div className="font-semibold text-sm">{badge.text}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">Explora por categoría</h3>
            <p className="text-gray-600 dark:text-gray-400">Todo lo que necesitas para tu PC en un solo lugar</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:scale-105"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h4 className="text-sm font-semibold">{cat.name}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados mejorados */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-3">Productos destacados</h3>
              <p className="text-gray-600 dark:text-gray-400">Los más vendidos este mes</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all">
              Ver todos
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-gray-50 dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.stock === 0 ? (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                      Agotado
                    </div>
                  ) : product.stock <= 10 && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      ¡Últimas {product.stock} unidades!
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      product.stock > 0 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg' 
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {product.stock > 0 ? 'Agregar al carrito' : 'No disponible'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Quieres ofertas exclusivas?</h3>
          <p className="text-xl mb-8 text-white/90">Suscríbete y recibe un 10% de descuento en tu primera compra</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-shadow whitespace-nowrap">
              Suscribirme
            </button>
          </div>
        </div>
      </section>

      {/* Footer mejorado */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  D
                </div>
                <h1 className="text-xl font-bold">DStore</h1>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tu tienda de confianza para componentes de PC de alta calidad.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tienda</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Productos</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ofertas</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Novedades</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Arma tu PC</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Garantías</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Preguntas frecuentes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Política de cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2025 DStore. Todos los derechos reservados. Hecho con ❤️ para gamers.</p>
          </div>
        </div>
      </footer>

      {/* Estilos para animaciones */}
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Home;