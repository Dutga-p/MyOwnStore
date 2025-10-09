import { Truck, Package, MapPin, Clock, Shield, CheckCircle2, AlertCircle, ChevronRight, Calendar, DollarSign, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function Shipping() {
  const shippingCompanies = [
    {
      name: "Servientrega",
      logo: "🚚",
      coverage: "Nacional",
      time: "3-5 días hábiles",
      description: "Cobertura en todo el territorio nacional"
    },
    {
      name: "Coordinadora",
      logo: "📦",
      coverage: "Nacional",
      time: "2-4 días hábiles",
      description: "Envíos express disponibles"
    },
    {
      name: "InterRapidísimo",
      logo: "🚛",
      coverage: "Nacional",
      time: "3-6 días hábiles",
      description: "Amplia red de oficinas"
    },
    {
      name: "Envía",
      logo: "🏪",
      coverage: "Nacional",
      time: "4-7 días hábiles",
      description: "Entregas urbanas y rurales"
    }
  ];

  const deliveryTimes = [
    {
      zone: "Ciudades principales",
      cities: "Bogotá, Medellín, Cali, Barranquilla, Cartagena",
      time: "2-4 días hábiles",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500"
    },
    {
      zone: "Ciudades intermedias",
      cities: "Bucaramanga, Pereira, Manizales, Ibagué, Santa Marta",
      time: "3-5 días hábiles",
      icon: MapPin,
      color: "from-green-500 to-emerald-500"
    },
    {
      zone: "Zonas rurales y alejadas",
      cities: "Municipios, veredas y zonas especiales",
      time: "5-10 días hábiles",
      icon: MapPin,
      color: "from-orange-500 to-red-500"
    }
  ];

  const ourResponsibilities = [
    "Empacar adecuadamente todos los productos con materiales de protección",
    "Verificar el estado del producto antes del envío",
    "Generar el código de rastreo y enviarlo por correo electrónico",
    "Entregar el paquete a la transportadora en óptimas condiciones",
    "Asegurar la mercancía contra daños durante el transporte",
    "Proporcionar soporte para cualquier problema relacionado con el pedido",
    "Procesar reclamos por productos defectuosos o incorrectos",
    "Mantener actualizado el stock y disponibilidad de productos"
  ];

  const carrierResponsibilities = [
    "Transportar el paquete de forma segura desde nuestras instalaciones hasta la dirección de destino",
    "Actualizar el estado del envío en su plataforma de rastreo",
    "Intentar la entrega en el domicilio registrado",
    "Contactar al destinatario en caso de dificultades de entrega",
    "Custodiar el paquete en caso de no encontrar al destinatario",
    "Gestionar reprogramación de entregas fallidas",
    "Resolver inconvenientes relacionados con demoras o extravíos durante el transporte",
    "Proporcionar comprobante de entrega con firma del destinatario"
  ];

  const shippingCosts = [
    {
      condition: "Compras superiores a $399.999 COP",
      cost: "¡Envío GRATIS!",
      icon: CheckCircle2,
      color: "text-green-600 dark:text-green-400"
    },
    {
      condition: "Compras entre $200.000 - $399.999 COP",
      cost: "$15.000 COP",
      icon: DollarSign,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      condition: "Compras inferiores a $200.000 COP",
      cost: "$20.000 - $35.000 COP",
      icon: DollarSign,
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  const importantNotes = [
    {
      title: "Verificación de dirección",
      description: "Es responsabilidad del cliente proporcionar una dirección completa y correcta. Errores en la dirección pueden generar costos adicionales o devoluciones.",
      icon: AlertCircle,
      color: "amber"
    },
    {
      title: "Recepción del paquete",
      description: "Al recibir tu pedido, verifica el estado del empaque. Si presenta daños evidentes, toma fotos y repórtalo inmediatamente antes de firmar la guía.",
      icon: Package,
      color: "blue"
    },
    {
      title: "Entregas fallidas",
      description: "Si no estás disponible, la transportadora intentará contactarte. El paquete quedará custodiado en la oficina más cercana por un máximo de 5 días hábiles.",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Productos frágiles",
      description: "Los componentes electrónicos son empacados con protección especial. Aun así, recomendamos inspeccionar cuidadosamente al momento de recibir.",
      icon: Shield,
      color: "green"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 dark:text-gray-100 font-medium">Información de Envíos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Truck size={16} />
            Envíos a todo Colombia
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Información de Envíos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Conoce nuestras políticas, tiempos de entrega y transportadoras aliadas
          </p>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Truck size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">¡Envío GRATIS en compras superiores a $399.999!</h2>
              <p className="text-white/90">Válido para todo el territorio nacional colombiano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Costos de Envío</h2>
            <p className="text-gray-600 dark:text-gray-400">Tarifas según el valor de tu compra</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {shippingCosts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-gray-950 rounded-2xl border-2 border-gray-200 dark:border-gray-800 p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.condition}</p>
                <p className={`text-3xl font-bold ${item.color}`}>{item.cost}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-blue-900 dark:text-blue-100 font-semibold mb-2">Nota importante:</p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Los costos de envío pueden variar según la ubicación específica (zonas rurales, islas, zonas de difícil acceso). 
                  El costo final se calcula automáticamente al momento de finalizar la compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Times */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Tiempos de Entrega Estimados</h2>
            <p className="text-gray-600 dark:text-gray-400">Según la ubicación de destino</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {deliveryTimes.map((zone, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${zone.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  <zone.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{zone.zone}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{zone.cities}</p>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{zone.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>* Los tiempos son estimados y pueden variar por factores externos como clima, manifestaciones, o situaciones de fuerza mayor.</p>
          </div>
        </div>
      </section>

      {/* Shipping Companies */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Transportadoras Aliadas</h2>
            <p className="text-gray-600 dark:text-gray-400">Trabajamos con las empresas de logística más confiables de Colombia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingCompanies.map((company, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{company.logo}</div>
                <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold mb-3">
                  {company.coverage}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{company.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">{company.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6 text-center">
            <p className="text-purple-900 dark:text-purple-100">
              <strong>Nota:</strong> La transportadora será asignada automáticamente según disponibilidad, ubicación y características del envío. 
              No es posible seleccionar una transportadora específica.
            </p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Responsabilidades</h2>
            <p className="text-gray-600 dark:text-gray-400">Conoce qué nos corresponde a nosotros y a la transportadora</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Our Responsibilities */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl font-bold">Responsabilidad de DStore</h3>
              </div>
              
              <ul className="space-y-3">
                {ourResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Carrier Responsibilities */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white">
                  <Truck size={24} />
                </div>
                <h3 className="text-2xl font-bold">Responsabilidad de la Transportadora</h3>
              </div>
              
              <ul className="space-y-3">
                {carrierResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Información Importante</h2>
            <p className="text-gray-600 dark:text-gray-400">Lee estas recomendaciones antes de realizar tu pedido</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {importantNotes.map((note, idx) => (
              <div 
                key={idx}
                className={`bg-${note.color}-50 dark:bg-${note.color}-900/20 border-2 border-${note.color}-200 dark:border-${note.color}-800 rounded-2xl p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${note.color}-600 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    <note.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 text-${note.color}-900 dark:text-${note.color}-100`}>
                      {note.title}
                    </h3>
                    <p className={`text-${note.color}-800 dark:text-${note.color}-200 text-sm`}>
                      {note.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rastrea tu Pedido</h2>
            <p className="text-xl text-white/90 mb-8">
              Una vez procesado tu pedido, recibirás un código de rastreo por correo electrónico
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">¿Cómo rastrear?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Revisa tu correo</p>
                  <p className="text-sm text-white/80">Busca el email con el código de rastreo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Ingresa a la web</p>
                  <p className="text-sm text-white/80">Visita el sitio de la transportadora</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Consulta el estado</p>
                  <p className="text-sm text-white/80">Ingresa tu código y revisa el progreso</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/Productos"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Ver Productos
              <ChevronRight size={20} />
            </Link>
            <Link 
              to="/Contacto"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              ¿Necesitas ayuda?
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Puedo cambiar la dirección de entrega después de realizar el pedido?",
                a: "Solo si el pedido aún no ha sido despachado. Contáctanos inmediatamente a través de WhatsApp o correo electrónico. Una vez entregado a la transportadora, los cambios deben gestionarse directamente con ellos."
              },
              {
                q: "¿Qué hago si mi paquete llega dañado?",
                a: "No firmes la guía de entrega. Toma fotos del empaque dañado y del producto, y contáctanos inmediatamente. Iniciaremos el proceso de reclamo con la transportadora y gestionaremos el reemplazo."
              },
              {
                q: "¿Hacen envíos contraentrega?",
                a: "Actualmente no ofrecemos el servicio de pago contraentrega. Todos los pagos deben realizarse antes del despacho a través de los métodos disponibles en nuestra tienda."
              },
              {
                q: "¿Puedo recoger mi pedido personalmente?",
                a: "Sí, ofrecemos la opción de retiro en nuestra tienda ubicada en Cali. Selecciona esta opción al finalizar tu compra y te notificaremos cuando esté listo."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
              >
                <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                  <FileText size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shipping;