import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-white text-gray-900 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">IMMAA Sarl</h3>
            <p className="text-sm text-gray-600">
              Excellence en restauration collective et formation professionnelle depuis plus de 10 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-primary transition">Services</a></li>
              <li><a href="#why" className="text-gray-600 hover:text-primary transition">Pourquoi IMMAA</a></li>
              <li><a href="#programs" className="text-gray-600 hover:text-primary transition">Formation</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-primary transition">Catering</a></li>
              <li><a href="#programs" className="text-gray-600 hover:text-primary transition">Cuisine Appliquée</a></li>
              <li><a href="#programs" className="text-gray-600 hover:text-primary transition">Pâtisserie & Boulangerie</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Calavi Zogbadjè<br/>Chapelle St.Jean Eudes</li>
              <li>+229 0149299999</li>
              <li>maisonimmaa@gmail.com</li>
              <li>Lun-Ven: 8h-18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-gray-600">&copy; 2026 IMMAA Sarl. Tous droits réservés.</p>

          {/* Minimalist Action Bar */}
          <div className="flex items-center justify-center rounded-full border border-dotted border-gray-400 px-4 py-3 gap-6">
            <button
              type="button"
              onClick={handleScrollTop}
              className="p-2 hover:text-primary transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-primary transition">Politique de Confidentialité</a>
            <a href="#" className="text-gray-600 hover:text-primary transition">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
