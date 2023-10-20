import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import FooterSection from './components/FooterSection'
import AchievementSection from './components/AchievementSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden ">
      <Navbar />
      <div className='container mt-32 mx-auto  px-12'>
      <HeroSection />
      </div>
      
      <AchievementSection />

      <div className=''>
        <AboutSection />

      </div>


      <div className='px-12'>
        <ProjectSection />
      </div>


      <div>
        <EmailSection />
      </div>

      <FooterSection />
  
      
      
     

    </main>
  )
}
