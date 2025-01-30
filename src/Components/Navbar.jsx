import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();

    const [showMenu,setShowMenu]=useState(false);
    const [loggedin,setLoggedin] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img onClick={()=>navigate("/")} className="w-55 cursor-pointer" src={assets.logo1}/>
        <ul className='hidden  md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className="py-1">HOME</li>
                <hr className=' outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctors">
                <li className="py-1">ALL DOCTORS</li>
                <hr className='outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/about">
                <li className="py-1">ABOUT</li>
                <hr className=' outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/contact">
                <li className="py-1">CONTACT</li>
                <hr className='outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                loggedin
                ?<div className="flex items-center gap-2 cursor-pointer group relative">
                    <img className="w-8 rounded-full" src={assets.profile_pic} alt=""/>
                    <img src={assets.dropdown_icon} alt=""/>
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 py-4 px-4">
                        <p onClick={()=>navigate('my-profile')}className="hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={()=>navigate('my-appointments')}className="hover:text-black cursor-pointer">My Appointments</p>
                        <p onClick={()=>setLoggedin(false)} className="hover:text-black cursor-pointer">Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>navigate('/login')} className="bg-[#5f6fff] text-white px-8 py-3 rounded-full text-light">Create Account</button>
            }
            <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt=""/>
            <div className={`${showMenu ? "fixed w-full" : "hidden"} md:hidden right-0 top-0 bottom-0 z-2 overflow-hidden bg-white`}>
                <div className='flex items-cnter justify-between px-5 py-6'>
                    <img className='w-50' src={assets.logo1} alt="" />
                    <img className=' mt-2 w-7 h-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                 <NavLink  onClick={()=>setShowMenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
                 <NavLink  onClick={()=>setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
                 <NavLink  onClick={()=>setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
                 <NavLink  onClick={()=>setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;