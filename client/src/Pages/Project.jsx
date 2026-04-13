import React from 'react'
import quiz from '../assets/quiz.png'
import form from '../assets/form.png'
import foodrecipe from '../assets/foodrecipe.png'

export default function Project() {

    const projects = [
  {
    title: "Quiz Question",
    desc: "A modern Quiz Question built with React and BootStrap CSS.",
    tech: "React • BootStrap • JavaScript",
    link: "https://github.com/kumari-Kajal123/Quiz-question.git",
    image:quiz
  },
  {
    title: "Form Data",
    desc: "Real-time form application using MERN stack.",
    tech: "MongoDB • Express • React • Node • Socket.io",
    link: "https://github.com/kumari-Kajal123/form-data.git",
    image:form
  },
  {
    title: "Food Recipe",
    desc: "Creative motion graphics and animations made in Blender.",
    tech: "React • BootStrap • JavaScript • Authentication jwt",
    link: "https://github.com/kumari-Kajal123/food-recipe.git",
    image:foodrecipe
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
              <span className="text-gray-500"><img src={project.image} alt="" className='h-40 w-full' /></span>
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
