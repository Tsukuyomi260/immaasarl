import AnimatedHero from './components/AnimatedHero'
import Services from './components/Services'
import WhyImmaa from './components/WhyImmaa'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <AnimatedHero
        backgroundImageUrl="/images/hero/hero-main.jpg"
        title="Excellence en Restauration & Formation"
        description="Depuis plus de 10 ans, IMMAA Sarl offre des services de restauration collective haut de gamme et forme les professionnels de demain en hôtellerie-restauration."
        ctaButton={{
          text: 'Réserver un Événement',
          onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
        }}
        secondaryCta={{
          text: 'Découvrir la Formation',
          onClick: () => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }),
        }}
      />
      <Services />
      <WhyImmaa />
      <Programs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
