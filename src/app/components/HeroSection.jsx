"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9]'>
                        Hello, I&apos;m {" "}
                    </span>
                    <br />
                    

                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'James Njenga.',
                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                            'A Full Stack Developer.',
                            3000,
                            'A Software Engineer.',
                            3000,
                        
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                     />
                               
                </h1>
                <p className = 'text-[#ADB7BE] text-base text-lg  lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <div className='mt-6 mb-3'>
                    <button className='px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-[#93A5CF] via-[#E4EfE9] to-[#93A5CF]  hover:bg-slate-200 text-black  font-medium'>
                        Hire Me
                    </button>
                    <button className='px-[2px] py-[2px] w-full sm:w-fit rounded-full bg-gradient-to-br from-[#93A5CF] via-[#E4EfE9] to-[#93A5CF] hover:bg-slate-800 text-white mt-3 '>
                        <span className='block bg-[#121212] rounded-full px-5 py-2'>
                        Download CV
                        </span>
                    </button>
                </div>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative z-1'>
                <Image src='/images/profile-avatar.png'
                alt='profile photo' 
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-[42%] left-1/2 '
                width={300} 
                height={300} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection