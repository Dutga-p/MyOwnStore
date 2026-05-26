import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, Shield, Truck, CheckCircle2, Star, ChevronRight, X, Package, Info } from 'lucide-react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../hooks/useTheme';

import AsusRTX4070TISuper from '../../public/graphics_card/Asus RTX 4070 TI super.jpg';
import AMDRyzen77800X3D from '../../public/processor/AMDRyzen77800X3D.jpg';
import CorsairVengeance32GB from '../../public/RAM_memory/CorsairVengeance32GB.jpg';
import Samsung990PRO2TB from '../../public/Storage/Samsung990PRO2TB.jpg';
import RTX4080SUPER from '../../public/graphics_card/RTX4080SUPER.png';
import INTELi914900k from '../../public/processor/INTELi914900k.png';
import GSkillTridentZ564GB from '../../public/RAM_memory/GSkillTridentZ564GB.png';
import WDBlackSN850X4TB from '../../public/Storage/WDBlackSN850X4TB.png';
import RTX4060Ti from '../../public/graphics_card/RTX4060Ti.png';
import AMDRyzen57600X from '../../public/processor/AMDRyzen57600X.png';
import KingstonFury16GB from '../../public/RAM_memory/KingstonFury16GB.png';
import CrucialP5Plus1TB from '../../public/Storage/CrucialP5Plus1TB.png';
import ASUSROGStrixZ790 from '../../public/motherboard/ASUSROGStrixZ790.png';
import MSIMAGB650 from '../../public/motherboard/MSIMAGB650.png';
import RTX4090 from '../../public/graphics_card/RTX4090.png';
import AMDRyzen97950X3D from '../../public/processor/AMDRyzen97950X3D.png';

function formatCOP(value) {
  try {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(Number(value));
  } catch {
    return `$${Number(value).toFixed(0)}`;
  }
}

