import About from '@/components/about'
import ButtonR from '@/components/buttonr'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Services from '@/components/services'
import Map from '@/components/map'
import Banner from '@/components/banner'
import Stats from '@/components/stats'
export default function Home() {
  return (
    <>
      <Navbar/>
      
      <Banner/>

      <About/>
      <Services/>
      <Stats/>
      <Map/>
      <Contact/>
      <Footer/>
      <ButtonR/>
    </>
  )
}
