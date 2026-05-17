import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
              <picture>
                <source srcSet="/images/logos/immaa-logo.webp" type="image/webp" />
                <img
                  src="/images/logos/immaa-logo.png"
                  alt="IMMAA Logo"
                  className="h-10 w-10"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </picture>
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

          {/* Desktop Buttons */}
          <div className="hidden lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
            <a href="#contact" className="block bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 active:scale-95 transition cursor-pointer font-medium">
              Nous Contacter
            </a>
          </div>

          {/* Mobile Menu Backdrop + Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 top-16 lg:hidden"
                />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute top-full left-0 right-0 mt-2 mx-2 lg:hidden bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                  <nav className="p-4 space-y-2">
                    {['Services', 'Pourquoi IMMAA', 'Formation', 'Contact'].map((item, idx) => {
                      const href = item === 'Services' ? '#services' : item === 'Pourquoi IMMAA' ? '#why' : item === 'Formation' ? '#programs' : '#contact'
                      return (
                        <motion.a
                          key={idx}
                          href={href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05, duration: 0.2 }}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary/10 active:bg-primary/20 rounded-lg transition-colors font-medium"
                        >
                          {item}
                        </motion.a>
                      )
                    })}
                    <motion.a
                      href="#contact"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.2 }}
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 mt-4 text-center bg-accent text-white rounded-lg hover:bg-accent/90 active:scale-95 transition font-medium"
                    >
                      Nous Contacter
                    </motion.a>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
