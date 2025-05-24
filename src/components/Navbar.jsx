import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const Navbar = ({ btn, setBtn }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "You have successfully logged out.",
          text: "Log Out Successful",
        });
      })
      .catch((error) => {});
  };

  const handleToggle = () => {
    setBtn(!btn);
  };

  return (
    <div className="border-b  border-amber-500 shadow-sm">
      <div className="navbar w-11/12 mx-auto  md:w-11/12 md:mx-auto flex justify-between items-center min-h-[70px]">
        
        <div className="flex ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-blue-900 bg-blue-50 mt-3 z-10 p-2 shadow  rounded-box w-52"
            >
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/addtofind">Add To Find Roommate</NavLink></li>
              <li><NavLink to="/browselisting">Browse Listing</NavLink></li>
              <li><NavLink to={`/mylisting/${user?.email}`}>My Listing</NavLink></li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-8 md:w-10" src="/logo.png" />
            <Link
              to="/"
              className="text-lg md:text-2xl font-bold hidden md:block"
            >
              My Roomie
            </Link>
          </div>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm md:text-base lg:text-lg">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/addtofind">Add To Find Roommate</NavLink></li>
            <li><NavLink to="/browselisting">Browse Listing</NavLink></li>
            <li><NavLink to={`/mylisting/${user?.email}`}>My Listing</NavLink></li>
          </ul>
        </div>

       
        <div className=" flex items-center gap-2">
          <div onClick={handleToggle}>
            <input
              type="checkbox"
              className="toggle border-black text-black bg-white checked:border-white checked:bg-black checked:text-white"
            />
          </div>

          {user ? (
            <div className="flex items-center gap-2">
              {user.photoURL ? (
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  className="rounded-full w-8 sm:w-10"
                  src={user.photoURL}
                />
              ) : (
                <FaUserCircle
                  data-tooltip-id="my-tooltip2"
                  data-tooltip-content={user.displayName}
                  className="text-2xl sm:text-3xl"
                />
              )}
              <Tooltip id="my-tooltip" />
              <Tooltip id="my-tooltip2" />
              <Link to='/login'>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-sm sm:btn-md btn-accent"
              >
                LogOut
              </button></Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="btn btn-outline btn-sm sm:btn-md btn-accent">
                  Login
                </button>
              </Link>
              <Link to="/signup" className=" sm:block">
                <button className="btn btn-outline btn-sm sm:btn-md btn-info">
                  SignUp
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
