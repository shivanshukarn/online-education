import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-black body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-5">
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Engineering</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">IT & Software</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Management</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Science</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Literature</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
            <nav className="list-none mb-5">
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer" href='#'>Home</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer" href='#Services'>Services</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer" href='#Courses'>Courses</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer" href='#FAQ'>FAQ</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer" href='#Contact'>Contact</a>
              </li>
            </nav>
          </div>
          {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-5">
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-[#18164d] cursor-pointer">Fourth Link</a>
              </li>
            </nav>
          </div> */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ml-auto">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 tracking-widest text-sm text-black">Newsletter</label>
                <input type="text" id="footer-field" placeholder='Enter Your Email' name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-[#18164d] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#18164d] hover:bg-white hover:text-[#18164d] cursor-pointer font-semibold hover:border-[#18164d] hover:border-2 border-2  py-1 px-4 focus:outline-none rounded">Subscribe</button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Subscribe to our Newsletter
              <br className="lg:block hidden" />to get latest updates on your inbox
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='/'>
            <img src="/logo.png" className='w-56 p-1' alt="" />
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Created By —
            <a href="https://shivanshu.ml" rel="noopener noreferrer" className="text-black ml-1" target="_blank">Shivanshu Karn</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer