import React from 'react'
import Link from 'next/link'

const NavLink = ({href, title, onClick}) => {
  return (
    <Link onClick={onClick} href={href} className=' text-laccent block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white'>
                {title}
    </Link>
  )
}

export default NavLink