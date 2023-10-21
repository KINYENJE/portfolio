"use client"

import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-4'>
                <li>Node.js</li>
                <li>Express</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
            </ul>
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
    
  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

            <Image src='/images/passport.png' alt= 'about image' width={500} height={500}  />
           <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
           <h2 className='text-4xl font-bold text-white mb-4 '>
            About Me
            </h2>
            <p className='text-base lg:text-lg '>
            I&rsquo;m  a passionate full-stack web developer and a certified <span className=' font-extrabold'>Computer Scientist</span>. 
                <br /> 
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