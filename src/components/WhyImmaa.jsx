import { motion } from 'framer-motion'
import { Clock, Building2, Users, Truck, BookOpen, MapPin, Award } from 'lucide-react'

export default function WhyImmaa() {
  const reasons = [
    {
      icon: Clock,
      number: "10+",
      unit: "ans",
      title: "Expérience",
      description: "Une décennie d'excellence et de satisfaction clientèle"
    },
    {
      icon: Building2,
      number: "50+",
      unit: "services",
      title: "Infrastructure Moderne",
      description: "Installations équipées respectant tous les standards"
    },
    {
      icon: Users,
      number: "100%",
      unit: "professionnels",
      title: "Équipe Expertes",
      description: "Équipe motivée et expérimentée sous direction de qualité"
    },
    {
      icon: Truck,
      number: "24/7",
      unit: "logistique",
      title: "Services Complets",
      description: "Moyens adaptés pour événements de tous types"
    },
    {
      icon: BookOpen,
      number: "2",
      unit: "programmes",
      title: "Formation Elite",
      description: "Programmes de qualité avec apprenants motivés"
    },
    {
      icon: MapPin,
      number: "1",
      unit: "mission",
      title: "Engagement Local",
      description: "Contribuant au développement du secteur béninois"
    }
  ]

  const Counter = ({ number, unit }) => {
    const numValue = parseInt(number)
    return (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-accent mb-2"
        >
          {number}
        </motion.div>
        <div className="text-sm text-gray-600 font-medium">{unit}</div>
      </div>
    )
  }

  return (
    <motion.section
      id="why"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">Pourquoi Choisir IMMAA</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos avantages compétitifs et notre engagement envers l'excellence opérationnelle
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="bg-gradient-to-br from-light to-primary/5 rounded-2xl p-8 border border-gray-200 hover:border-accent hover:shadow-xl hover:shadow-accent/15 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <Counter number={reason.number} unit={reason.unit} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Notre Engagement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl p-12 border border-accent/30"
        >
          <div className="flex items-start gap-4 mb-6">
            <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <h3 className="text-3xl font-bold">Notre Engagement</h3>
          </div>
          <p className="text-white/90 leading-relaxed mb-4 text-lg">
            Chez IMMAA, nous croyons à l'excellence opérationnelle et à l'impact social. Notre double mission—fournir des services de catering exceptionnels et former les professionnels de demain—reflète notre vision d'une économie locale forte et dynamique.
          </p>
          <p className="text-white/90 leading-relaxed text-lg">
            Chaque événement que nous organisons et chaque apprenant que nous formons représente notre engagement envers le succès durable et la qualité sans compromis.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
