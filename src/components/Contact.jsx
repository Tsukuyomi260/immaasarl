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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
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
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Nous Contacter</h2>
        <p className="text-center text-primary/10 mb-12 max-w-2xl mx-auto">
          Vous avez une question sur nos services ou nos programmes ? Contactez-nous directement.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="bg-primary/90 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">Adresse</h3>
            <p className="text-primary/10">
              Zogbadjè<br/>
              Abomey-Calavi<br/>
              Bénin
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="bg-primary/90 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">Téléphone</h3>
            <p className="text-primary/10">
              +229 21 XX XX XX<br/>
              <span className="text-sm">Disponible du lun-ven 8h-18h</span>
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="bg-primary/90 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-primary/10">
              contact@immaa.bj<br/>
              <span className="text-sm">Réponse dans 24h</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white text-gray-900 rounded-lg p-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="+229 XX XX XX XX"
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">Sujet</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="">Sélectionner un sujet</option>
                <option value="catering">Demande de Catering</option>
                <option value="formation">Inscription Formation</option>
                <option value="info">Information Générale</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition cursor-pointer"
            >
              Envoyer
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-300 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Merci! Votre message a été envoyé avec succès.</span>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}
