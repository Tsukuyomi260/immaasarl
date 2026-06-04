import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://immaa-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          })
        }, 3000)
      } else {
        console.error('Error:', data.error)
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Erreur de connexion. Assurez-vous que le serveur est en cours d\'exécution.')
    }
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white flex items-center px-4 py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 leading-tight">Nous Contacter</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Vous avez une question sur nos services de restauration ou nos programmes de formation ? Notre équipe est prête à vous aider.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-white/70">maisonimmaa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-white/70">+229 0149299999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Localisation</p>
                  <p className="text-white/70">Calavi Zogbadjè<br/>Chapelle St.Jean Eudes</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl"
          >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/90 font-semibold mb-3 text-sm">Votre Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/20 focus:shadow-lg focus:shadow-accent/30 text-white placeholder-white/40 backdrop-blur-sm transition"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label className="block text-white/90 font-semibold mb-3 text-sm">Votre Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/20 focus:shadow-lg focus:shadow-accent/30 text-white placeholder-white/40 backdrop-blur-sm transition"
                placeholder="jean@example.com"
              />
            </div>

            <div>
              <label className="block text-white/90 font-semibold mb-3 text-sm">Sujet</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/20 focus:shadow-lg focus:shadow-accent/30 text-white placeholder-white/40 backdrop-blur-sm transition"
              >
                <option value="" className="text-gray-900">Sélectionner un sujet</option>
                <option value="catering" className="text-gray-900">Demande de Catering</option>
                <option value="formation" className="text-gray-900">Inscription Formation</option>
                <option value="info" className="text-gray-900">Question Générale</option>
              </select>
            </div>

            <div>
              <label className="block text-white/90 font-semibold mb-3 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-accent focus:bg-white/20 focus:shadow-lg focus:shadow-accent/30 text-white placeholder-white/40 backdrop-blur-sm transition resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-accent/90 transition cursor-pointer mt-6 shadow-lg hover:shadow-xl"
            >
              Envoyer le Message
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-400/20 border border-green-400/50 text-white rounded-xl flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Merci! Votre message a été envoyé.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
