import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">IMMAA Sarl</h3>
            <p className="text-sm">
              Excellence en restauration collective et formation professionnelle depuis plus de 10 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#why" className="hover:text-white transition">Pourquoi IMMAA</a></li>
              <li><a href="#programs" className="hover:text-white transition">Formation</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition">Catering</a></li>
              <li><a href="#programs" className="hover:text-white transition">Formation Cuisine</a></li>
              <li><a href="#programs" className="hover:text-white transition">Formation Service</a></li>
              <li><a href="#programs" className="hover:text-white transition">Gestion Hôtelière</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Calavi Zogbadjè, Chapelle St.Jean Eudes</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> +229 0149299999</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> maisonimmaa@gmail.com</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0" /> Lun-Ven: 8h-18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 IMMAA Sarl. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
