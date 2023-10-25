
"use client"

import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const ProjectsCard = ({imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{background: `url(${imgUrl})`, backgroundSize: 'cover'}}>
            <div className='overlay absolute items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-2'>
                <Link href={gitUrl} target='blank' className='h-14 w-14 border-2 relative rounded-full border-tertiary hover:border-white group/link'>
                    
                    <svg className = 'h-10 w-10 text-tertiary  cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>

                </Link>
                <Link href={previewUrl} target='blank' className='h-14 w-14 border-2  rounded-full border-tertiary hover:border-white relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 text-tertiary  cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                
                </Link>
            </div>

        </div>
        <div className='text-white rounded-b-xl  bg-gradient-to-br from-lsecondary via-laccent to-lsecondary to-70%  dark:from-[#181818] dark:to-[#181818] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2 dark:text-primary text-ltext'>{title}</h5>
            <p className='dark:text-tertiary text-black opacity-70'>{description}</p>
        </div>


    </div>
  )
}

export default ProjectsCard