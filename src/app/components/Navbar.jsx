"use client"
import React , {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

import { FaBars, FaTimes } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'


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

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top:location - 80,
    });
  }

  const [navbarOpen, setNavbarOpen] = useState(false)
  
  return (
    <nav className='fixed mx-auto border-b border-b-[#33353F] top-0 left-0 right-0 bg-[#121212] bg-opacity-90 z-10'>
      <div className='flex flex-wrap container lg:py-4 items-center justify-between mx-auto py-4 px-8'>
        
        <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
         
          <Image src='/images/n-logo.png' alt='logo' width={60} height={60}  className='max-md:w-10 max-md:h-10'/>
        </Link>


        

        <div className='menu hidden md:flex md:w-auto md:justify-center md:items-center md:self-center md:text-center ' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 text-center mt-0 '>
            
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink onClick={handleClick}  href={link.path} title={link.title} />
                </li>
                
              ))}
            
          </ul>

        </div>

        <div className='mobile-menu hidden max-md:block'>
          {!navbarOpen ? (
            <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <FaBars className='h-5 w-5 '
              onClick={() => setNavbarOpen(!navbarOpen)} 
              />
            </button>
          ) : (
            <button className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <FaTimes className='h-5 w-5'
              onClick={() => setNavbarOpen(!navbarOpen)} 
              />
            </button>
          )}

        </div>

        
      </div>
      {navbarOpen && (
        <div className='absolute right-1 z-10 bg-[#121212] rounded-xl bg-opacity-50 border border-slate-200'
          onClick= {() => setNavbarOpen(false)}>
          <MenuOverlay links={navLinks} />
        </div>
        
      )}
    </nav>
  )
}

export default Navbar