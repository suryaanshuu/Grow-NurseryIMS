import { useState } from 'react';
import React from 'react';
import '../global.css';
import './index.css'

function App() {

  return (
<div> {/*Body*/}
{/* NAVIGATION BAR */}
    <nav className="flex justify-between shadow-md items-center rounded-[15px]">

      <div className=''> {/*md:flex-wrap lg:flex-nowrap xl:justify-start*/}
        <img className='h-[100px] w-[100px] overflow-hidden' src='growLogoX.png'></img>
      </div>

      <ul className='flex justify-between'>
        <a href=''>< li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-2">Home</li></a>
        <a href='#'><li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-2">Products</li></a>
        <a href='#'><li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-2">Contact Us</li></a>
        <a href='#'><li className="mr-4 font-bold font-sans text-lg text-slate-500 text-balance antialiased hover:text-green-2">About Us</li></a>
      </ul>

      </nav>

{/* MARKETING BODY */}
      <div className='antialiased font-sans flex justify-between'>

        <div>
          <div className='font-bold text-5xl ml-9 mt-9 mr-11'>
            Delivering {<span style={{color: '#659e38'}}>Plants,</span>} <br></br>
            Delivering {<span style={{ color: '#659e38' }}>Happiness!</span>}<br></br>
          </div>
          
          <div className='mt-4 ml-9 font-medium'>
            Know about your favourite plants and their favourable factor, Veggies, <br></br>
            Citrus, Fruits, Herbs and more...
          </div>

          <img src='Animation.gif'></img>
        </div> 

        <img src='Plant2.png'></img>

      </div>

      <br></br> 
{/*MARKETING ENDS*/}
      
      <div>
        <div className='bg-green-4 shadow-t-2xl'>

          <img src='Plant1.png' className='border-dashed border-8 border-yellow mx-auto'></img>

          <div className='bg-green-3 font-sans text-balance antialiased text-white rounded-t-[15px] shadow-t-md'>
            <div className='mt-2'>
              <h2 className='ml-9 text-2xl font-medium mt-9'>Description</h2>
              <p className='ml-9 mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eius neque, recusandae, quos odit delectus deleniti excepturi iure molestias totam tempore, et consectetur voluptate reprehenderit ipsum adipisci velit cumque iste.<br></br>
              </p>

              <div className='flex'>
                {/* <ul className='flex-wrap justify-content mt-9 ml-9'>
                  <li className='mt-9 ml-9 mb-9 text-s'>Type</li>
                  <li className='mt-9 ml-9 mb-9 text-s'>Temperature</li>
                  <li className='mt-9 ml-9 mb-9 text-s'>Water</li>
                </ul> */}
                <Details></Details>


                <br></br>

                <ul className='flex-wrap justify-content mt-9 ml-9'>
                  <li className='mt-9 ml-9 mb-9 text-s'>Sunlight</li>
                  <li className='mt-9 ml-9 mb-9 text-s'>Lifespan</li>
                  <li className='mt-9 ml-9 mb-9 text-s'>Soil pH</li>
                </ul>

                <br></br>

                <ul className='flex-wrap justify-content mt-9 ml-9'>
                  <li className='mt-9 ml-9 mb-9 text-s'>Family</li>
                  <li className='mt-9 ml-9 mb-9 text-s'>Pesticide</li>
                  <li className='mt-9 ml-9 mb-9 text-s'>Growth Span</li>
                </ul>

                <br></br>

                <div className='h-[350px] w-[300px] bg-white ml-auto mr-9 mt-9 mb-9 rounded-[15px] shadow-l text-black'>
                  <p>*Image to be displayed here*</p>
                </div>
              </div>

              <button className='bg-yellow-1 text-black h-[50px] w-40 ml-9 mb-9 rounded-[13px] font-medium font-sans text-xl text-balance antialiased shadow-md hover:bg-yellow-2'>Add To Cart</button>
            
            </div>
            </div>
          </div>
        
      </div>

      

{/* FOOTER SECTION */}
      <footer className='bg-gray-900 antialiased font-medium mt-4 flex justify-between'>
        <div className='mt-9'>
          <img src='growLogoWhite.png' className='h-[200px] w-[200px] overflow-hidden'></img><br></br>
          <div className='ml-9 text-white mb-4'>
            copyright © 2024 Grow.<br></br>
            All right reserved.
          </div>
        </div>

        <div className='pt-10'>
          <h3 className='text-white'>Sitemap</h3><br></br>

          <ul className='text-gray'>
            <li className='text-gray-1000 hover:text-green-2'>
              <a href='#'>About Us</a>
            </li>

            <li className='text-gray-1000 hover:text-green-2'>
              <a href='#'>Contact Us</a>
            </li>

            <li className='text-gray-1000 hover:text-green-2'>
              <a href='#'>Terms & Conditions</a>
            </li>
          </ul>
        </div>
        
        <div className='pt-10'>
          <h3 className='text-white'>Informative</h3><br></br>
          <ul>
            <li className='text-gray-1000 hover:text-green-2'>
              <a href='#'>FAQ</a>
            </li>

            <li className='text-gray-1000 hover:text-green-2'>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className='mr-9 pt-10'>
          <h3 className='text-white'>Subscribe</h3> <br></br>
          <div className='mr-9 relative'>
            <input className='outline-none bg-gray-900 text-white underline underline-offset-[5px] decoration-green' type='text' placeholder='jimmyfallon@grow.com'></input>
            <button className='font-bold font-sans text-white hover:text-green-2 absolute'>GO</button>
          </div>
        </div>
      </footer>
        
</div>

  );
};

export default App

const Details = () => {
  return (
    <ul className='flex-wrap justify-content mt-9 ml-9'>
      <li className='mt-9 ml-9 mb-9 text-s'>Type</li>
      <li className='mt-9 ml-9 mb-9 text-s'>Temperature</li>
      <li className='mt-9 ml-9 mb-9 text-s'>Water</li>
    </ul>
  );
};