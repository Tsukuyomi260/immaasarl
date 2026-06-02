export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Excellence en Restauration & Formation
          </h2>
          <p className="text-lg text-primary/10 mb-4">
            Depuis plus de 10 ans, IMMAA Sarl offre des services de restauration collective haut de gamme et forme les professionnels de demain en hôtellerie-restauration.
          </p>
          <p className="text-primary/10 mb-8">
            Basée à Zogbadjè (Abomey-Calavi), notre école intégrée accueille adultes en reconversion et jeunes motivés pour acquérir une qualification professionnelle.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-light transition cursor-pointer">
              Réserver un Événement
            </a>
            <a href="#programs" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer">
              Découvrir la Formation
            </a>
          </div>
        </div>
        <div className="rounded-lg h-80 overflow-hidden">
          <img
            src="/images/hero/hero-main.jpg"
            alt="IMMAA Restauration Collective"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = '<div class="bg-primary/75 h-full flex items-center justify-center text-primary/10 text-center"><p>Image hero (place votre image en public/images/hero/hero-main.jpg)</p></div>'
            }}
          />
        </div>
      </div>
    </section>
  )
}
