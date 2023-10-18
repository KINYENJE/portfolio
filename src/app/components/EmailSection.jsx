import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaSquareXTwitter } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative overflow-hidden'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#93A5CF] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className='z-10 ml-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&rsquo;s Talk Business
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities and to grow my network. If you have any questions, feel free to reach out to me.
        </p>
        <div className='socials flex flex-row gap-2 '>
          <Link href={"https://github.com/KINYENJE"}>
            
              <AiFillGithub className='h-8 w-8' />
            
          </Link>
          <Link href={"https://twitter.com/NKinyenje"}>
            
            <RiTwitterXFill className='h-8 w-8' />
          </Link>
          <Link href={"https://www.linkedin.com/in/james-mbugua-22850423a/"}>
            
              <AiFillLinkedin className='h-8 w-8' />
          </Link>
        </div>
      </div>

      <div className='flex-1 justify-center items-center ml-32'>
        <form action="" className='flex flex-col items-left justify-center gap-4'>
          <div className='mb-6'>
            <label htmlFor="email"  type="email" className='text-white block mb-2 text-sm font-medium text-left'>
              Your Email:
            </label>
            <input type='email' id='email' required placeholder='janedoe@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#ADB7BE] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#93A5CF] focus:border-transparent' />
          </div>

          <div className='mb-6'>
            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>
              Subject:
            </label>
            <input type='text' id='subject' required placeholder='Topic of Discussion' className='bg-[#18191E] border border-[#33353F] placeholder-[#ADB7BE] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#93A5CF] focus:border-transparent' />
          </div>

          <div>
            <label htmlFor="message"  className='text-white block mb-2 text-sm font-medium'>
              Message:
            </label>
            <textarea name="message" id="message" required placeholder='Enter Your Message here' className='bg-[#18191E] border border-[#33353F] placeholder-[#ADB7BE] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#93A5CF] focus:border-transparent'/>
          </div>

          <button type='submit' className=' px-4 w-fit py-3 rounded-full  bg-gradient-to-br from-[#93A5CF] via-[#E4EfE9] to-[#93A5CF]  hover:bg-slate-200 text-black  font-medium'>
            Send Message
          </button>
           
        </form>
      </div>
    </section>
  )
}


export default EmailSection