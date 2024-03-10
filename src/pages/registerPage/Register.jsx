// Register.js
import React, { useState } from 'react';
import './register.css';
import google from '../../assests/images/google.png';
import apple from '../../assests/images/apple.png';
import facebook from '../../assests/images/facebook.png';
import Button from '../../components/Button';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this data to your backend for processing
    // You can also add form validation here before submitting the data
  };

  return (
    <div className='registration flex flex-col items-center justify-center h-screen'>

      <div className='title text-center mb-24'>
        <h1 className="text  text-fontMain text-new font-semibold leading-10  ">Register to StyleSync</h1>
      </div>
    
      <div className='form-section'>
        <form onSubmit={handleSubmit} className='form  '>
        <div className='form-group '>
            <div className='one mb-3'>
                <div className='for-lable'><label htmlFor='username'>Username</label>
                    <div className='for-inputs'> 
                        <input
                            type='username'
                            id='username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className='border-b-2 border-black focus:border-gray-500 outline-none mb-3 w-full mt-2'
                            required
                            />
                    </div>
                </div>
            </div>
           
        </div>
        <div className='form-group'>
            <div className='two mt-3 mb-3'>
                <div className='for-lable'><label htmlFor='email'>Email</label>
                    <div className='for-inputs'> 
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='border-b-2 border-black focus:border-gray-500 outline-none mb-3 w-full mt-2'
                            required
                            />
                    </div>
                </div>
            </div>
           
        </div>
        <div className='form-group'>
            <div className='three mt-3'>
                <div className='for-lable'><label htmlFor='password'>Password</label>
                    <div className='for-inputs'> 
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='border-b-2 border-black focus:border-gray-500 outline-none mb-3 w-full mt-2'
                            required
                            />
                    </div>
                </div>
            </div>
           
        </div>
          {/* <button type='submit'>Sign Up</button> */}
          <Button type='submit' className=' button mt-6 w-full  '> Sign Up </Button>
        </form>
        
        
        <div className='vertical-line  h-full  '>
        <div className="line"></div>
          <div className="or font-semibold text-fontMain text-xl  ">OR</div>
          <div className="line"></div>
        </div>

       
        <div className='continue-options '>
            <div className='continue-content '>

            <div className='option-box flex mb-10'>
                <div className='icon '>
                    <img src={google} alt="" className='image  w-6 h-6 mr-4 ' />
                </div>
                <div className='icon-content'><p>Continue with Google</p></div>

            </div>
            <div className='option-box flex mt-10 mb-10'>
                <div className='icon'><img src={apple} alt="" className='image w-6 h-6 mr-4' /></div>
                <div className='icon-content'><p>Continue with Apple</p></div>

            </div>
            <div className='option-box flex mb-10'>
                <div className='icon'><img src={facebook} alt="" className='image  w-6 h-6 mr-4' /></div>
                <div className='icon-content'><p>Continue with Facebook</p></div>

            </div>
            </div>
            
        </div>
       
      </div>


      <div className='content mt-24 text-center'>
        <div className='login-option mb-4 '>
          <p className='pb-2 tracking-normal font-semibold'>Already Have An Account? <a href="login " className=' hover:cursor-pointer'>Login</a></p>
          <p className=' bottom-text tracking-normal'>Secure Login with reCAPTCHA subject to Google</p> 
         <div className='flex justify-center gap-1'>
         <p className=' bottom-text underline'>Terms </p>
         <p className=' bottom-text '> & </p>
         <p className=' bottom-text underline'>Privacy</p>
          </div> 
        </div>


        
      </div>
      
    </div>
  );
}

export default Register;
