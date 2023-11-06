import React, { useRef } from 'react'
import Description from './Description'
import Skills from './Skills'
import Project from './Project'
import Experience from './Experience'
import Footer from './Footer'

const Navbar = () => {
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);

  const scrollToContent = ((elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  })


  return (
    <>
      <div ref={home} className="flex justify-end items-center font-semibold p-5 container mx-auto">
        <ul className='flex justify-end text-white gap-[4vw] p-5'>
          <li>
            <a className='hover:text-gray-400' href='#home' onClick={() => { scrollToContent(home) }}>Home</a>
          </li>
          <li>
            <a className='hover:text-gray-400' href='#skills' onClick={() => { scrollToContent(skills) }}>Skills</a>
          </li>
          <li>
            <a className='hover:text-gray-400' href='#experiences' onClick={() => { scrollToContent(about) }}>About</a>
          </li>
          <li>
            <a className='hover:text-gray-400' href='#projects' onClick={() => { scrollToContent(projects) }}>Projects</a>
          </li>
        </ul>
        <button className='text-white p-2 rounded-xl 
        bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300'
          onClick={() => { window.open('https://www.linkedin.com/in/shubham-talreja-b04697205/', '_blank') }}>
          Lets Connect &nbsp; <i className='fa fa-arrow-right' /></button>
      </div>
      <Description />
      <Experience about={about} />
      <Skills skills={skills} />
      <Project projects={projects} />
      <Footer />
    </>
  )
}
export default Navbar