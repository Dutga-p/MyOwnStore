import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
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
          
          {/* Tienda */}
          <div>
            <h4 className="font-semibold mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/Productos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Productos
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Ayuda */}
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/Contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/Envíos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link to="/Garantía" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Garantías
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/TérminosYCondiciones" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/PolíticaDePrivacidad" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/PolíticaDeCookies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} DStore. Todos los derechos reservados. Hecho con ❤️ para gamers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;