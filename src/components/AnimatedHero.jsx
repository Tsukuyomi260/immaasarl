import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function AnimatedHero({
  backgroundImageUrl,
  title,
  description,
  ctaButton,
  secondaryCta,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Formation', href: '#programs' },
    { label: 'Pourquoi IMMAA', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 z-50 px-2 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'max-w-4xl px-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg h-16 text-gray-900'
            : 'max-w-7xl px-6 md:px-12 h-20 text-white'
        }`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logos/immaa-logo.png"
            alt="IMMAA"
            className="h-10 w-10"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div>
            <h1 className="text-xl font-bold">IMMAA</h1>
            <p className="text-xs">Sarl</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`px-6 py-2 rounded-lg transition-colors cursor-pointer font-medium ${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            Nous Contacter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-16 left-0 right-0 z-40 md:hidden border-b ${
            isScrolled
              ? 'bg-white border-gray-200'
              : 'bg-primary/95 border-white/10 backdrop-blur-sm'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-2 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`block px-4 py-2 rounded text-center mt-2 font-medium ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Nous Contacter
            </a>
          </nav>
        </motion.div>
      )}

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start justify-center text-left px-6 md:px-12 max-w-4xl w-full text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:-ml-[120px] text-white"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/80 md:-ml-[120px]"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 md:-ml-[120px]"
        >
          {/* Primary CTA Button */}
          <button
            onClick={ctaButton.onClick}
            className="bg-accent backdrop-blur-sm border border-accent text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-accent/90 transition-colors cursor-pointer font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            {ctaButton.text}
          </button>

          {/* Secondary CTA Button */}
          {secondaryCta && (
            <button
              onClick={secondaryCta.onClick}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer font-semibold text-sm sm:text-base"
            >
              {secondaryCta.text}
            </button>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
