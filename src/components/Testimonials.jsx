import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean-Pierre Akakpo",
      role: "Chef d'Entreprise",
      text: "IMMAA a assuré le catering de notre gala d'entreprise. Service impeccable et cuisine exceptionnelle. Nos clients étaient ravis !",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jean-pierre"
    },
    {
      name: "Marie Traore",
      role: "Apprenante en Formation",
      text: "La formation m'a totalement transformée. Les instructeurs sont patients et très professionnels. Aujourd'hui, je dirige ma propre cuisine !",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marie"
    },
    {
      name: "Moussa Diallo",
      role: "Coordinateur d'Événements",
      text: "IMMAA est notre partenaire privilégié depuis 3 ans. Fiabilité, qualité et créativité au rendez-vous. À recommander vivement !",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=moussa"
    },
    {
      name: "Aïssatou Sow",
      role: "Apprenante Formation Hôtelière",
      text: "Excellente école avec une infrastructure moderne. J'ai appris énormément en peu de temps. L'équipe est très supportive et bienveillante.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aissatou"
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Témoignages</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez ce que disent nos clients et apprenants sur leurs expériences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-hidden">
          {/* Left Column */}
          <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={15} />

          {/* Right Column */}
          <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={18} delay={5} />
        </div>
      </div>
    </motion.section>
  )
}

const TestimonialsColumn = ({ testimonials, duration = 10, delay = 0 }) => {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          delay: delay,
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-gray-200 shadow-lg shadow-primary/5 bg-white hover:shadow-xl hover:border-accent hover:shadow-accent/20 transition-all duration-300"
              >
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full border border-primary/20"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
