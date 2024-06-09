import React from 'react'
import projectImage1 from '../assets/img/project1.PNG'
import projectImage2 from '../assets/img/project2.PNG'


const Project = ({ projects }) => {
    const projectsArray = [
        {
            image: projectImage1,
            title: 'Portfolio',
            description: 'Developer Portfolio',
            path: 'https://github.com/shubhamtalreja/Portfolio'
        },
        {
            image: projectImage2,
            title: 'IT-Support',
            description: 'IT-Support Website',
            path: 'https://github.com/shubhamtalreja/IT-Support'
        }
    ]
    return (
        <div ref={projects} className='h-screen bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70 mb-20 mt-20'>
            <div className='flex justify-center items-center text-gray-300 text-4xl mb-8'>
                Projects
            </div>
            <div className='flex flex-wrap justify-evenly'>
                {projectsArray.map((item, idx) => {
                    return (
                        <div key={idx} className='flex flex-col justify-between w-full sm:w-[300px] m-5 bg-slate-600 rounded-lg py-5 px-2'>
                            <div>
                                <img src={item.image} alt={item.title} className='mb-4 w-full' />
                                <div className='text-2xl text-slate-50 mb-2'> {item.title} </div>
                                <div className='text-xl text-slate-50 mb-4'> {item.description} </div>
                            </div>
                            <div className='flex justify-between'>
                                <button className='w-32 text-center bg-slate-200 p-2 text-lg text-slate-950 font-semibold
                                rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300'>
                                    Live
                                </button>
                                <button className='w-32 text-center bg-slate-200 p-2 text-lg text-slate-950 font-semibold
                                rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300'
                                    onClick={() => { window.open(item.path, "_blank") }}>
                                    Source code
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>



    )
}

export default Project