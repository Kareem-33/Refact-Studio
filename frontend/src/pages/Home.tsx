import Hero from '../components/sections/Hero'
import WhyUs from '../components/sections/WhyUs'
import Services from '../components/sections/Services'
import OurProcess from '../components/sections/OurProcess'
import OurWork from '../components/sections/OurWork'
import Testimonials from '../components/sections/Testimonials'
import Faq from '../components/sections/Faq'
import ContactBanner from '../components/sections/ContactBanner'
import Blogs from '../components/sections/Blogs'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Services />
      <OurProcess />
      <OurWork />
      <Testimonials />
      <Faq />
      <ContactBanner />
      <Blogs />
    </div>
  )
}

export default Home