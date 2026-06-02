import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean-Pierre Akakpo",
      role: "Chef d'Entreprise",
      text: "IMMAA a catering pour notre gala d'entreprise. Service impeccable, cuisine exceptionnelle. Nos clients étaient ravis!",
      stars: 5
    },
    {
      name: "Marie Traore",
      role: "Apprenante en Formation",
      text: "La formation m'a totalement transformée. Les instructeurs sont patiens et professionnels. Aujourd'hui je dirige ma propre cuisine!",
      stars: 5
    },
    {
      name: "Moussa Diallo",
      role: "Coordinateur d'Événements",
      text: "IMMAA est notre partenaire privilégié. Fiabilité, qualité et créativité. À recommander vivement!",
      stars: 5
    },
    {
      name: "Aïssatou Sow",
      role: "Étudiante Formation Hotelière",
      text: "Excellente école avec infrastructure moderne. J'ai appris énormément en peu de temps. Équipe très supportive.",
      stars: 5
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Témoignages</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ce que disent nos clients et apprenants
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