function normalizeSlug(name = '') {
  return String(name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getRelatedProducts(allProducts, currentId) {
  // Heurística simple para demo: misma categoría o misma marca y precio cercano
  const current = allProducts.find((p) => p.id === currentId);
  if (!current) return [];

  return allProducts
    .filter((p) => p.id !== currentId)
    .map((p) => {
      const catScore = p.category === current.category ? 30 : 0;
      const brandScore = p.brand === current.brand ? 20 : 0;
      const priceScore = Math.max(0, 30 - Math.abs(p.price - current.price) / 500000);
      return { p, score: catScore + brandScore + priceScore };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ p }) => p);
}

function ProductDetails() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { slug } = useParams();

  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
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
  } = useCart();

  const categories = useMemo(
    () => [
      { id: 'gpu', name: 'Tarjetas Gráficas' },
      { id: 'cpu', name: 'Procesadores' },
      { id: 'ram', name: 'Memorias RAM' },
      { id: 'storage', name: 'Almacenamiento' },
      { id: 'motherboard', name: 'Placas Madre' },
    ],
    []
  );

  const allProducts = useMemo(
    () => [
      { id: 1, name: 'RTX 4070 Ti SUPER', category: 'gpu', brand: 'NVIDIA', price: 3500000, rating: 4.8, reviews: 234, stock: 15, img: AsusRTX4070TISuper },
      { id: 2, name: 'AMD Ryzen 7 7800X3D', category: 'cpu', brand: 'AMD', price: 1748000, rating: 4.9, reviews: 567, stock: 8, img: AMDRyzen77800X3D },
      { id: 3, name: 'Corsair Vengeance 32GB', category: 'ram', brand: 'Corsair', price: 505000, rating: 4.7, reviews: 892, stock: 25, img: CorsairVengeance32GB },
      { id: 4, name: 'Samsung 990 PRO 2TB', category: 'storage', brand: 'Samsung', price: 777000, rating: 4.9, reviews: 445, stock: 0, img: Samsung990PRO2TB },
      { id: 5, name: 'RTX 4080 SUPER', category: 'gpu', brand: 'NVIDIA', price: 4661000, rating: 4.9, reviews: 189, stock: 5, img: RTX4080SUPER },
      { id: 6, name: 'Intel Core i9-14900K', category: 'cpu', brand: 'Intel', price: 2292000, rating: 4.7, reviews: 321, stock: 12, img: INTELi914900k },
      { id: 7, name: 'G.Skill Trident Z5 64GB', category: 'ram', brand: 'Corsair', price: 972000, rating: 4.8, reviews: 156, stock: 18, img: GSkillTridentZ564GB },
      { id: 8, name: 'WD Black SN850X 4TB', category: 'storage', brand: 'Samsung', price: 1554000, rating: 4.8, reviews: 278, stock: 7, img: WDBlackSN850X4TB },
      { id: 9, name: 'RTX 4060 Ti', category: 'gpu', brand: 'NVIDIA', price: 1748000, rating: 4.6, reviews: 412, stock: 22, img: RTX4060Ti },
      { id: 10, name: 'AMD Ryzen 5 7600X', category: 'cpu', brand: 'AMD', price: 1166000, rating: 4.7, reviews: 534, stock: 15, img: AMDRyzen57600X },
      { id: 11, name: 'Kingston Fury 16GB', category: 'ram', brand: 'Corsair', price: 311000, rating: 4.5, reviews: 621, stock: 30, img: KingstonFury16GB },
      { id: 12, name: 'Crucial P5 Plus 1TB', category: 'storage', brand: 'Samsung', price: 505000, rating: 4.6, reviews: 389, stock: 20, img: CrucialP5Plus1TB },
      { id: 13, name: 'ASUS ROG Strix Z790', category: 'motherboard', brand: 'ASUS', price: 1554000, rating: 4.8, reviews: 167, stock: 8, img: ASUSROGStrixZ790 },
      { id: 14, name: 'MSI MAG B650', category: 'motherboard', brand: 'MSI', price: 972000, rating: 4.7, reviews: 234, stock: 11, img: MSIMAGB650 },
      { id: 15, name: 'RTX 4090', category: 'gpu', brand: 'NVIDIA', price: 6662000, rating: 5.0, reviews: 145, stock: 3, img: RTX4090 },
      { id: 16, name: 'AMD Ryzen 9 7950X3D', category: 'cpu', brand: 'AMD', price: 1719000, rating: 4.9, reviews: 278, stock: 6, img: AMDRyzen97950X3D },
    ],
    []
  );

  const product = useMemo(() => {
    if (!slug) return null;
    const found = allProducts.find((p) => normalizeSlug(p.name) === slug);
    return found ?? null;
  }, [allProducts, slug]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(allProducts, product.id);
  }, [allProducts, product]);

  const categoryLabel = useMemo(() => {
    if (!product) return '';
    return categories.find((c) => c.id === product.category)?.name ?? product.category;
  }, [categories, product]);

  const cartLine = useMemo(() => {
    if (!product) return null;
    return cart.find((c) => c.id === product.id) ?? null;
  }, [cart, product]);

  if (!product) {
    return (
      <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} cartCount={getCartCount()} onCartOpen={() => setCartOpen(true)} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link to="/">Inicio</Link>
              <ChevronRight size={16} />
              <span className="text-gray-900 dark:text-gray-100 font-medium">Detalle de producto</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12 text-center">
          <div className="text-gray-300 dark:text-gray-700 mb-4">
            <Info size={64} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Producto no encontrado</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Puede que el enlace esté mal o el producto no exista en la tienda.</p>
          <Link to="/Productos" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Volver al catálogo
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  const stockMessage = product.stock === 0 ? 'Agotado' : product.stock <= 10 ? `¡Últimas ${product.stock} unidades!` : 'Disponible';

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Notificación */}
      {notification && (
        <div
          className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl border-2 animate-slide-in ${
            notification.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200'
              : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200'
          }`}
        >
          <p className="font-medium">{notification.message}</p>
        </div>
      )}

      {/* Overlay del carrito */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      )}

      {/* Sidebar del carrito */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <ShoppingCart size={24} />
              <h2 className="text-xl font-bold">Tu Carrito</h2>
              {getCartCount() > 0 && (
                <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">{getCartCount()}</span>
              )}
            </div>
            <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="Cerrar carrito">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Package size={64} className="text-gray-300 dark:text-gray-700 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tu carrito está vacío</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Agrega productos para comenzar</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800">
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">{formatCOP(item.price)}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-1 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          aria-label="Eliminar del carrito"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">{formatCOP(getItemSubtotal(item))}</p>
                    </div>
                  </div>
                ))}

                <button onClick={clearCart} className="w-full text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium py-2 transition-colors">
                  Vaciar carrito
                </button>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 p-6 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-semibold">{formatCOP(getCartTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Envío</span>
                  <span className="font-semibold">
                    {getShippingCost() === 0 ? <span className="text-green-600 dark:text-green-400">¡Gratis!</span> : formatCOP(getShippingCost())}
                  </span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{formatCOP(getFinalTotal())}</span>
                </div>
              </div>
              <button onClick={handleCheckout} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Proceder al pago
              </button>
              <button onClick={() => setCartOpen(false)} className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 rounded-xl font-medium transition-colors">
                Seguir comprando
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navbar */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        cartCount={getCartCount()}
        onCartOpen={() => setCartOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/">Inicio</Link>
            <ChevronRight size={16} />
            <Link to="/Productos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Productos
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-gray-100 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Imagen + badges */}
          <div className="space-y-6">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.stock === 0 ? 'bg-red-500 text-white' : product.stock <= 10 ? 'bg-amber-500 text-white' : 'bg-green-600 text-white'
                  }`}
                >
                  {stockMessage}
                </div>
              </div>
            </div>

            {/* Confianza */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                <Shield className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="font-semibold text-sm">Compra segura</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Protección en tus transacciones</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                <Truck className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="font-semibold text-sm">Envío a todo Colombia</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Calculado en checkout</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info de producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {categoryLabel} • {product.brand}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">({product.reviews} reseñas)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">{formatCOP(product.price)}</span>
                <span className="text-base text-gray-500 line-through">{formatCOP(product.price * 1.2)}</span>
              </div>

              {/* Acción */}
              <div className="space-y-3">
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm ${
                    product.stock > 0
                      ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.stock > 0 ? 'Agregar al carrito' : 'No disponible'}
                </button>

                {cartLine ? (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">En tu carrito</p>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Cantidad: {cartLine.quantity}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(product.id, cartLine.quantity - 1)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-bold">{cartLine.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, cartLine.quantity + 1)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="ml-auto p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        aria-label="Eliminar"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 dark:text-green-400" size={20} />
                      <div>
                        <p className="font-semibold text-sm mb-1">¿Dudas?</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Revisa la guía de compra y políticas para comprar sin estrés.</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link to="/Garantía" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        Garantía
                      </Link>
                      <Link to="/Envíos" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        Envíos
                      </Link>
                      <Link to="/PolíticaDeCookies" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        Cookies
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Especificaciones (demo) */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
              <h2 className="text-lg font-bold">Lo que te llevas</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Garantía incluida</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">6 meses en productos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Envío calculado</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Según tu ciudad y total del pedido</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Recomendado para</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.category === 'gpu'
                    ? 'Gaming fluido y render optimizado con tecnología moderna.'
                    : product.category === 'cpu'
                      ? 'Rendimiento multitarea y cargas pesadas para tu PC.'
                      : product.category === 'ram'
                        ? 'Más multitarea, mejor estabilidad y velocidad en tu sistema.'
                        : product.category === 'storage'
                          ? 'Arranque rápido y mejores tiempos de carga para tus juegos y programas.'
                          : 'Compatibilidad y expansión para tu plataforma con buen soporte.'}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Stock</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {product.stock === 0
                    ? 'Ahora mismo está agotado. Si te interesa, escríbenos para avisarte disponibilidad.'
                    : product.stock <= 10
                      ? 'Hay unidades limitadas para este producto.'
                      : 'Hay disponibilidad para despacho inmediato.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recomendados para ti</h2>
              <Link to="/Productos" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Ver más productos
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => {
                const slugP = normalizeSlug(p.name);
                return (
                  <Link
                    key={p.id}
                    to={`/Productos/${slugP}`}
                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      {p.stock === 0 ? (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">Agotado</div>
                      ) : p.stock <= 10 ? (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">¡Últimas {p.stock}!</div>
                      ) : null}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">{p.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < Math.floor(p.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">({p.reviews})</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{formatCOP(p.price)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer />

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}

export default ProductDetails;

