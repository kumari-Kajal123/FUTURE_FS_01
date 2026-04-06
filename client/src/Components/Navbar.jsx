import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="bg-black text-white fixed w-full top-0 left-0 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-400">
          KAJAL
        </h1>

        {/*MENU SAME FOR BOTH */}
        <ul className="flex gap-6">
          <li>
            <NavLink to="/"  className={({ isActive }) => isActive ? "text-purple-500 font-bold" : "text-white" }>Home </NavLink>
          </li>

          <li>
            <NavLink  to="/about"  className={({ isActive }) =>  isActive ? "text-purple-500 font-bold" : "text-white"}>About </NavLink>
          </li>

          <li>
            <NavLink to="/project"  className={({ isActive }) =>  isActive ? "text-purple-500 font-bold" : "text-white"}> Projects</NavLink>
          </li>


          <li>
            <NavLink  to="/contact"  className={({ isActive }) =>  isActive ? "text-purple-500 font-bold" : "text-white" } > Contact </NavLink>
          </li>
        </ul>

        {/* ICON FOR SMALL SCREEN */}
        <div  className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} >  ☰ </div>
      </div>
    </nav>
    </>
  )
}
