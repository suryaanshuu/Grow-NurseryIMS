import React from 'react'
import GrowLogo from '../../public/growLogoX.png'
  
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between shadow-md items-center rounded-[15px]">

      <div className=''> {/*md:flex-wrap lg:flex-nowrap xl:justify-start*/}
        <img className='h-[100px] w-[100px] overflow-hidden' src={GrowLogo}></img>
      </div>

      <ul className='flex justify-between'>
        <a href=''>< li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-600">Home</li></a>
        <a href='#'><li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-600">Products</li></a>
        <a href='#'><li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-600">Contact Us</li></a>
        <a href='#'><li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-600">About Us</li></a>
      </ul>

      </nav>
    </div>
  )
}

export default Navbar