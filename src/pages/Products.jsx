import { useState } from "react";
import { ShoppingCart, Search, Star, ChevronRight, Menu, X, Plus, Minus, Trash2, ShoppingBag, Filter, SlidersHorizontal, Grid3x3, List, ChevronDown } from "lucide-react";
import { useCart } from "../hooks/useCart";
import AsusRTX4070TISuper from '../../public/graphics_card/Asus RTX 4070 TI super.jpg'
import AMDRyzen77800X3D from "../../public/processor/AMDRyzen77800X3D.jpg";
import CorsairVengeance32GB from "../../public/RAM_memory/CorsairVengeance32GB.jpg";
import Samsung990PRO2TB from "../../public/Storage/Samsung990PRO2TB.jpg";
import RTX4080SUPER from "../../public/graphics_card/RTX4080SUPER.png";
import INTELi914900k from "../../public/processor/INTELi914900k.png";
import GSkillTridentZ564GB from "../../public/RAM_memory/GSkillTridentZ564GB.png";
import WDBlackSN850X4TB from "../../public/Storage/WDBlackSN850X4TB.png";
import RTX4060Ti from "../../public/graphics_card/RTX4060Ti.png";
import AMDRyzen57600X from "../../public/processor/AMDRyzen57600X.png";
import KingstonFury16GB from "../../public/RAM_memory/KingstonFury16GB.png";
import CrucialP5Plus1TB from "../../public/Storage/CrucialP5Plus1TB.png";
import ASUSROGStrixZ790 from "../../public/motherboard/ASUSROGStrixZ790.png";
import MSIMAGB650 from "../../public/motherboard/MSIMAGB650.png";
import RTX4090 from "../../public/graphics_card/RTX4090.png";
import AMDRyzen97950X3D from "../../public/processor/AMDRyzen97950X3D.png";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { useTheme } from "../hooks/useTheme";

