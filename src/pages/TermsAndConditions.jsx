import { useState } from "react";
import { Minus, ShoppingCart,ShoppingBag , X, Plus, FileText, Trash2, Shield, ChevronRight, AlertCircle, CheckCircle, Scale, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useCart } from "../hooks/useCart";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function TermsAndConditions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [cartOpen, setCartOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
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

  const sections = [
    {
      id: 1,
      icon: FileText,
      title: "1. Identificación del sitio web y objeto",
      content: [
        "1.1. El presente documento describe los Términos y Condiciones ('Términos') bajo los cuales cualquier persona ('Usuario' o 'Clientes') utiliza el sitio web DStore ubicado en www.dstore.com, en adelante 'el Sitio', operado por DStore SAS, con NIT 900.123.456-7, domiciliada en Cali, Colombia, en adelante 'la Tienda'.",
        "1.2. Al acceder, navegar o usar el Sitio, el Usuario acepta estos Términos en su totalidad. Si no está de acuerdo con ellos, por favor no use el Sitio."
      ]
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "2. Productos, precios y disponibilidad",
      content: [
        "2.1. La Tienda ofrece productos para la venta. Las características esenciales de los productos se describen en el Sitio mismo.",
        "2.2. Los precios que aparecen en el Sitio están expresados en pesos colombianos (COP), e incluyen el IVA. Los costos de envío se calculan según la ubicación y se muestran antes de finalizar la compra.",
        "2.3. Los precios y la disponibilidad de los productos pueden cambiar sin previo aviso."
      ]
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "3. Pedidos, pagos y métodos",
      content: [
        "3.1. Para realizar un pedido el Cliente debe seguir el proceso de compra en el Sitio, indicando los datos necesarios (nombre, dirección, correo electrónico, número de teléfono, etc.).",
        "3.2. Los pagos se pueden realizar mediante tarjetas débito/crédito, Nequi, transferencias bancarias a Bancolombia, y pago contra entrega.",
        "3.3. En caso de pago fallido o no confirmación de pago, la Tienda se reserva el derecho de cancelar el pedido."
      ]
    },
    {
      id: 4,
      icon: Shield,
      title: "4. Entrega y envío",
      content: [
        "4.1. La Tienda realizará el envío a la dirección que el Cliente indique al momento del pedido, dentro del territorio nacional de Colombia.",
        "4.2. Los plazos de entrega estimados serán los que se indiquen en el Sitio al momento de la compra. No obstante, pueden variar por causas logísticas, fenómenos climáticos u otras fuera del control de la Tienda.",
        "4.3. Los costos de envío son los que el Cliente ve en el proceso de compra. Envíos gratuitos para compras superiores a $399.999 COP."
      ]
    },
    {
      id: 5,
      icon: AlertCircle,
      title: "5. Devoluciones, cambios y reembolsos",
      content: [
        "5.1. El Cliente tiene derecho a solicitar devolución o cambio del producto conforme a lo establecido por la ley colombiana, especialmente la Ley 1480 de 2011 ('Estatuto del Consumidor').",
        "5.2. Para productos defectuosos, daños en transporte o productos distintos de los pedidos, el Cliente debe informar por escrito (correo electrónico) dentro de los 5 días hábiles siguientes a la entrega, adjuntando evidencia fotográfica.",
        "5.3. Para ejercer el derecho de retracto, el Cliente dispone de 5 días calendario desde la entrega para devolver el producto sin costo adicional (siempre que se cumplan condiciones: embalaje original, buen estado, sin uso, etc.).",
        "5.4. El reembolso se hará por el mismo medio de pago utilizado, dentro de un plazo máximo de 10 días hábiles después de recibir el producto devuelto y verificar que cumpla las condiciones."
      ]
    },
    {
      id: 6,
      icon: Lock,
      title: "6. Propiedad intelectual",
      content: [
        "6.1. Todos los contenidos del Sitio (textos, imágenes, diseño gráfico, logos, iconos, software, marcas) son propiedad de la Tienda o de terceros con licencia para usarlo, y están protegidos por leyes de propiedad intelectual en Colombia.",
        "6.2. El uso total o parcial de ese contenido sin autorización previa y por escrito de la Tienda está prohibido."
      ]
    },
    {
      id: 7,
      icon: Scale,
      title: "7. Responsabilidad",
      content: [
        "7.1. La Tienda no será responsable por daños indirectos, pérdida de ganancias, lucro cesante, perjuicios especiales o emergentes que su uso del Sitio pudiera ocasionar, salvo disposición legal expresa en contrario.",
        "7.2. La responsabilidad de la Tienda frente al Usuario por cualquier causa no podrá exceder el valor pagado por el pedido objeto del reclamo."
      ]
    },
    {
      id: 8,
      icon: Shield,
      title: "8. Protección de datos personales",
      content: [
        "8.1. La Tienda recolecta y procesa los datos personales del Cliente conforme a la Ley 1581 de 2012 de Protección de Datos de Colombia, su decreto reglamentario y demás normas aplicables.",
        "8.2. Se informará al Usuario qué datos se recolectan, para qué fines, quiénes son los responsables del tratamiento, cómo puede ejercer los derechos de acceso, corrección, supresión, revocación, entre otros."
      ]
    },
    {
      id: 9,
      icon: AlertCircle,
      title: "9. Derecho de retracto",
      content: [
        "9.1. En Colombia, el consumidor tiene derecho de retracto para compras a distancia, de conformidad con la ley (Ley 1480). Normalmente dispone de 5 días hábiles contados desde la entrega para retractarse, salvo excepciones previstas por la ley.",
        "9.2. Si el Cliente quiere retractarse, debe informarlo por escrito y devolver el producto en las mismas condiciones."
      ]
    },
    {
      id: 10,
      icon: FileText,
      title: "10. Modificaciones de los términos",
      content: [
        "10.1. La Tienda se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en el Sitio con fecha de actualización.",
        "10.2. Los Usuarios deben revisar periódicamente estos Términos. El uso continuado del Sitio después de los cambios implica aceptación de los nuevos Términos."
      ]
    },
    {
      id: 11,
      icon: Scale,
      title: "11. Ley aplicable y jurisdicción",
      content: [
        "11.1. Estos Términos se rigen por las leyes de la República de Colombia.",
        "11.2. Para cualquier controversia derivada del uso del Sitio, compra de productos o interpretación de estos Términos, las partes se someten a la jurisdicción de los tribunales competentes de Cali, Colombia."
      ]
    }
  ];

  const contactInfo = {
    name: "DStore SAS",
    nit: "900.123.456-7",
    address: "Calle 10 #5-25, Centro, Cali, Valle del Cauca",
    email: "info@dstore.com",
    phone: "+57 (2) 555-0123"
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
                        ${item.price.toLocaleString('es-CO')}
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

          {/* Resumen y checkout */}
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
                {getCartTotal() < 100 && (
                  <p className="text-xs text-amber-600 dark:text-amber-400">
                    Agrega ${(100 - getCartTotal()).toFixed(2)} más para envío gratis
                  </p>
                )}
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Términos y Condiciones</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <FileText size={16} />
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Lee detenidamente nuestros términos de servicio
          </p>
          <p className="text-sm text-white/70 mt-4">
            Fecha de última actualización: 06 de Octubre de 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          
          {/* Introduction Card */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  Importante: Lee estos términos cuidadosamente
                </h2>
                <p className="text-blue-800 dark:text-blue-200">
                  Al utilizar nuestro sitio web y realizar compras, aceptas automáticamente estos Términos y Condiciones. 
                  Si tienes alguna duda o no estás de acuerdo con algún punto, por favor contáctanos antes de continuar.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold pt-2">{section.title}</h2>
                </div>
                
                <div className="ml-16 space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p 
                      key={idx} 
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold">12. Contacto</h2>
            </div>
            
            <p className="text-white/90 mb-6 text-lg">
              Para cualquier duda, queja o reclamo relacionado con estos términos, puedes comunicarte con nosotros:
            </p>

            <div className="grid md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div>
                <p className="text-sm text-white/70 mb-1">Razón Social</p>
                <p className="font-semibold text-lg">{contactInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">NIT</p>
                <p className="font-semibold text-lg">{contactInfo.nit}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Dirección</p>
                <p className="font-semibold">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Correo Electrónico</p>
                <a href={`mailto:${contactInfo.email}`} className="font-semibold hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Teléfono</p>
                <a href={`tel:${contactInfo.phone}`} className="font-semibold hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/Contacto"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Contáctanos
                <ChevronRight size={20} />
              </Link>
              <Link 
                to="/Productos"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Ver productos
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              Estos términos están sujetos a las leyes de la República de Colombia
            </p>
            <p>
              Última actualización: 06 de Octubre de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default TermsAndConditions;