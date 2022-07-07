import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="container bg-gray-100 mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
          <img src="/logo.png" className='w-56 p-1' alt="" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-black font-semibold">
          <Link href={'/'}><a className="mr-5 hover:text-[#18164d]">Home</a></Link>
          <Link href={'#Services'}><a className="mr-5 hover:text-[#18164d]">Services</a></Link>
          <Link href={'#Courses'}><a className="mr-5 hover:text-[#18164d]">Courses</a></Link>
          <Link href={'#FAQ'}><a className="mr-5 hover:text-[#18164d]">FAQ</a></Link>
          <Link href={'#Contact'}><a className="mr-0 hover:text-[#18164d]">Contact</a></Link>
        </nav>
        <button className="hidden lg:inline-flex items-center bg-[#18164d] text-white border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-[#18164d] font-semibold hover:border-[#18164d] hover:border-2 rounded text-base mt-4 md:mt-0">Login
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar