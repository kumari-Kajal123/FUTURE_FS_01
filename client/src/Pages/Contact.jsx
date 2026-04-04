import React from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (<>
      <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations, freelance work, or just a friendly chat.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📧 Email: your@email.com</p>
              <p>📱 Phone: +91 XXXXX XXXXX</p>
              <p>🌐 Location: India</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form className="space-y-5">

            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />

            <input type="email"  placeholder="Your Email" className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none" />

            <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"></textarea>

            <button type="submit" className="w-full py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition">
              Send Message
            </button>

          </form>

        </div>
        {/* <div className="flex gap-4 mt-4">
  <a href="#" className="hover:text-purple-400">LinkedIn</a>
  <a href="#" className="hover:text-purple-400">GitHub</a>
  <a href="#" className="hover:text-purple-400">Instagram</a>
</div> */}
        <div className="flex gap-5 mt-6">
            <a className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition hover:scale-110">
                <FaLinkedin /> LinkedIn
            </a>
            <a className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 hover:bg-black transition hover:scale-110">
                <FaGithub /> GitHub
            </a>
            <a className="flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition hover:scale-110">
                <FaInstagram /> Instagram
            </a>
        </div>

      </div>
      
    </section>
  </>
  )
}
