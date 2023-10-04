"use client"
import React , {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'

import { FaBars, FaTimes } from 'react-icons/fa'

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

  const [navbarOpen, setNavbarOpen] = useState(false)
  
  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto py-4 px-8'>
        <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
          LOGO
        </Link>

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

        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
            
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink  href={link.path} title={link.title} />
                </li>
                
              ))}
            
          </ul>

        </div>
      </div>
      {navbarOpen && (
        <div onClick= {() => setNavbarOpen(false)}>
          <MenuOverlay links={navLinks} />
        </div>
        
      )}
    </nav>
  )
}

export default Navbar