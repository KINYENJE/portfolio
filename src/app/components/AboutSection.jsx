"use client"

import React, {useState, useTransition, useRef, useEffect} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion, useInView } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb , SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandNextjs } from 'react-icons/tb'
import { SiPython } from 'react-icons/si'
import { SiSqlite } from 'react-icons/si'


const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <div className='grid md:grid-cols-2 grid-col-1  '>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><FaReact className='text-cyan-300 animate-spin-slow text-3xl bg-black rounded-full p-0.5'/>React.Js</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><TbBrandNextjs className=' text-3xl bg-black rounded-full p-0.5'/>Next.Js</div>
                
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><IoLogoJavascript className='text-yellow-400  text-2xl bg-black rounded-sm'/>Javascript</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><SiTypescript className='text-blue-400 text-2xl bg-black rounded-sm'/>Typescript</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><IoLogoNodejs className='text-green-600  text-3xl bg-black rounded-full p-0.5'/>Node.Js</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><SiExpress className='text-pink-600 text-3xl bg-black rounded-full p-0.5'/>Express</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><SiMongodb className='text-green-400 text-3xl bg-black rounded-full p-0.5'/>MongoDB</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><SiTailwindcss className='text-cyan-400 text-3xl bg-black rounded-full p-0.5'/>Tailwind CSS</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><IoLogoHtml5 className='text-orange-600 text-3xl bg-black rounded-full p-[3px]'/>HTML5</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><IoLogoCss3 className='text-blue-400 text-3xl bg-black rounded-full p-[3px]'/>CSS</div>
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><SiPython className='text-yellow-400 text-3xl bg-black rounded-full p-0.5'/>Python</div>
                {/** sql*/}
                <div className='flex gap-4 justify-normal items-center text-2xl font-semibold'><SiSqlite className='text-green-400 text-3xl bg-black rounded-full p-0.5'/>SQL</div>
               
                
                

            </div>
        )
    },
    {
        title: 'Education',
        id: 'Education',
        content: (
            <ul className='list-disc pl-4'>
                <li>Jomo Kenyatta University of Agriculture and Technology</li>
                <li>#100DEVS Bootcamp</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'Experience',
        content: (
            <ul className='list-disc pl-4'>
                <li>Freelance Web Developer</li>
                <li>Software Engineer at Aquaprime Water Limited</li>
                <li>Software Engineer at JKUAT </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')

    const [isPending, startTransition ] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
        
    }

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        // console.log("About is in view: ", isInView)
      }, [isInView])
    
  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 '>

            <div className='dark:grayscale'>
            <Image src='/images/passport.png' alt= 'about image' width={500} height={500}  />
            </div>
           <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
           <h2 className='text-4xl font-bold text-ltext dark:text-white mb-8 md:mb-12 text-center'>
            About Me
            <motion.div ref={ref}
            initial={{ width: '0%' }}
            animate={{ width: '100%'  }}
            transition={{ duration: 20 }}
            className='bg-gradient-to-r from-lprimary via-lsecondary to-laccent  dark:from-primary dark:from-50% dark:to-secondary h-1 rounded-3xl'>

            </motion.div>
            </h2>
            
            <p className='text-base lg:text-lg '>
            I&rsquo;m  a passionate full-stack web developer and a certified <span className=' font-extrabold text-lsecondary dark:text-secondary'>Computer Scientist</span>. 
                <br /> <br />
            My journey began with HTML, CSS, and JavaScript, and I&rsquo;ve since expanded my skill set to include cutting-edge technologies such as React.js, Next.js, Node.js, and MongoDB. I love turning ideas into elegant, functional, and user-friendly web applications.

 

            </p>

            <div className='flex flex-row mt-8'>
                <TabButton active={tab === 'skills'} selectTab={() => handleTabChange('skills')}>
                    Skills
                </TabButton>
                <TabButton active={tab === 'Education'} selectTab={() => handleTabChange('Education')}>
                    Education
                </TabButton>
                <TabButton active={tab === 'Experience'} selectTab={() => handleTabChange('Experience')}>
                    Experience
                </TabButton>
                
            </div>

            <div className='mt-8'>
                {isPending ? 'Loading...' : TAB_DATA.find((tabData) => tabData.id === tab).content}

            </div>

           </div>
        </div>
    </section>
  )
}

export default AboutSection