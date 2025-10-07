import { ShoppingCart, X, ShoppingBag, Minus, Shield, Eye, Lock, UserCheck, Database, Trash2, Plus, FileText, Mail, ChevronRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";

function PP() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      title: "1. Información que recopilamos",
      content: [
        {
          subtitle: "1.1. Información que nos proporcionas directamente:",
          items: [
            "Datos de identificación: Nombre completo, número de identificación (cédula o NIT)",
            "Datos de contacto: Dirección de correo electrónico, número de teléfono, dirección física",
            "Información de cuenta: Nombre de usuario, contraseña encriptada",
            "Información de pago: Datos de tarjetas de crédito/débito, información bancaria (procesada de forma segura a través de pasarelas de pago autorizadas)",
            "Historial de compras: Productos adquiridos, fechas de compra, montos"
          ]
        },
        {
          subtitle: "1.2. Información recopilada automáticamente:",
          items: [
            "Datos de navegación: Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia",
            "Cookies y tecnologías similares: Utilizamos cookies para mejorar tu experiencia de navegación y personalizar el contenido",
            "Datos de dispositivo: Tipo de dispositivo, identificadores únicos, configuración de idioma"
          ]
        }
      ]
    },
    {
      id: 2,
      icon: Eye,
      title: "2. Cómo utilizamos tu información",
      content: [
        {
          subtitle: "Utilizamos tus datos personales para:",
          items: [
            "Procesar y gestionar tus pedidos y pagos",
            "Crear y administrar tu cuenta de usuario",
            "Comunicarnos contigo sobre tus pedidos, productos y servicios",
            "Enviarte información promocional, ofertas especiales y newsletters (solo si nos has dado tu consentimiento)",
            "Mejorar nuestros productos, servicios y la experiencia de usuario en el sitio web",
            "Prevenir fraudes y garantizar la seguridad del sitio",
            "Cumplir con obligaciones legales y regulatorias",
            "Analizar patrones de compra y comportamiento para fines estadísticos",
            "Responder a tus consultas, quejas o reclamos"
          ]
        }
      ]
    },
    {
      id: 3,
      icon: Lock,
      title: "3. Compartir información con terceros",
      content: [
        {
          subtitle: "Podemos compartir tu información con:",
          items: [
            "Proveedores de servicios: Empresas de logística y transporte para el envío de productos, procesadores de pagos, proveedores de hosting y servicios en la nube",
            "Autoridades legales: Cuando sea requerido por ley, orden judicial o para proteger nuestros derechos legales",
            "Socios comerciales: Solo con tu consentimiento expreso y para fines específicos como promociones conjuntas"
          ]
        },
        {
          subtitle: "NO vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing sin tu consentimiento explícito."
        }
      ]
    },
    {
      id: 4,
      icon: Shield,
      title: "4. Seguridad de tus datos",
      content: [
        {
          subtitle: "Implementamos medidas de seguridad para proteger tu información:",
          items: [
            "Encriptación SSL/TLS para todas las transacciones y transmisión de datos sensibles",
            "Almacenamiento seguro en servidores protegidos con firewalls y sistemas de detección de intrusiones",
            "Acceso restringido a la información personal solo al personal autorizado",
            "Auditorías de seguridad periódicas",
            "Políticas de contraseñas seguras y autenticación de dos factores cuando sea posible"
          ]
        },
        {
          subtitle: "Sin embargo, ningún sistema es 100% seguro. Te recomendamos mantener la confidencialidad de tus credenciales de acceso."
        }
      ]
    },
    {
      id: 5,
      icon: UserCheck,
      title: "5. Tus derechos (Ley 1581 de 2012)",
      content: [
        {
          subtitle: "Como titular de datos personales en Colombia, tienes derecho a:",
          items: [
            "Conocer, actualizar y rectificar tus datos personales",
            "Solicitar prueba de la autorización otorgada para el tratamiento de tus datos",
            "Ser informado sobre el uso que se ha dado a tus datos personales",
            "Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley",
            "Revocar la autorización y/o solicitar la supresión de tus datos cuando no exista obligación legal o contractual de conservarlos",
            "Acceder de forma gratuita a tus datos personales"
          ]
        },
        {
          subtitle: "Para ejercer estos derechos, puedes contactarnos a través de: info@dstore.com"
        }
      ]
    },
    {
      id: 6,
      icon: Database,
      title: "6. Cookies y tecnologías de rastreo",
      content: [
        {
          subtitle: "Utilizamos diferentes tipos de cookies:",
          items: [
            "Cookies esenciales: Necesarias para el funcionamiento del sitio (carrito de compras, inicio de sesión)",
            "Cookies de rendimiento: Analizan cómo los usuarios utilizan el sitio",
            "Cookies de funcionalidad: Recuerdan tus preferencias (idioma, modo oscuro)",
            "Cookies de marketing: Personalizan anuncios según tus intereses (solo con tu consentimiento)"
          ]
        },
        {
          subtitle: "Puedes gestionar o deshabilitar las cookies desde la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio."
        }
      ]
    },
    {
      id: 7,
      icon: FileText,
      title: "7. Conservación de datos",
      content: [
        {
          subtitle: "Conservamos tu información personal durante:",
          items: [
            "El tiempo necesario para cumplir con los fines para los cuales fueron recopilados",
            "El período requerido por ley (generalmente 5 años para información contable y fiscal en Colombia)",
            "Mientras mantengas una cuenta activa con nosotros",
            "Hasta que solicites la eliminación de tus datos (salvo obligación legal de conservación)"
          ]
        },
        {
          subtitle: "Una vez transcurrido el plazo de conservación, los datos serán eliminados de forma segura."
        }
      ]
    },
    {
      id: 8,
      icon: AlertTriangle,
      title: "8. Menores de edad",
      content: [
        {
          subtitle: "Nuestro sitio web está dirigido a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad sin el consentimiento de sus padres o tutores legales."
        },
        {
          subtitle: "Si descubrimos que hemos recopilado información de un menor sin autorización, procederemos a eliminarla de inmediato."
        }
      ]
    },
    {
      id: 9,
      icon: Mail,
      title: "9. Marketing y comunicaciones",
      content: [
        {
          subtitle: "Con tu consentimiento, podemos enviarte:",
          items: [
            "Newsletters con novedades y ofertas especiales",
            "Notificaciones sobre productos que te pueden interesar",
            "Encuestas de satisfacción",
            "Invitaciones a eventos o promociones exclusivas"
          ]
        },
        {
          subtitle: "Puedes darte de baja de estas comunicaciones en cualquier momento haciendo clic en el enlace 'Cancelar suscripción' que aparece en cada email, o contactándonos directamente."
        }
      ]
    },
    {
      id: 10,
      icon: Shield,
      title: "10. Transferencias internacionales",
      content: [
        {
          subtitle: "Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Colombia. En estos casos, nos aseguramos de que:"
        },
        {
          items: [
            "El país de destino cuente con niveles adecuados de protección de datos",
            "Se implementen medidas contractuales para garantizar la seguridad de tu información",
            "Se cumpla con la normativa colombiana sobre transferencias internacionales de datos"
          ]
        }
      ]
    },
    {
      id: 11,
      icon: FileText,
      title: "11. Cambios a esta política",
      content: [
        {
          subtitle: "Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización."
        },
        {
          subtitle: "Te recomendamos revisar periódicamente esta política. El uso continuado del sitio después de los cambios constituye tu aceptación de la política actualizada."
        }
      ]
    },
    {
      id: 12,
      icon: CheckCircle2,
      title: "12. Base legal para el tratamiento",
      content: [
        {
          subtitle: "Tratamos tus datos personales bajo las siguientes bases legales:",
          items: [
            "Consentimiento: Cuando nos has dado tu autorización expresa",
            "Ejecución de contrato: Para procesar tus pedidos y proporcionarte nuestros servicios",
            "Obligación legal: Para cumplir con requisitos fiscales, contables y regulatorios",
            "Interés legítimo: Para prevenir fraudes y garantizar la seguridad del sitio"
          ]
        }
      ]
    }
  ];

  const responsibleEntity = {
    name: "DStore SAS",
    nit: "900.123.456-7",
    address: "Calle 10 #5-25, Centro, Cali, Valle del Cauca, Colombia",
    email: "privacidad@dstore.com",
    dpo_email: "dpo@dstore.com",
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Política de Privacidad</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Lock size={16} />
            Tu privacidad es importante
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Política de Privacidad
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Conoce cómo protegemos y utilizamos tu información personal
          </p>
          <p className="text-sm text-white/70 mt-4">
            Fecha de última actualización: 06 de Octubre de 2025
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100">
                  Compromiso con tu privacidad
                </h2>
                <p className="text-green-800 dark:text-green-200 mb-4">
                  En DStore, respetamos y protegemos tu privacidad. Esta Política de Privacidad describe cómo recopilamos, 
                  utilizamos, almacenamos y protegemos tu información personal de acuerdo con la Ley 1581 de 2012 de Protección 
                  de Datos Personales de Colombia y sus decretos reglamentarios.
                </p>
                <p className="text-green-800 dark:text-green-200">
                  Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política. Si no estás de acuerdo 
                  con algún aspecto de esta política, por favor no uses nuestros servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="space-y-8">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold pt-2">{section.title}</h2>
                </div>
                
                <div className="ml-16 space-y-6">
                  {section.content.map((block, idx) => (
                    <div key={idx}>
                      {block.subtitle && (
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          {block.subtitle}
                        </p>
                      )}
                      {block.items && (
                        <ul className="space-y-2">
                          {block.items.map((item, itemIdx) => (
                            <li 
                              key={itemIdx}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Entity Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 md:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Mail size={24} />
              </div>
              <h2 className="text-3xl font-bold">Responsable del Tratamiento</h2>
            </div>
            
            <p className="text-white/90 mb-6 text-lg">
              El responsable del tratamiento de tus datos personales es:
            </p>

            <div className="grid md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div>
                <p className="text-sm text-white/70 mb-1">Razón Social</p>
                <p className="font-semibold text-lg">{responsibleEntity.name}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">NIT</p>
                <p className="font-semibold text-lg">{responsibleEntity.nit}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-white/70 mb-1">Dirección</p>
                <p className="font-semibold">{responsibleEntity.address}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Email de Privacidad</p>
                <a href={`mailto:${responsibleEntity.email}`} className="font-semibold hover:underline">
                  {responsibleEntity.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Oficial de Protección de Datos</p>
                <a href={`mailto:${responsibleEntity.dpo_email}`} className="font-semibold hover:underline">
                  {responsibleEntity.dpo_email}
                </a>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Teléfono</p>
                <a href={`tel:${responsibleEntity.phone}`} className="font-semibold hover:underline">
                  {responsibleEntity.phone}
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="font-bold text-lg mb-3">¿Cómo ejercer tus derechos?</h3>
              <p className="text-white/90 mb-4">
                Para ejercer cualquiera de tus derechos (consulta, actualización, rectificación, supresión), 
                puedes enviar una solicitud a {responsibleEntity.email} incluyendo:
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Tu nombre completo y documento de identidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Descripción clara del derecho que deseas ejercer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Dirección de correo electrónico para recibir respuesta</span>
                </li>
              </ul>
              <p className="text-white/90 mt-4 text-sm">
                Responderemos a tu solicitud dentro de los 15 días hábiles siguientes a su recepción.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/Contacto"
                className="flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all"
              >
                Contáctanos
                <ChevronRight size={20} />
              </Link>
              <Link 
                to="/Terminos"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Ver Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Recursos adicionales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Ley 1581 de 2012</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Conoce la ley colombiana de protección de datos personales
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                <FileText size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">SIC</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Superintendencia de Industria y Comercio - Autoridad de control
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-4">
                <Lock size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Cookies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gestiona tus preferencias de cookies desde la configuración
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            Esta Política de Privacidad cumple con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia
          </p>
          <p>
            Última actualización: 06 de Octubre de 2025
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PP;