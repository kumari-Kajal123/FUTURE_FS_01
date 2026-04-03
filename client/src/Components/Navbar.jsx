import React, { useState } from 'react'

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
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center gap-6 md:gap-8  py-4 md:py-0 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex `} >
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* ICON FOR SMALL SCREEN */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
    </>
  )
}
