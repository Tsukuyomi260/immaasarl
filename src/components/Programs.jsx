import { motion } from 'framer-motion'

export default function Programs() {
  const programs = [
    {
      name: "Cuisine Appliquée",
      duration: "12 mois minimum",
      target: "Adultes & Jeunes",
      modules: [
        "Techniques culinaires de base",
        "Cuisine gastronomique",
        "Gestion des stocks alimentaires",
        "Hygiène et sécurité alimentaire"
      ]
    },
    {
      name: "Pâtisserie & Boulangerie",
      duration: "12 mois minimum",
      target: "Adultes & Jeunes",
      modules: [
        "Techniques de pâtisserie française",
        "Boulangerie artisanale",
        "Décoration de gâteaux",
        "Production et commerce"
      ]
    }
  ]

  return (
    <motion.section
      id="programs"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Programmes de Formation</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Des parcours adaptés pour développer vos compétences en hôtellerie-restauration
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
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-primary to-primary/80 text-white p-8 h-40 flex flex-col justify-between group-hover:from-primary/90">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{program.name}</h3>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-semibold">{program.duration}</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-semibold">{program.target}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-primary mb-3">Modules couverts :</h4>
                <ul className="space-y-2">
                  {program.modules.map((module, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-gray-700">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
            S'inscrire à un Programme
          </a>
        </div>
      </div>
    </motion.section>
  )
}
