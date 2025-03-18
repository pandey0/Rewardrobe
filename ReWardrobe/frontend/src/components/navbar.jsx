import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { BsFillPersonFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai"; // Heart icon import
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { Isloggedin } = useContext(ShopContext); // Correctly destructure Isloggedin from context

  const closeMenu = () => setVisible(false);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      {/* Logo with Link to home */}
      <Link to='/'>
        <img src={assets.rewardrobe1} className='w-36' alt="Logo" />
      </Link>

      {/* Navigation Links for Desktop */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/ContactUs' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink 
          to='/sell' 
          className='flex flex-col items-center gap-1 relative group'
        >
          {/* Permanent background gradient */}
          <div className='absolute inset-0 bg-gradient-to-r from-maroon-500 to-red-600 opacity-20 z-[-1]'></div>

          {/* Box that will disappear on hover */}
          <div className='absolute inset-0 border-2 border-maroon-500  opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in-out'></div>

          {/* Text with space from the box */}
          <p className='text-sm font-semibold text-red-700 group-hover:text-red group-hover:scale-110 transition-all duration-300 ease-in-out relative z-10 px-4'>
            REWARDROBE IT
          </p>

          {/* Underline effect with scaling */}
          <hr className='w-0 group-hover:w-2/4 border-none h-[2px] bg-maroon-500 transition-all duration-300 ease-in-out' />
        </NavLink>

      </ul>

      {/* Icons and Profile */}
      <div className='flex items-center gap-6'>
        {/* Search Icon */}
        <CiSearch className='w-5 cursor-pointer' />

        {/* Profile Dropdown */}
        <div className='group relative'>
          {/* Conditionally disable the profile link based on Isloggedin */}
          <Link 
            to={!Isloggedin ? '/Login' : '#'} // If logged in, link does nothing
            className={`${Isloggedin ? 'pointer-events-none opacity-50' : ''}`} // Disable interaction if logged in
          >
            <BsFillPersonFill className='w-5 cursor-pointer' />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 border border-gray-300 text-black'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black' onClick={() => navigate('/Orders')}>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* Heart Icon for Wishlist */}
        <Link to='/WishList' className='relative'>
          <AiFillHeart className='w-5 cursor-pointer' />
        </Link>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <IoMdCart className='w-5 cursor-pointer' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-white'>
            {/* Cart count can go here */}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <div className='sm:hidden'>
          {/* Hamburger Icon */}
          <button onClick={() => setVisible(!visible)} className='w-6 cursor-pointer'>
            ☰
          </button>

          {/* Mobile Sidebar */}
          {visible && (
            <div className='absolute top-0 right-0 w-64 h-screen bg-white shadow-lg z-50 transition-all duration-300 ease-in-out'>
              <div className='flex justify-end p-4'>
                <button onClick={closeMenu} className='text-xl font-semibold'>X</button>
              </div>
              <ul className='flex flex-col items-center'>
                <li className='py-4'><Link to='/' onClick={closeMenu}>Home</Link></li>
                <li className='py-4'><Link to='/collection' onClick={closeMenu}>Collection</Link></li>
                <li className='py-4'><Link to='/about' onClick={closeMenu}>About</Link></li>
                <li className='py-4'><Link to='/contact' onClick={closeMenu}>Contact</Link></li>
                <li className='py-4'><Link to='/sell' onClick={closeMenu}>Rewardrobe It</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
