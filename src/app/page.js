import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import FooterSection from './components/FooterSection'
import AchievementSection from './components/AchievementSection'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col bg-lbackground dark:bg-[#121212] overflow-x-hidden ">
      <Navbar />
      <div className='container mt-32 mx-auto  px-12'>
      <HeroSection />
      </div>
      
      <div className='container mt-32 mx-auto  px-12'>
       <AchievementSection />
      </div>

      <div className='container mt-32 mx-auto  px-12'>
        <AboutSection />

      </div>


      <div className='container mt-32 mx-auto  px-12'>
        <ProjectSection />
      </div>


      <div className='container mt-32 mx-auto  px-12'>
        <EmailSection />
      </div>

      <FooterSection />

      <Analytics />

    </main>
  )
}
