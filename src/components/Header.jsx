import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <img
            src="/images/logos/immaa-logo.png"
            alt="IMMAA Logo"
            className="h-10 w-10"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div>
            <h1 className="text-2xl font-bold text-primary">IMMAA</h1>
            <p className="text-xs text-primary/75">Sarl</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
          <a href="#why" className="text-gray-700 hover:text-primary transition">Pourquoi IMMAA</a>
          <a href="#programs" className="text-gray-700 hover:text-primary transition">Formation</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition cursor-pointer">
            Nous Contacter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-t shadow-lg md:hidden">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-primary">Services</a>
              <a href="#why" className="block text-gray-700 hover:text-primary">Pourquoi IMMAA</a>
              <a href="#programs" className="block text-gray-700 hover:text-primary">Formation</a>
              <a href="#contact" className="block text-gray-700 hover:text-primary">Contact</a>
              <a href="#contact" className="block bg-primary text-white px-4 py-2 rounded text-center">Nous Contacter</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
