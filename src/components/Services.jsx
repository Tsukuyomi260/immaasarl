import { UtensilsCrossed, BookOpen, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Restauration Collective",
      image: "IMG-20251017-WA0012.jpg",
      description: "Services de catering haut de gamme pour événements professionnels et privés",
      features: [
        "Menus personnalisés et gastronomiques",
        "Équipes expérimentées et polyvalentes",
        "Respect des normes d'hygiène strictes",
        "Logistique adaptée à tous types d'événements"
      ],
      icon: UtensilsCrossed
    },
    {
      title: "Formation Professionnelle",
      image: "IMG-20251017-WA0005.jpg",
      description: "École intégrée de hôtellerie-restauration pour adultes et jeunes",
      features: [
        "Formation pour adultes en reconversion",
        "Programmes adaptés aux jeunes scolarisés et non-scolarisés",
        "Infrastructure bien équipée et moderne",
        "Encadrement par des professionnels expérimentés"
      ],
      icon: BookOpen
    }
  ]

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Nos Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          IMMAA combine excellence en restauration et formation professionnelle pour répondre à vos besoins événementiels et éducatifs
        </p>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
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
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:border-accent/30 border border-transparent transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40">
                <img
                  src={`/images/services/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <service.icon className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
