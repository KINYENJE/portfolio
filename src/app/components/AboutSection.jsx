"use client"

import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
    const [tab, setTab] = useState('skills')

    const [isPending, startTransition ] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
        
    }
    
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

            <Image src='/images/passport.png' alt= 'about image' width={500} height={500}  />
           <div>
           <h2 className='text-4xl font-bold text-white mb-4 '>
            About Me
            </h2>
            <p className='text-base lg:text-lg '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sunt laudantium perspiciatis blanditiis numquam iusto facere dolore perferendis, voluptatibus nostrum eveniet itaque adipisci? Accusantium sit expedita alias sed explicabo quam.
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
           </div>
        </div>
    </section>
  )
}

export default AboutSection