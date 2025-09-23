import React, { useEffect } from 'react'
import devImage from '../assets/img/shubham (2).png'
const Description = () => {
    const words = ["Frontend Developer", "Software Developer", "Web Developer", "FullStack Developer"];
    let i = 0;
    let timer;

    const typeWriter = () => {
        const heading = document.getElementById("typewriter");
        const word = words[i];
        const speed = 250;

        if (heading.textContent.length < word.length) {
            heading.textContent += word.charAt(heading.textContent.length);
            timer = setTimeout(typeWriter, speed);
        } else {
            clearTimeout(timer);
            setTimeout(deleteText, speed * 2);
        }
    }

    const deleteText = () => {
        const heading = document.getElementById("typewriter");
        const word = words[i];
        const speed = 75;

        if (heading.textContent.length > 0) {
            heading.textContent = word.substring(0, heading.textContent.length - 1);
            timer = setTimeout(deleteText, speed);
        } else {
            i = (i + 1) % words.length;
            setTimeout(typeWriter, speed * 5);
        }
    }

    useEffect(() => {
        typeWriter();
    }, [])
    return (
        <>
            <div className='flex flex-col md:flex-row items-center h-screen container mx-auto p-5'>
                <div className='w-full'>

                    <div className='text-gray-100 p-1'>
                        <div className='font-bold text-4xl'>
                            <div>I'm &nbsp;</div>
                            <div className='inline-block min-h-[80px]' id='typewriter'></div>
                        </div>
                        <div className='text-gray-200 text-xl'>
                            Full Stack Developer and coding enthusiast with strong technical skills in building scalable web applications.
                            Experienced in both frontend and backend development, with a passion for creating efficient, user-friendly solutions. Let’s build something extraordinary together!
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
                            onClick={() => { window.open('https://drive.google.com/file/d/1565LVLr_-FDPKU9k60zHJ0c6c27ZioAD/view?usp=sharing', '_blank') }}>
                            Download CV </button>
                    </div>
                </div>
                <div className='w-full flex justify-center animate-pulse h-[400px]'>
                    <img src={devImage} className="rounded-full w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Description