import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import kajal from '../assets/kajal.jpeg'

export default function About() {
  return (<>
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            My projects reflect my skills in full stack development and my ability to build real-world applications. 
            I have worked on projects using the MERN stack, where I developed responsive user interfaces and efficient backend systems. 
          </p>

          <p className="text-gray-300 leading-relaxed">
            From creating dynamic web applications to building real-time 
            features using Socket.io, each project has helped me improve my problem-solving and development skills.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            <a href="https://drive.google.com/file/d/1yunpy3rMSh3PG6Pfg4NSJGgZHFYPYi2-/view?usp=drive_link">Download Resume</a>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative w-75 h-75">

            {/* ROTATING BORDER */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-spin-slow"></div>

            {/* INNER IMAGE */}
            <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
              <img  src={kajal} alt="profile" className="w-full h-full rounded-full object-cover" />
            </div>

          </div>
        </div>

      </div>

        {/* SKILLS SECTION */}
        <div className="mt-16">
        <h3 className="text-3xl font-bold mb-10 text-white text-center">  My Skills </h3>

        <div className="grid md:grid-cols-3 gap-8">

            {/* FRONTED */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Frontend <FaReact></FaReact>
            </h4>
            <p className="text-gray-300 leading-relaxed">
                HTML • CSS • JavaScript • React
            </p>
            </div>

            {/* BACKEND */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-105 hover:shadow-green-500/30 transition-all duration-300">
            <h4 className="text-xl font-semibold text-green-400 mb-4">
                Backend  <FaNodeJs></FaNodeJs>
            </h4>
            <p className="text-gray-300 leading-relaxed">
                Node.js • Express.js • MongoDB
            </p>
            </div>

            {/* TOOLS */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
                Tools & Tech <FaGithub></FaGithub>
            </h4>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition">
                Git • GitHub • Socket.io • REST APIs
            </p>
            </div>

        </div>
        </div>

    </section>
  </>
  )
}
