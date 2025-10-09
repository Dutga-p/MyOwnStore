import { useState } from "react";
import { Sun, Moon, ShoppingCart, Search, Menu, X, Plus, Minus, Trash2, ShoppingBag, ChevronRight, Cookie, Shield, Settings, Eye, BarChart3, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import { useTheme } from "../hooks/useTheme";
import { useCart } from "../hooks/useCart";

function CP() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [notification2, setNotification2] = useState(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });
  const { 
      cart, 
      notification, 
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
  const [showBanner, setShowBanner] = useState(true);

  const handleCookieToggle = (type) => {
    if (type === 'necessary') return; // Las necesarias no se pueden desactivar
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    setShowBanner(false);
    setNotification2('Preferencias de cookies guardadas', 'success');
  };

  const handleAcceptSelected = () => {
    setShowBanner(false);
    setNotification2('Preferencias de cookies guardadas', 'success');
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
    setShowBanner(false);
    setNotification2('Solo cookies necesarias activadas', 'success');
  };

  const cookieTypes = [
    {
      id: 'necessary',
      icon: Shield,
      title: 'Cookies Necesarias',
      description: 'Estas cookies son esenciales para el funcionamiento del sitio web. Sin ellas, algunas funciones básicas no estarían disponibles.',
      examples: 'Inicio de sesión, carrito de compras, preferencias de seguridad',
      duration: 'Sesión o 1 año',
      required: true,
      color: 'blue'
    },
    {
      id: 'functional',
      icon: Settings,
      title: 'Cookies Funcionales',
      description: 'Permiten recordar tus preferencias y personalizar tu experiencia en el sitio.',
      examples: 'Idioma, moneda, tema claro/oscuro',
      duration: '1 año',
      required: false,
      color: 'green'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Cookies de Análisis',
      description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando información de forma anónima.',
      examples: 'Google Analytics, páginas visitadas, tiempo en el sitio',
      duration: '2 años',
      required: false,
      color: 'purple'
    },
    {
      id: 'marketing',
      icon: Eye,
      title: 'Cookies de Marketing',
      description: 'Se utilizan para rastrear a los visitantes en los sitios web y mostrar anuncios relevantes y atractivos.',
      examples: 'Facebook Pixel, Google Ads, remarketing',
      duration: '90 días',
      required: false,
      color: 'orange'
    }
  ];

  const sections = [
    {
      title: '1. ¿Qué son las cookies?',
      content: 'Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.'
    },
    {
      title: '2. ¿Cómo utilizamos las cookies?',
      content: 'En DStore utilizamos cookies para mejorar tu experiencia de navegación, recordar tus preferencias, analizar el tráfico del sitio web y personalizar el contenido y los anuncios. Las cookies nos ayudan a entender cómo interactúas con nuestro sitio para poder mejorarlo continuamente.'
    },
    {
      title: '3. Tipos de cookies que utilizamos',
      content: 'Utilizamos diferentes tipos de cookies en nuestro sitio web, cada una con un propósito específico. Puedes encontrar información detallada sobre cada tipo en la sección de configuración de cookies.'
    },
    {
      title: '4. Cookies de terceros',
      content: 'Además de nuestras propias cookies, también utilizamos cookies de terceros de servicios como Google Analytics, Facebook Pixel y otros proveedores de servicios. Estas cookies están sujetas a las políticas de privacidad de los respectivos terceros.'
    },
    {
      title: '5. Gestión de cookies',
      content: 'Tienes el control total sobre las cookies que aceptas. Puedes configurar tus preferencias en cualquier momento utilizando nuestra herramienta de configuración de cookies. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.'
    },
    {
      title: '6. Cookies en dispositivos móviles',
      content: 'Si accedes a nuestro sitio web a través de tu dispositivo móvil, también utilizamos cookies. Puedes controlar las cookies en tu dispositivo móvil a través de la configuración de tu navegador.'
    },
    {
      title: '7. Actualización de esta política',
      content: 'Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en nuestras prácticas de cookies o por razones legales, operativas o regulatorias. Te notificaremos sobre cambios significativos.'
    },
    {
      title: '8. Contacto',
      content: 'Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en privacy@dstore.com o a través de nuestra página de contacto.'
    }
  ];

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

      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-800 shadow-2xl animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Cookie size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Este sitio utiliza cookies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes aceptar todas las cookies o configurar tus preferencias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-medium transition-colors whitespace-nowrap"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-medium transition-colors whitespace-nowrap"
                >
                  Configurar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors whitespace-nowrap"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
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
                        ${item.price.toFixed(2)}
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
            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-gray-100 font-medium">Política de Cookies</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16">
          <div className="text-center text-white max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
              <Cookie size={16} />
              Transparencia y Control
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Política de Cookies
            </h2>
            <p className="text-xl text-white/90">
              Cómo utilizamos las cookies para mejorar tu experiencia
            </p>
          </div>
        </div>
      </section>

      {/* Info Alert */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Info size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-100">
                  Última actualización: 7 de Octubre, 2025
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Esta política explica qué son las cookies, cómo las usamos y cómo puedes controlarlas. Te recomendamos leer esta política completa para entender mejor nuestras prácticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Configuration */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Configuración de Cookies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Selecciona qué tipos de cookies deseas aceptar
            </p>
          </div>

          <div className="space-y-4">
            {cookieTypes.map((type) => (
              <div 
                key={type.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${type.color}-50 dark:bg-${type.color}-900/20 rounded-xl flex items-center justify-center text-${type.color}-600 dark:text-${type.color}-400 flex-shrink-0`}>
                    <type.icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{type.title}</h4>
                        {type.required && (
                          <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full">
                            Siempre activas
                          </span>
                        )}
                      </div>
                      
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences[type.id]}
                          onChange={() => handleCookieToggle(type.id)}
                          disabled={type.required}
                          className="sr-only peer"
                        />
                        <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${type.required ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                      </label>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {type.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Ejemplos:</span>
                        <p className="text-gray-600 dark:text-gray-400">{type.examples}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Duración:</span>
                        <p className="text-gray-600 dark:text-gray-400">{type.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleAcceptSelected}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={20} />
              Guardar preferencias
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-initial bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-8 rounded-xl font-semibold transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 lg:p-12">
            <div className="prose dark:prose-invert max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Additional detailed information */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Información adicional
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                      ¿Cómo controlar las cookies en tu navegador?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      La mayoría de los navegadores web te permiten controlar las cookies a través de sus ajustes de preferencias. Aquí hay enlaces a las instrucciones de los navegadores más populares:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                      <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                      <li>Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies</li>
                      <li>Safari: Preferencias → Privacidad → Cookies</li>
                      <li>Microsoft Edge: Configuración → Cookies y permisos del sitio</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                      Cookies de sesión vs. cookies persistentes
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Cookies de sesión:</strong> Son temporales y se eliminan cuando cierras el navegador. Se utilizan principalmente para mantener tu sesión activa mientras navegas por nuestro sitio.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante un período de tiempo determinado o hasta que las elimines manualmente. Se utilizan para recordar tus preferencias entre sesiones.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                      Cookies propias vs. cookies de terceros
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Cookies propias:</strong> Son establecidas directamente por DStore cuando visitas nuestro sitio web.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Cookies de terceros:</strong> Son establecidas por servicios de terceros que utilizamos, como Google Analytics o Facebook Pixel. Estas cookies están sujetas a las políticas de privacidad de los respectivos terceros.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                      Consecuencias de desactivar las cookies
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Si decides desactivar las cookies, algunas funciones de nuestro sitio web pueden no funcionar correctamente. Por ejemplo:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4 mt-2">
                      <li>No podrás mantener productos en tu carrito de compras entre sesiones</li>
                      <li>Tendrás que iniciar sesión cada vez que visites el sitio</li>
                      <li>No recordaremos tus preferencias de idioma o tema</li>
                      <li>La funcionalidad de algunas características puede verse limitada</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                      Lista de cookies específicas que utilizamos
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50 dark:bg-gray-950">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Nombre</th>
                            <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                            <th className="px-4 py-3 text-left font-semibold">Duración</th>
                            <th className="px-4 py-3 text-left font-semibold">Propósito</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-950/50">
                            <td className="px-4 py-3 font-mono text-xs">session_id</td>
                            <td className="px-4 py-3">Necesaria</td>
                            <td className="px-4 py-3">Sesión</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Mantener la sesión del usuario</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-950/50">
                            <td className="px-4 py-3 font-mono text-xs">cart_items</td>
                            <td className="px-4 py-3">Necesaria</td>
                            <td className="px-4 py-3">7 días</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Almacenar productos en el carrito</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-950/50">
                            <td className="px-4 py-3 font-mono text-xs">theme_preference</td>
                            <td className="px-4 py-3">Funcional</td>
                            <td className="px-4 py-3">1 año</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Recordar tema claro/oscuro</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-950/50">
                            <td className="px-4 py-3 font-mono text-xs">_ga</td>
                            <td className="px-4 py-3">Análisis</td>
                            <td className="px-4 py-3">2 años</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Google Analytics - ID de usuario</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-950/50">
                            <td className="px-4 py-3 font-mono text-xs">_fbp</td>
                            <td className="px-4 py-3">Marketing</td>
                            <td className="px-4 py-3">90 días</td>
                            <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Facebook Pixel - seguimiento</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <Cookie size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tienes preguntas sobre nuestras cookies?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Si tienes alguna pregunta sobre cómo utilizamos las cookies o sobre tu privacidad, no dudes en contactarnos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contáctanos
              </a>
              <a 
                href="#"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Ver Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Políticas Relacionadas</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <a 
              href="#"
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
            >
              <Shield size={32} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h4 className="font-bold mb-2">Política de Privacidad</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cómo protegemos tus datos
              </p>
            </a>
            <a 
              href="#"
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
            >
              <AlertCircle size={32} className="mx-auto mb-3 text-purple-600 dark:text-purple-400" />
              <h4 className="font-bold mb-2">Términos y Condiciones</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reglas de uso del sitio
              </p>
            </a>
            <a 
              href="#"
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg hover:scale-105 transition-all text-center"
            >
              <Info size={32} className="mx-auto mb-3 text-green-600 dark:text-green-400" />
              <h4 className="font-bold mb-2">Centro de Ayuda</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Preguntas frecuentes
              </p>
            </a>
          </div>
        </div>
      </section>

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
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default CP;