import React from 'react'
import logo from '../../assets/logo.png'
import { IoHome } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { FcStatistics } from "react-icons/fc";
import { Link, NavLink } from 'react-router';
export default function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
         <li><NavLink className={({isActive})=> isActive?"bg-green-700 text-white":"text-black"} to="/"><IoHome />Home</NavLink></li>
      <li><NavLink className={({isActive})=> isActive?"bg-green-700 text-white":"text-black"} to="/timeline"> <RiTimeLine />Timeline</NavLink></li>
      <li><NavLink className={({isActive})=> isActive?"bg-green-700 text-white":"text-black"} to="/status"><FcStatistics />Stats</NavLink></li>
      </ul>
    </div>
    <img src={logo} alt="" />
   
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2">
      <li><NavLink className={({isActive})=> isActive?"bg-green-700 text-white":"text-black"} to="/"><IoHome />Home</NavLink></li>
      <li><NavLink className={({isActive})=> isActive?"bg-green-700 text-white":"text-black"} to="/timeline"> <RiTimeLine />Timeline</NavLink></li>
      <li><NavLink className={({isActive})=> isActive?"bg-green-700 text-white":"text-black"} to="/status"><FcStatistics />Stats</NavLink></li>
    </ul>
  </div>
  
</div>
    </div>
  )
}
