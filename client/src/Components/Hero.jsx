import React from 'react'
import { Link } from 'react-router-dom'
import kajal from '../assets/kajal.jpeg'

export default function Hero() {
  return (
   <>
    <section className="h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
             Hi, I'm <span className="text-blue-400">Kajal</span>👋
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-gray-300 font-bold">  Full Stack Developer | JAVA </h2>

          <p className="mt-6 text-gray-400 max-w-lg">
            Full Stack Developer skilled in MERN stack and Java, 
            focused on building fast, scalable, and user-friendly web applications.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <Link to='/project' >
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
                View Projects
              </button>
            </Link>

            <Link to='/contact'>
              <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT  */}
        <div className="flex justify-center">
          <img src={kajal} alt="kajal" className="rounded-2xl shadow-lg w-80 h-80 rounded-full object-cover blur-sm opacity-80" />
        </div>

      </div>

    </section>

   </>
  )
}
