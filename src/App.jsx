import './App.css'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import BenefitsSection from './sections/BenefitsSection'
import FeaturesSection from './sections/FeaturesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import Footer from './sections/Footer'

function App() {

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />

      <div className='pt-24 pb-12 px-6 lg:px-8 flex flex-col gap-12'>
        <HeroSection />

        <BenefitsSection />

        <FeaturesSection />

        <TestimonialsSection />
      </div>

      <Footer />
    </div>
  )
}

export default App
