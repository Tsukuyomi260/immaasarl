import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-2 group">
      <nav className={`mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 ${isScrolled ? 'bg-white/50 max-w-4xl rounded-2xl border border-gray-200 backdrop-blur-lg' : ''}`}>
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          {/* Logo */}
          <div className="flex w-full justify-between lg:w-auto">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className={`m-auto size-6 duration-200 ${isOpen ? 'rotate-180 scale-0 opacity-0' : ''}`} />
              <X className={`absolute inset-0 m-auto size-6 duration-200 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="absolute inset-0 m-auto hidden size-fit lg:block">
            <ul className="flex gap-8 text-sm">
              <li><a href="#services" className="text-gray-700 hover:text-primary transition duration-150">Services</a></li>
              <li><a href="#why" className="text-gray-700 hover:text-primary transition duration-150">Pourquoi IMMAA</a></li>
              <li><a href="#programs" className="text-gray-700 hover:text-primary transition duration-150">Formation</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-primary transition duration-150">Contact</a></li>
            </ul>
          </div>

          {/* Mobile & Desktop Buttons */}
          <div className={`bg-white mb-6 hidden w-full flex-wrap items-center justify-end space-y-4 rounded-3xl border p-6 shadow-lg md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none ${isOpen ? 'block' : ''}`}>
            <div className="lg:hidden">
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="block text-gray-700 hover:text-primary transition">Services</a></li>
                <li><a href="#why" className="block text-gray-700 hover:text-primary transition">Pourquoi IMMAA</a></li>
                <li><a href="#programs" className="block text-gray-700 hover:text-primary transition">Formation</a></li>
                <li><a href="#contact" className="block text-gray-700 hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <a href="#contact" className="block w-full text-center lg:w-auto bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition cursor-pointer">
              Nous Contacter
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