function Products() {
  const [cartOpen, setCartOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
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
    handleCheckout
  } = useCart();
  
  // Filtros
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 20000000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [inStock, setInStock] = useState(false);

  const categories = [
    { id: 'all', name: "Todos", count: 24 },
    { id: 'gpu', name: "Tarjetas Gráficas", count: 8 },
    { id: 'cpu', name: "Procesadores", count: 6 },
    { id: 'ram', name: "Memorias RAM", count: 5 },
    { id: 'storage', name: "Almacenamiento", count: 3 },
    { id: 'motherboard', name: "Placas Madre", count: 2 }
  ];

  const brands = ['NVIDIA', 'AMD', 'Intel', 'Corsair', 'Samsung', 'ASUS', 'MSI', 'Gigabyte'];

  const allProducts = [
    { id: 1, name: "RTX 4070 Ti SUPER", category: 'gpu', brand: 'NVIDIA', price: 3500000, rating: 4.8, reviews: 234, stock: 15, img: AsusRTX4070TISuper },
    { id: 2, name: "AMD Ryzen 7 7800X3D", category: 'cpu', brand: 'AMD', price: 1748000, rating: 4.9, reviews: 567, stock: 8, img: AMDRyzen77800X3D },
    { id: 3, name: "Corsair Vengeance 32GB", category: 'ram', brand: 'Corsair', price: 505000, rating: 4.7, reviews: 892, stock: 25, img: CorsairVengeance32GB },
    { id: 4, name: "Samsung 990 PRO 2TB", category: 'storage', brand: 'Samsung', price: 777000, rating: 4.9, reviews: 445, stock: 0, img: Samsung990PRO2TB },
    { id: 5, name: "RTX 4080 SUPER", category: 'gpu', brand: 'NVIDIA', price: 4661000, rating: 4.9, reviews: 189, stock: 5, img: RTX4080SUPER },
    { id: 6, name: "Intel Core i9-14900K", category: 'cpu', brand: 'Intel', price: 2292000, rating: 4.7, reviews: 321, stock: 12, img: INTELi914900k },
    { id: 7, name: "G.Skill Trident Z5 64GB", category: 'ram', brand: 'Corsair', price: 972000, rating: 4.8, reviews: 156, stock: 18, img: GSkillTridentZ564GB },
    { id: 8, name: "WD Black SN850X 4TB", category: 'storage', brand: 'Samsung', price: 1554000, rating: 4.8, reviews: 278, stock: 7, img: WDBlackSN850X4TB },
    { id: 9, name: "RTX 4060 Ti", category: 'gpu', brand: 'NVIDIA', price: 1748000, rating: 4.6, reviews: 412, stock: 22, img: RTX4060Ti },
    { id: 10, name: "AMD Ryzen 5 7600X", category: 'cpu', brand: 'AMD', price: 1166000, rating: 4.7, reviews: 534, stock: 15, img: AMDRyzen57600X },
    { id: 11, name: "Kingston Fury 16GB", category: 'ram', brand: 'Corsair', price: 311000, rating: 4.5, reviews: 621, stock: 30, img: KingstonFury16GB },
    { id: 12, name: "Crucial P5 Plus 1TB", category: 'storage', brand: 'Samsung', price: 505000, rating: 4.6, reviews: 389, stock: 20, img: CrucialP5Plus1TB },
    { id: 13, name: "ASUS ROG Strix Z790", category: 'motherboard', brand: 'ASUS', price: 1554000, rating: 4.8, reviews: 167, stock: 8, img: ASUSROGStrixZ790 },
    { id: 14, name: "MSI MAG B650", category: 'motherboard', brand: 'MSI', price: 972000, rating: 4.7, reviews: 234, stock: 11, img: MSIMAGB650 },
    { id: 15, name: "RTX 4090", category: 'gpu', brand: 'NVIDIA', price: 6662000, rating: 5.0, reviews: 145, stock: 3, img: RTX4090 },
    { id: 16, name: "AMD Ryzen 9 7950X3D", category: 'cpu', brand: 'AMD', price: 1719000, rating: 4.9, reviews: 278, stock: 6, img: AMDRyzen97950X3D },
  ];

  // Aplicar filtros
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (inStock && product.stock === 0) return false;
    return true;
  });

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 2000]);
    setSelectedBrands([]);
    setSortBy('featured');
    setInStock(false);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Notificación */}
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
                        ${item.price.toLocaleString('es-CO')}
                      </p>
                      
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
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">
                        ${getItemSubtotal(item).toLocaleString('es-CO')}
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

          {cart.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 p-6 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toLocaleString('es-CO')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Envío</span>
                  <span className="font-semibold">
                    {getShippingCost() === 0 ? (
                      <span className="text-green-600 dark:text-green-400">¡Gratis!</span>
                    ) : (
                      `$${getShippingCost().toLocaleString('es-CO')}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    ${getFinalTotal().toLocaleString('es-CO')}
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
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-gray-100 font-medium">Productos</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Filtros - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Filter size={20} />
                  Filtros
                </h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Limpiar
                </button>
              </div>

              {/* Categorías */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Categorías</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rango de Precio */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Rango de Precio</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input 
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">-</span>
                    <input 
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>

              {/* Marcas */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Marcas</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-lg transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Disponibilidad */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-sm font-medium">Solo en stock</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Botón de filtros móvil */}
          <button
            onClick={() => setFiltersOpen(true)}
            className="lg:hidden fixed bottom-6 right-6 z-30 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-semibold transition-all"
          >
            <SlidersHorizontal size={20} />
            Filtros
          </button>

          {/* Overlay filtros móvil */}
          {filtersOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setFiltersOpen(false)}
            />
          )}

          {/* Panel de filtros móvil */}
          <div className={`lg:hidden fixed top-0 left-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ${
            filtersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Filter size={20} />
                  Filtros
                </h3>
                <button 
                  onClick={() => setFiltersOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Categorías */}
                <div>
                  <h4 className="font-semibold mb-3">Categorías</h4>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span className="text-sm">{cat.name}</span>
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rango de Precio */}
                <div>
                  <h4 className="font-semibold mb-3">Rango de Precio</h4>
                  <div className="flex items-center gap-3">
                    <input 
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">-</span>
                    <input 
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Marcas */}
                <div>
                  <h4 className="font-semibold mb-3">Marcas</h4>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Disponibilidad */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-2 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      checked={inStock}
                      onChange={(e) => setInStock(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium">Solo en stock</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 p-6 space-y-3">
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 rounded-xl font-medium transition-colors"
                >
                  Limpiar filtros
                </button>
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Ver {sortedProducts.length} productos
                </button>
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="flex-1">
            {/* Header con ordenamiento y vista */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {selectedCategory === 'all' ? 'Todos los productos' : categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {sortedProducts.length} productos encontrados
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Ordenar */}
                  <div className="relative flex-1 sm:flex-initial">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full sm:w-auto appearance-none px-4 py-2 pr-10 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <option value="featured">Destacados</option>
                      <option value="price-asc">Precio: Menor a Mayor</option>
                      <option value="price-desc">Precio: Mayor a Menor</option>
                      <option value="rating">Mejor Calificación</option>
                      <option value="name">Nombre A-Z</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                  </div>

                  {/* Toggle de vista */}
                  <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-white dark:bg-gray-900 shadow-sm' 
                          : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Grid3x3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-white dark:bg-gray-900 shadow-sm' 
                          : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                      }`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid/List de productos */}
            {sortedProducts.length === 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-12 text-center">
                <div className="text-gray-300 dark:text-gray-700 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2">No se encontraron productos</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Intenta ajustar tus filtros o busca algo diferente
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
                          ${Number(product.price).toLocaleString('es-CO')}                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${Math.round(Number(product.price) * 1.2).toLocaleString('es-CO')}
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
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 p-6">
                      <div className="relative w-full sm:w-48 h-48 flex-shrink-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden">
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
                            ¡Últimas {product.stock}!
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {product.brand} • {categories.find(c => c.id === product.category)?.name}
                          </p>
                          
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={16} 
                                  className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-semibold">{product.rating}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              ({product.reviews} reseñas)
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                              {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(product.price)}                            </span>
                            <span className="text-base text-gray-500 line-through">
                              {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(product.price * 1.2)}
                            </span>
                          </div>

                          <button 
                            onClick={() => addToCart(product)}
                            disabled={product.stock === 0}
                            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                              product.stock > 0 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg' 
                                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {product.stock > 0 ? 'Agregar al carrito' : 'No disponible'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>

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

export default Products;