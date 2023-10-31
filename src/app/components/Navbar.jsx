"use client"
import React , {useState, useEffect} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

import { FaBars, FaTimes } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaLightbulb } from 'react-icons/fa'

import { useTheme } from 'next-themes';


const navLinks = [
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Contact',
    path: '#contact'
  },
  
]

const Navbar = () => {

 const [mounted, setMounted] = useState(false)

 const [navbarOpen, setNavbarOpen] = useState(false)

  const {systemTheme, theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    if(currentTheme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [theme, currentTheme])

  if (!mounted) return null;

  
  const toggleTheme = () => {
    console.log('hello')
    console.log(currentTheme)
    console.log(theme)
    if(theme === 'dark') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      
    } else if(theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      console.log('labda undefined')
      setTheme('dark')
    }
  }

  

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top:location - 150,
    });
  }

  
  
  return (
    <nav className='fixed mx-auto border-b border-b-[#33353F] top-0 left-0 right-0 bg-lbackground dark:bg-[#121212] bg-opacity-90 z-10'>
      <div className='flex flex-wrap container md:py-4 items-center justify-between mx-auto py-2 max-sm:py-1 px-8'>
        
        <Link href={"/"} className=''>
         
          <Image src='/images/n-logo.png' alt='logo' width={70} height={70}  className='max-md:w-12 max-md:h-12'/>
        </Link>


        <div className='max-md:flex'>
          <div className='menu hidden md:flex md:w-auto md:justify-center md:items-center md:self-center md:text-center ' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 text-center mt-0 '>
              
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink onClick={handleClick}  href={link.path} title={link.title} />
                  </li>
                  
                ))}
              
            </ul>

          </div>

          <div className='flex items-center justify-center md:hidden'>
            <button className='flex items-center px-3 py-2 text-ltext dark:text-slate-200 hover:text-white ' >
              <FaLightbulb className='h-5 w-5 animate-pulse' onClick={toggleTheme} />
            </button>
          </div>

          <div className='mobile-menu hidden max-md:block'>
            {!navbarOpen ? (
              <button className='flex items-center px-3 py-2 max-md:border-none border rounded text-ltext  dark:text-slate-200 hover:text-white '>
                <FaBars className='h-5 w-5 '
                onClick={() => setNavbarOpen(!navbarOpen)} 
                />
              </button>
            ) : (
              <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-ltext dark:text-slate-200 hover:text-white hover:border-white '>
                <FaTimes className='h-5 w-5 '
                onClick={() => setNavbarOpen(!navbarOpen)} 
                />
              </button>
            )}

          </div>
        </div>

        <div className='hidden md:block'>
          <button className='flex items-center px-3 py-2 text-ltext dark:text-slate-200 hover:text-white ' >
              <FaLightbulb className='h-5 w-5 animate-pulse' onClick={toggleTheme} />
          </button>
        </div>

       

        
      </div>
      {navbarOpen && (
        <div className='absolute right-1 z-10  bg-lbackground dark:bg-[#121212] rounded-xl bg-opacity-50 border border-laccent'
          onClick= {() => setNavbarOpen(false)}>
          <MenuOverlay links={navLinks} />
        </div>
        
      )}
    </nav>
  )
}

export default Navbar