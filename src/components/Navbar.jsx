import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (


    <div className="  bg-gray-100 shadow-sm sticky top-0 z-100">
      <div className='navbar  w-11/12 mx-auto'>
        <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/addtofind" >Add To Find Roommate</NavLink></li>
            <li><NavLink to="/browselisting">Browse Listing</NavLink></li>
            <li><NavLink to="/mylisting">My Listing</NavLink></li>
          </ul>
        </div>
        <div className='flex gap-3 items-center md:items-start  '>
          <img className='w-10' src='/logo.png' alt="" />
          <p className='w-[180px]'><Link to='/' className="md:text-2xl font-bold"> My Roomie</Link></p>
        </div>
      </div>
      <div className="navbar-center  hidden lg:flex  ">
        <ul className="menu menu-horizontal px-1 lg:text-xl">
        <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/addtofind" >Add To Find Roommate</NavLink></li>
            <li><NavLink to="/browselisting">Browse Listing</NavLink></li>
            <li><NavLink to="/mylisting">My Listing</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end " >
        < div className='tooltip tooltip-bottom  ' data-tip="">
          
            <img
              className="w-11  rounded-full"
              src=""
              alt=""
            />
          
        </div>
        </div>
        <div className='flex gap-4 '>

        <button className='btn'>Login</button>
        <button className='btn'>SignUp</button>
        </div>
      </div>
    </div>


  );
};

export default Navbar;