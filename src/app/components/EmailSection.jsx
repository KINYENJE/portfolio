"use client"

import React, {useEffect, useState} from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

import { RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { to } from '@react-spring/web'

const EmailSection = () => {
  const [emailSent, setEmailSent] = useState(false)
  // useEffect(() => {
  //   setEmailSent('')
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    const JSONdata = JSON.stringify(data)

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    })

    const result = await res.json()
    console.log(result)

    if (res.status === 200) {
      console.log('Message Sent')
      setEmailSent(true)
      toast.success('Message Sent Successfully')
    } else if (res.status === 500) {
      console.log('Message failed to send')
      toast.error('Message failed to send')
      setEmailSent(false)
    }
  }
  
  
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 py-24 gap-4 relative '>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lsecondary dark:from-primary to-transparent rounded-full h-40 w-40 z-0 blur-lg absolute top-2/4 left-4 max-md:hidden transform translate-x-1/2 translate-1/2"></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-ltext dark:text-white my-2'>
          Let&rsquo;s Talk Business
        </h5>
        <p className='dark:text-tertiary text-laccent mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities and to grow my network. If you have any questions, feel free to reach out to me.
        </p>
        <div className='socials flex flex-row gap-4 items-center justify-center my-4 px-8 text-ltext dark:text-white'>
          <Link href={"https://github.com/KINYENJE"}>
            
              <AiFillGithub className='h-8 w-8 hover:text-tertiary' />
            
          </Link>
          <Link href={"https://twitter.com/NKinyenje"}>
            
            <RiTwitterXFill className='h-8 w-8 hover:text-tertiary' />
          </Link>
          <Link href={"https://www.instagram.com/kinyenjezzz/"}>
            
            <AiFillInstagram className='h-8 w-8 hover:text-tertiary' />
          </Link>
          <Link href={"https://www.linkedin.com/in/james-mbugua-22850423a/"}>
            
              <AiFillLinkedin className='h-8 w-8 hover:text-tertiary rounded-full' />
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col items-left justify-center gap-4'>
          <div className='mb-6'>
            <label htmlFor="email"  type="email" className='text-white block mb-2 text-sm font-medium text-left'>
              Your Email:
            </label>
            <input type='email' id='email' name="email"  required placeholder='janedoe@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-tertiary rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lprimary dark:focus:ring-primary focus:border-transparent' />
          </div>

          <div className='mb-6'>
            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
              Subject:
            </label>
            <input type='text' id='subject' name='subject' required placeholder='Topic of Discussion' className='bg-[#18191E] border border-[#33353F] placeholder-tertiary rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lprimary dark:focus:ring-primary focus:border-transparent' />
          </div>

          <div>
            <label htmlFor="message"  className='text-white block mb-2 text-sm font-medium'>
              Message:
            </label>
            <textarea name="message" id="message" required placeholder='Enter Your Message here' className='bg-[#18191E] border border-[#33353F] placeholder-tertiary rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lprimary dark:focus:ring-primary focus:border-transparent'/>
          </div>

          <button type='submit' className=' px-4 w-fit py-3 dark:border-none border-2 border-laccent rounded-full text-ltext hover:text-laccent bg-lprimary dark:bg-gradient-to-br from-primary via-secondary to-primary hover:bg-ltext dark:hover:bg-slate-200 dark:text-black  font-medium'>
            Send Message
          </button>

          

          
           
        </form>
      </div>
    </section>
  )
}


export default EmailSection