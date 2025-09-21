import React, { useRef, useState } from 'react'
import Skills from './Skills'
import Project from './Project'
import Experience from './Experience'
import Description from './Description'
import Footer from './Footer'

const Navbar = () => {
  const home = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const about = useRef(null)
  const [showMenu, setShowMenu] = useState(false)


  const scrollToContent = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      })
       setShowMenu(false);
    }
  }

  // Map ref and labels for easy option rendering and lookup
  const menuItems = [
    { label: 'Home', ref: home },
    { label: 'Skills', ref: skills },
    { label: 'About', ref: about },
    { label: 'Projects', ref: projects },
  ]

  return (
    <>
      <div className="container mx-auto p-5 flex justify-end items-center font-semibold relative">
        {/* Desktop/Large-screen menu */}
        <ul className="hidden sm:flex justify-end text-white gap-[4vw] p-5">
          {menuItems.map(({ label, ref }) => (
            <li key={label}>
              <button
                className="hover:text-gray-400"
                onClick={() => scrollToContent(ref)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger + dropdown */}
        <div className="sm:hidden flex items-center gap-2 w-full justify-end">
          <button
            className="text-white text-2xl p-2 rounded bg-zinc-700"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Open Menu"
          >
            &#9776;
          </button>
          {showMenu && (
            <div className="absolute top-[60px] right-5 bg-zinc-800 shadow-lg rounded-lg flex flex-col z-50 min-w-[140px]">
              {menuItems.map(({ label, ref }) => (
                <button
                  key={label}
                  className="px-4 py-3 text-white hover:bg-gray-700 text-left"
                  onClick={() => scrollToContent(ref)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="hidden sm:inline-block text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/shubham-talreja-b04697205/',
              '_blank'
            )
          }
        >
          Lets Connect &nbsp; <i className="fa fa-arrow-right" />
        </button>
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
