import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

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
        className="absolute top-0 z-20 flex h-20 w-full items-center justify-between px-6 md:px-12 text-white"
      >
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
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
          >
            Nous Contacter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 z-20 bg-primary/95 backdrop-blur-sm border-b border-white/10 md:hidden"
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-white/10 text-white px-4 py-2 rounded text-center mt-2"
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
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg leading-8 text-white/80"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA Button */}
          <button
            onClick={ctaButton.onClick}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer font-semibold"
          >
            {ctaButton.text}
          </button>

          {/* Secondary CTA Button */}
          {secondaryCta && (
            <button
              onClick={secondaryCta.onClick}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer font-semibold"
            >
              {secondaryCta.text}
            </button>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
