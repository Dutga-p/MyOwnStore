import { Shield, Award, FileText, AlertCircle, CheckCircle2, XCircle, Clock, ToolCase, Package, ChevronRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function Warranty() {
  const warrantyPeriods = [
    {
      category: "Tarjetas Gráficas",
      period: "6 meses",
      icon: "🎮",
      color: "from-purple-500 to-pink-500",
      details: "NVIDIA, AMD, ASUS, MSI, Gigabyte"
    },
    {
      category: "Procesadores",
      period: "6 meses",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      details: "Intel Core, AMD Ryzen"
    },
    {
      category: "Memorias RAM",
      period: "6 meses",
      icon: "💾",
      color: "from-green-500 to-emerald-500",
      details: "Corsair, Kingston, G.Skill"
    },
    {
      category: "Almacenamiento (SSD/HDD)",
      period: "6 meses",
      icon: "💿",
      color: "from-orange-500 to-red-500",
      details: "Samsung, WD, Crucial, Seagate"
    },
    {
      category: "Placas Madre",
      period: "6 meses",
      icon: "🔧",
      color: "from-yellow-500 to-orange-500",
      details: "ASUS, MSI, Gigabyte, ASRock"
    },
    {
      category: "Fuentes de Poder",
      period: "6 meses",
      icon: "🔋",
      color: "from-indigo-500 to-purple-500",
      details: "Corsair, EVGA, Thermaltake"
    }
  ];

  const warrantyCovers = [
    "Defectos de fabricación comprobables",
    "Fallas en el funcionamiento normal del producto bajo condiciones de uso adecuadas",
    "Problemas de hardware no causados por el usuario",
    "Componentes que no encienden o no son reconocidos por el sistema",
    "Errores del sistema atribuibles al producto",
    "Cortocircuitos internos de origen no externo",
    "Fallos en controladores o firmware (cuando sean responsabilidad del fabricante)",
    "Daños durante el período de garantía sin intervención humana indebida"
  ];

  const warrantyNotCovers = [
    "Daños físicos evidentes (golpes, caídas, roturas, componentes doblados)",
    "Contacto con líquidos (agua, café, refrescos, etc.)",
    "Mal uso o uso indebido del producto (overclocking extremo sin los cuidados necesarios, voltajes inadecuados)",
    "Instalación incorrecta que provoque daños",
    "Sellos de garantía rotos o alterados",
    "Productos modificados, reparados por terceros no autorizados",
    "Daños por sobrecarga eléctrica, variaciones de voltaje o descargas eléctricas",
    "Desgaste natural por uso (ventiladores, pads térmicos, pasta térmica)",
    "Rayones superficiales o estéticos que no afecten el funcionamiento",
    "Incompatibilidad con otros componentes (responsabilidad del usuario verificar compatibilidad)",
    "Software, sistemas operativos o drivers (excepto firmware del producto)",
    "Daños causados por virus, malware o software malicioso"
  ];

  const warrantyProcess = [
    {
      step: "1",
      title: "Contacto Inicial",
      description: "Comunícate con nosotros por WhatsApp, correo o teléfono dentro del período de garantía. Proporciona tu número de orden y describe el problema.",
      icon: Phone,
      color: "blue"
    },
    {
      step: "2",
      title: "Evaluación Preliminar",
      description: "Nuestro equipo técnico evaluará tu caso. Es posible que te solicitemos fotos, videos o información adicional para diagnóstico remoto.",
      icon: FileText,
      color: "purple"
    },
    {
      step: "3",
      title: "Autorización de Garantía",
      description: "Si el problema está cubierto, te daremos una autorización. Si está en Cali, puedes traer el producto. Si estás fuera, coordinaremos el envío.",
      icon: CheckCircle2,
      color: "green"
    },
    {
      step: "4",
      title: "Revisión Técnica",
      description: "Nuestro personal especializado revisará el producto en nuestras instalaciones. Este proceso puede tardar de 5 a 15 días hábiles.",
      icon: ToolCase,
      color: "orange"
    },
    {
      step: "5",
      title: "Resolución",
      description: "Según el diagnóstico: reparación, reemplazo por producto igual o similar, o devolución del dinero (si no hay stock disponible).",
      icon: Package,
      color: "indigo"
    }
  ];

  const requirements = [
    "Factura de compra o comprobante de pedido con número de orden",
    "Producto en su empaque original (preferiblemente) con todos sus accesorios",
    "Sellos de garantía intactos (si aplica)",
    "Descripción detallada del problema presentado",
    "Fotos o videos que demuestren el defecto (cuando sea posible)",
    "Producto limpio, sin polvo excesivo ni suciedad",
    "No haber sido reparado previamente por terceros no autorizados"
  ];

  const importantNotes = [
    {
      title: "Tiempo de Respuesta",
      description: "El proceso completo de garantía (desde que recibimos el producto hasta la resolución) puede tomar entre 15 a 30 días hábiles, dependiendo de la complejidad del caso y disponibilidad de repuestos.",
      icon: Clock,
      color: "blue"
    },
    {
      title: "Costos de Envío",
      description: "Si estás fuera de Cali, los costos de envío hacia nuestras instalaciones son responsabilidad del cliente. Si la garantía procede, nosotros asumimos el costo del envío de regreso.",
      icon: Package,
      color: "amber"
    },
    {
      title: "Productos de Reemplazo",
      description: "En caso de reemplazo, este será por un producto igual o de características similares. Si el modelo exacto no está disponible, ofreceremos una alternativa equivalente o superior.",
      icon: Award,
      color: "purple"
    },
    {
      title: "Garantía del Fabricante",
      description: "Algunos productos cuentan con garantía directa del fabricante (especialmente internacional). En estos casos, podemos asesorarte para gestionar la garantía directamente con ellos si es más conveniente.",
      icon: Shield,
      color: "green"
    }
  ];

  const faqItems = [
    {
      question: "¿Puedo solicitar garantía si compré hace más de 6 meses?",
      answer: "Después de los 6 meses de nuestra garantía, algunos fabricantes ofrecen garantía extendida. Contáctanos y te asesoraremos para gestionar la garantía directamente con el fabricante si aplica."
    },
    {
      question: "¿Qué pasa si el producto está descontinuado?",
      answer: "Si el producto ya no está disponible en el mercado, ofreceremos un reemplazo por un modelo similar o superior de características equivalentes, o la devolución del valor pagado."
    },
    {
      question: "¿Puedo hacer overclock sin perder la garantía?",
      answer: "El overclock moderado y responsable no anula la garantía. Sin embargo, daños evidentes causados por overclocking extremo (quemaduras, daños por voltaje excesivo) no están cubiertos."
    },
    {
      question: "¿La garantía cubre daños estéticos?",
      answer: "No. La garantía cubre únicamente defectos funcionales. Rayones superficiales, marcas de uso normal o desgaste estético no están cubiertos."
    },
    {
      question: "¿Qué hago si mi producto llegó defectuoso?",
      answer: "Si el producto presenta fallas dentro de los primeros 5 días después de la entrega, contáctanos inmediatamente. Gestionaremos un cambio directo sin necesidad del proceso completo de garantía."
    },
    {
      question: "¿Puedo reparar el producto yo mismo?",
      answer: "Si rompes sellos de garantía o intentas reparaciones por tu cuenta, la garantía quedará anulada. Siempre contacta con nosotros primero antes de manipular el producto."
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Política de Garantías</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Shield size={16} />
            Protegemos tu inversión
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Política de Garantías
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            6 meses de garantía en todos nuestros productos
          </p>
        </div>
      </section>

      {/* Warranty Periods */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Períodos de Garantía por Categoría</h2>
            <p className="text-gray-600 dark:text-gray-400">Todos nuestros productos cuentan con 6 meses de garantía</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warrantyPeriods.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-4xl mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-green-600 dark:text-green-400" size={20} />
                  <span className="font-bold text-green-600 dark:text-green-400 text-lg">{item.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Shield className="text-green-600 dark:text-green-400" size={24} />
              <p className="text-green-900 dark:text-green-100 font-bold text-lg">
                Garantía contada desde la fecha de entrega del producto
              </p>
            </div>
            <p className="text-green-800 dark:text-green-200 text-sm">
              Conserva tu factura o comprobante de compra, es indispensable para hacer válida la garantía
            </p>
          </div>
        </div>
      </section>

      {/* What is Covered */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Covers */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-green-200 dark:border-green-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">¿Qué Cubre la Garantía?</h3>
              </div>
              
              <ul className="space-y-3">
                {warrantyCovers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does Not Cover */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-red-200 dark:border-red-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                  <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold">¿Qué NO Cubre la Garantía?</h3>
              </div>
              
              <ul className="space-y-3">
                {warrantyNotCovers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Process */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Proceso de Garantía</h2>
            <p className="text-gray-600 dark:text-gray-400">Paso a paso para solicitar tu garantía</p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 dark:bg-gray-800 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {warrantyProcess.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl border-2 border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-shadow">
                    <div className={`w-14 h-14 bg-${step.color}-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10`}>
                      {step.step}
                    </div>
                    <div className={`w-10 h-10 bg-${step.color}-100 dark:bg-${step.color}-900/20 rounded-lg flex items-center justify-center text-${step.color}-600 dark:text-${step.color}-400 mx-auto mb-3`}>
                      <step.icon size={20} />
                    </div>
                    <h4 className="font-bold text-center mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-blue-900 dark:text-blue-100 font-semibold mb-2">Tiempo estimado total:</p>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  El proceso completo puede tardar entre <strong>15 a 30 días hábiles</strong> desde que recibimos el producto 
                  hasta su devolución, dependiendo de la complejidad del caso y disponibilidad de repuestos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Requisitos para Solicitar Garantía</h2>
            <p className="text-gray-600 dark:text-gray-400">Asegúrate de cumplir con estos requisitos</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-950 rounded-xl">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Información Importante</h2>
            <p className="text-gray-600 dark:text-gray-400">Ten en cuenta estos aspectos sobre la garantía</p>
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Preguntas Frecuentes sobre Garantías</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                  <FileText size={20} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas Solicitar una Garantía?</h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestro equipo está listo para ayudarte con tu garantía
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <Phone className="mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">WhatsApp</p>
              <a href="https://wa.me/573183150525" className="text-sm hover:underline">+57 318 315 0525</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <Mail className="mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:garantias@dstore.com" className="text-sm hover:underline">garantias@dstore.com</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <Clock className="mx-auto mb-3" size={32} />
              <p className="font-semibold mb-1">Horario</p>
              <p className="text-sm">Lun - Sáb<br/>9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/Contacto"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Contactar Soporte
              <ChevronRight size={20} />
            </Link>
            <Link 
              to="/Productos"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Warranty;