import { motion } from 'framer-motion'

export default function WhyImmaa() {
  const reasons = [
    {
      title: "10+ Ans d'Expérience",
      description: "Une décennie d'excellence et de satisfaction clientèle"
    },
    {
      title: "Infrastructure Moderne",
      description: "Installations bien équipées respectant tous les standards d'hygiène"
    },
    {
      title: "Équipe Polyvalente",
      description: "Professionnels motivés et expérimentés, encadrés par Mme Clémence et son mari"
    },
    {
      title: "Logistique Complète",
      description: "Moyens adaptés pour événements de tous types et tailles"
    },
    {
      title: "École Opérationnelle",
      description: "Programme de formation déjà en place avec apprenants motivés"
    },
    {
      title: "Engagement Local",
      description: "Contribuant au développement du secteur à Abomey-Calavi et au Bénin"
    }
  ]

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
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Pourquoi Choisir IMMAA</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nos avantages compétitifs et notre engagement envers l'excellence
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
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
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-gradient-to-br from-light to-primary/10 rounded-lg p-6 border border-accent/20 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 bg-light rounded-lg p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-primary mb-4">Notre Engagement</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chez IMMAA, nous croyons à l'excellence opérationnelle et à l'impact social. Notre double mission—fournir des services de catering exceptionnels et former les professionnels de demain—reflète notre vision d'une économie locale forte et dynamique.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chaque événement que nous organisons et chaque apprenant que nous formons représente notre engagement envers le succès durable et la qualité sans compromis.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
