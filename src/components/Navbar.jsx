import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { FaUserCircle, FaUserGraduate } from 'react-icons/fa';



const Navbar = ({btn,setBtn}) => {
  const {user,logOut}=use(AuthContext)
  const handleLogout=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>{

    })
  }
    const handleToggle=()=>{
setBtn(!btn)
    }
    return (


    <div className=" border-b-1 border-amber-500  shadow-sm ">
      <div className='navbar   w-11/12 mx-auto'>
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
        <div className='flex md:gap-3  md:items-start  '>
          <img className='w-10 hidden md:flex' src='/logo.png' alt="" />
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
        <div className=' flex gap-4 items-center  w-1/4 justify-end'>
<div onClick={handleToggle}  className='flex gap-1 items-center'>
    <input 
  type="checkbox"
  
  className="toggle border-black text-black bg-white checked:border-white checked:bg-black checked:text-white"
/>
</div>
{
  user?
  <div className='flex items-center gap-3'>
    {user.photoURL?
  <img className='rounded-full w-10' src={user.photoURL}></img> : <FaUserCircle className='text-3xl'/>
  
  }
  
       <Link  to='/login'><button onClick={handleLogout} className='btn btn-outline btn-accent '>LogOut</button></Link> 
</div>
:
<div className='flex gap-4'>
<Link to='/login'><button className='btn btn-outline btn-accent'>Login</button></Link>
        <Link className='hidden md:flex' to='/signup'><button className='btn btn-outline btn-info'>SignUp</button></Link>
</div>
}
        </div>
      </div>
    </div>


  );
};

export default Navbar;