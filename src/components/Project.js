import React from 'react'
import projectImage1 from '../assets/img/project1.PNG'

const Project = ({ projects }) => {
    const projectsArray = [
        {
            image: projectImage1,
            title: 'Portfolio',
            description: 'Developer Portfolio'
        }
    ]
    return (
        <>
            <div ref={projects} className='bg-zinc-800 rounded-xl container mx-auto p-5 mt-48 opacity-70'>
                <div className='flex justify-center align-center text-gray-300 text-4xl'>
                    Projects
                </div>
                <div>
                    {projectsArray.map((item, idx) => {
                        return (

                            <div key={idx} className='flex flex-wrap w-full justify-evenly'>
                                <div className='h-auto flex flex-col justify-between w-[300px] my-5 bg-slate-600 rounded-lg py-5 px-2'>
                                    <div>
                                        <img src={item.image} />
                                        <div className='text-2xl text-slate-50'> {item.title} </div>
                                        <div className='text-xl text-slate-50'> {item.description} </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button className='w-32 text-center bg-slate-200 p-2 text-lg text-slate-950 font-semibold
                             rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300'>
                                            Live
                                        </button>
                                        <button className='w-32 text-center bg-slate-200 p-2 text-lg text-slate-950 font-semibold
                             rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300'
                                            onClick={() => { window.open("https://github.com/shubhamtalreja/Portfolio", "_blank") }}>
                                            Source code
                                        </button>
                                    </div>
                                </div>
                            </div>)

                    })}
                </div>
            </div>
        </>
    )
}

export default Project