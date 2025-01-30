import React from 'react'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className="flex flex-col sm:flex-row gap-14 my-10 mt-40 text-sm">
            <div>
                 <img className="mb-5 w-60" src={assets.logo1} alt=""/>
                 <p className='w-full md:w-2/3 text-gray-600 leading-6 ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda illum mollitia ea odit aliquam optio in veniam natus, non tempore atque autem sunt repellendus. Ipsa error perspiciatis maxime hic distinctio optio rem tempora!</p>
            </div>


            <div>
               <p className='text-xl font-medium mb-5 ml-5 md:ml-0'>COMPANY</p>
               <ul className='flex flex-col gap-2 text-gray-600 ml-5 md:ml-0'>
                <NavLink to="/" onClick={()=>scrollTo(0,0)}>Home</NavLink>
                <NavLink to="/about" onClick={()=>scrollTo(0,0)}>About Us</NavLink>
                <NavLink to="/contact" onClick={()=>scrollTo(0,0)}>Contact Us</NavLink>
                <li>Privacy Policy</li>
               </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 ml-5 md:ml-0'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600 ml-5 md:ml-0'>
                    <li>+1-212-456-7890</li>
                    <li>docscheduler@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
           <hr/>
           <p className='py-5 text-sm text-center'>Copyright 2025@ DocScheduler -All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;