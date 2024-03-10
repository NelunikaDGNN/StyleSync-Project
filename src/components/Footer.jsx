import React from 'react';
import playStore from '../assests/images/playStore.png';
import appStore from '../assests/images/appStore.png';
import message from '../assests/images/message.png';
import telephone from '../assests/images/telephone.png';


const Footer = () => {
  return (
    <div className='bg-backgroundOne py-10'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex flex-col'>
          <div className='text-lg font-semibold mb-3'>Contact information</div>
          <div className='telephone flex  mt-4'>
            <img src={telephone} alt="" className='w-8 h-8 mr-4' />
          <div className='mb-2'>+9471 123 4567</div>

          </div>
          <div className='email flex mt-2'>
            <img src={message} alt="" className='w-8 h-8 mr-4' />
          <div>abcstqtq@gmail.com</div>
          </div>
         
          
        </div>

        <div className='flex flex-col'>
          <div className='text-lg font-semibold mb-4'>OverView</div>
          <div className='mb-2 cursor-pointer hover:underline'>Home</div>
          <div className='mb-2 cursor-pointer hover:underline'>Services</div>
          <div className='mb-2 cursor-pointer hover:underline'>Articles</div>
          <div className='mb-2 cursor-pointer hover:underline'>FAQs</div>
          <div className='cursor-pointer hover:underline'>Contact Us</div>
        </div>

        <div className='flex flex-col'>
          <div className='text-lg font-semibold mb-4'>Get the mobile App</div>
          <div className='flex items-center mb-2 cursor-pointer hover:opacity- border border-fontMain rounded-md p-2 '>
           <img src={playStore} alt="playStore"  className='w-8 h-8 mr-2'/>
             
            <div>
              <div className='text-sm'>Get it On</div>
              <div className='text-sm'>Google Play</div>
            </div>
          </div>

          <div className='flex items-center cursor-pointer hover:opacity-80 border border-fontMain rounded-md p-2'>
          <img src={appStore} alt="appStore" className='w-8 h-8 mr-2' />
          
            <div>
              <div className='text-sm'>Download on the</div>
              <div className='text-sm'>App Store</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
