import { Sun, Moon, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header({ 
  darkMode, 
  toggleDarkMode, 
  cartCount, 
  onCartOpen, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DStore
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Inicio
            </Link>
            <Link to="/Productos" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Productos
            </Link>
            <Link to="/Contacto" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
            </button>

            <button 
              onClick={onCartOpen}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
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
            <Link to="/" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Inicio
            </Link>
            <Link to="/Productos" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Productos
            </Link>
            <Link to="/Contacto" className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;