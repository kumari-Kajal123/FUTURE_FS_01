import React from 'react'

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

          <h2 className="text-2xl md:text-3xl mt-4 text-gray-300">
            Full Stack Developer | JAVA
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
           Nemo aut veritatis cum eligendi, minus illo dolores ipsum soluta ratione ullam exercitationem perferendis odit eveniet magnam quisquam, dolorem distinctio eius iusto?
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
              View Projects
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT  */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="3D Work"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>

   </>
  )
}
