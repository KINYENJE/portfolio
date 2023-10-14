
"use client"

import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const ProjectsCard = ({imgUrl, title, description }) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{background: `url(${imgUrl})`, backgroundSize: 'cover'}}>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link href={'/'} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white relative'>
                    {/* <CodeBracketIcon  className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:white' /> */}
                    <svg className = 'h-10 w-10 text-[#ADB7BE]  cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>

                </Link>
            </div>

        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>


    </div>
  )
}

export default ProjectsCard