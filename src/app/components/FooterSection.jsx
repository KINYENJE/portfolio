import React from "react";
import Image from "next/image";
import { TbBrandNextjs } from 'react-icons/tb'
import Link from "next/link";


const FooterSection = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white -mt-12">
      <div className="container p-12 flex justify-between">
        <Link href={"/"}>
        <Image src='/images/n-logo.png' alt='brand' width={70} height={70}  />
        </Link>
        
        <div className='flex flex-nowrap items-center justify-center'>
        <p className="pr-1">Developed using</p>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">        
          <TbBrandNextjs className='text-2xl text-white hover:text-slate-600' />
          
        </a>
        <p className="font-bold text-slate-600 underline">
          <a href="https://nextjs.org/">extJs</a>
        </p>
        </div>

        <p className="text-slate-600 flex justify-center items-center">All rights reserved by <span className="font-bold underline hover:text-white ml-1">
          <a href=""> Kinyenje.</a>
          </span> 
          </p>
      </div>
    </footer>
  );
};

export default FooterSection;