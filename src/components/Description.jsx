import React, { useEffect } from 'react'
import devImage from '../assets/img/shubham.png'
const Description = ({ home }) => {
    return (
        <>
            <div ref={home} className='flex flex-col md:flex-row items-center min-h-screen md:h-screen container mx-auto p-5'>
                <div className='w-full mb-6 md:mb-0'>

                    <div className='text-gray-100 p-1'>
                        <div className='font-bold text-3xl md:text-5xl leading-tight'>
                            Hi, I'm <span className='text-blue-400'>Shubham Talreja</span>
                        </div>
                        <div className='text-xl md:text-2xl text-gray-300 mt-2 font-medium'>
                            Full-Stack Developer | GenAI Developer
                        </div>
                        <div className='text-gray-200 text-lg md:text-xl mt-5 leading-relaxed max-w-3xl'>
                            Full-Stack Developer with 4 years of experience building scalable web applications using React.js, Node.js, Python, and AWS serverless architecture. 
                            Experienced in developing AI-powered applications using LLMs, RAG pipelines, AWS Bedrock, and modern cloud technologies to deliver high-performance 
                            and user-focused solutions.
                        </div>
                    </div>
                    <div className='p-1'>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold w-10'
                            onClick={() => { window.open('https://github.com/shubhamtalreja', '_blank') }}>
                            <i className="fab fa-github fa-lg"></i></button>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold w-10 ml-5'
                            onClick={() => { window.open('mailto:shubhamtalreja2@gmail.com', '_blank') }}>
                            <i className='fa fa-envelope'> </i></button>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold ml-5'
                            onClick={() => { window.open('https://drive.google.com/file/d/1PiO1kSmAIjv_YIESu3ONoUBtWnFAvGkJ/view?usp=sharing', '_blank') }}>
                            CV
                        </button>
                    </div>
                </div>
                <div className='w-full flex justify-center animate-pulse'>
                    <img src={devImage} className="rounded-full w-64 h-64 md:w-[400px] md:h-[400px] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Description