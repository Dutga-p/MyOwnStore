import { useState, useRef } from "react";
import { Sun, Moon, ShoppingCart, Search, Menu, X, MapPin, Phone, Mail, Clock, Send, MessageSquare, HeadphonesIcon, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { useCart } from "./hooks/useCart";
import emailjs from '@emailjs/browser';

function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { getCartCount } = useCart();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Por favor completa todos los campos obligatorios' });
      return;
    }

    // Mostrar estado de carga
    setFormStatus({ type: 'loading', message: 'Enviando mensaje...' });

    // Enviar email con EmailJS
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_16erx6c',      
          'template_ddmjtbs',     
          formRef.current,
          'NmYrJCkJn_51Qff7n'     
        )
        .then(
          () => {
            setFormStatus({ 
              type: 'success', 
              message: '¡Mensaje enviado con éxito! Te responderemos pronto.' 
            });
            
            // Limpiar formulario
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: '',
              message: ''
            });
            formRef.current?.reset();

            // Limpiar status después de 5 segundos
            setTimeout(() => setFormStatus(null), 5000);
          },
          (error) => {
            console.error('Error al enviar email:', error);
            setFormStatus({ 
              type: 'error', 
              message: 'Error al enviar el mensaje. Por favor intenta de nuevo.' 
            });
            
            // Limpiar error después de 5 segundos
            setTimeout(() => setFormStatus(null), 5000);
          }
        );
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      content: "+57 318 315 0525",
      detail: "Respuesta inmediata",
      link: "https://wa.me/573183150525?text=Hola,%20me%20gustaría%20obtener%20más%20información",
      primary: true
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Cra. 85e #28-06, Comuna 17",
      detail: "Cali, Valle del Cauca, Colombia"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@dstore.com",
      detail: "Respuesta en 24 horas"
    }
  ];

  const faqs = [
    {
      icon: HeadphonesIcon,
      question: "¿Ofrecen soporte técnico?",
      answer: "Sí, ofrecemos soporte técnico gratuito durante los primeros 30 días después de tu compra."
    },
    {
      icon: MessageSquare,
      question: "¿Cuánto tardan en responder?",
      answer: "Generalmente respondemos en menos de 24 horas hábiles."
    },
    {
      icon: MapPin,
      question: "¿Puedo visitar su tienda física?",
      answer: "Sí, estamos ubicados en el centro de Cali. Te esperamos de lunes a sábado."
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DStore
              </h1>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</Link>
              <Link to="/Productos" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Productos</Link>
              <a href="#" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ofertas</a>
              <Link to="/Contacto" className="text-sm font-medium text-blue-600 dark:text-blue-400">Contacto</Link>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Search size={20} />
              </button>
              
              <button 
                onClick={toggleDarkMode} 
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

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <nav className="flex flex-col p-4 gap-2">
              <Link to="/" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Inicio</Link>
              <Link to="/Productos" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Productos</Link>
              <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Ofertas</a>
              <Link to="/Contacto" className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors">Contacto</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <MessageSquare size={16} />
            Estamos aquí para ayudarte
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Nuestro equipo está listo para atenderte
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              info.primary ? (
                // WhatsApp Card - Destacada
                <a
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-black dark:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="font-semibold mb-1 text-black dark:text-white/95">
                      {info.content}
                    </p>
                    <p className="text-sm text-black dark:text-white/80 mb-4">
                      {info.detail}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg group-hover:bg-white/30 transition-colors">
                      Chatear ahora
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              ) : (
                // Otras tarjetas normales
                <div 
                  key={i}
                  className="group bg-gray-50 dark:bg-gray-950 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <info.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {info.detail}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
              <h2 className="text-3xl font-bold mb-2">Envíanos un mensaje</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Completa el formulario y te responderemos lo antes posible
              </p>

              {formStatus && (
                <div className={`mb-6 px-4 py-3 rounded-xl border-2 ${
                  formStatus.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200'
                    : formStatus.type === 'error'
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-200'
                }`}>
                  <p className="font-medium">{formStatus.message}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Juan Pérez"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="juan@email.com"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+57 300 123 4567"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Asunto
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta general</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="garantia">Garantía</option>
                      <option value="cotizacion">Cotización</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus?.type === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus?.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and FAQs */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8791626504585!2d-76.52587892429919!3d3.379694251690693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a11484e49deb%3A0x5d49a6c3255059e9!2sClub%20Residencial%20Toscana!5e0!3m2!1sen!2sco!4v1759776277879!5m2!1sen!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className=""
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Visítanos</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Estamos ubicados en el centro de Cali. ¡Te esperamos!
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                  >
                    Ver en Google Maps
                    <MapPin size={18} />
                  </a>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-6">Preguntas frecuentes</h3>
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <faq.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{faq.question}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Síguenos en redes sociales</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Mantente al día con nuestras últimas ofertas y novedades
          </p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Facebook, color: 'hover:bg-blue-600' },
              { icon: Twitter, color: 'hover:bg-sky-500' },
              { icon: Instagram, color: 'hover:bg-pink-600' },
              { icon: Youtube, color: 'hover:bg-red-600' }
            ].map((social, i) => (
              <button
                key={i}
                className={`w-14 h-14 bg-gray-100 dark:bg-gray-950 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg ${social.color}`}
              >
                <social.icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
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
                <li><Link to="/Productos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Productos</Link></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ofertas</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Novedades</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Arma tu PC</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><Link to="/Contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</Link></li>
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
    </div>
  );
}

export default Contact;