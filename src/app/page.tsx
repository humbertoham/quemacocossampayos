import About from '@/components/about'
import ButtonR from '@/components/buttonr'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

import Map from '@/components/map'
import Banner from '@/components/banner'
export default function Home() {
  return (
    <>
      <Navbar/>
      
      <Banner/>
     
      <About/>
      <Map/>
      <Contact/>
      <Footer/>
      <ButtonR/>
    </>
  )
}
