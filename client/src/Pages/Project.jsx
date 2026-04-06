import React from 'react'

export default function Project() {

    const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React and Tailwind CSS.",
    tech: "React • Tailwind • JavaScript",
    link: "#",
  },
  {
    title: "MERN Chat App",
    desc: "Real-time chat application using Socket.io and MERN stack.",
    tech: "MongoDB • Express • React • Node • Socket.io",
    link: "#",
  },
  {
    title: "Food Recipe",
    desc: "Creative motion graphics and animations made in Blender.",
    tech: "React • BootStrap • JavaScript • Authentication jwt",
    link: "#",
  },
];


  return (<>

    <section className="min-h-screen bg-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300" >
            {/* IMAGE */}
            <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>

            {/* CONTENT */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              {project.desc}
            </p>

            <p className="text-gray-500 text-xs mb-4">
              {project.tech}
            </p>

            {/* BUTTON*/}
            <a  href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-purple-500 rounded-lg text-sm hover:bg-purple-600 transition" >
               View Project
            </a>
          </div>
        ))}
      </div>
      
    </section>
    
  </>
  )
}
