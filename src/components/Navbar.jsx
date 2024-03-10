import React from 'react';
import Button from './Button';
import './style.css';
import Search from './Search';
function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 bg-tranparent fixed z-999 w-full '>
      {/* Left Side */}
      <div className='flex items-center ml-6'>
        <div className=' logo text-3xl font-semibold text-fontMain '>StyleSync</div>
      </div>

      {/* Middle */}
      <div className='flex justify-center gap-16'>
        <div className='text-xl '>
          <a href='#'className='hover:underline' >Home</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'>Services</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'>Articles</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'>FAQs</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'>Contact us</a>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-10 mr-6'>
       
        <Search  className='mr-2 '/>
          
        <div className='text-xl cursor-pointer hover:underline  mr-2 ml-2'>Login</div>
        <Button className="text-lg text-white px-4 py-2 rounded-base hover:bg-gray-700 ml-2">Register</Button>
      </div>
      </div>
    
  );
}

export default Navbar;
