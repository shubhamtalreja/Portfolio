import React, { useEffect } from 'react'
import devImage from '../assets/img/shubham.jpg'
const Description = () => {
    const words = ["Frontend Developer", "Software Developer", "Web Developer", "Web Designer"];
    let i = 0;
    let timer;

    function typeWriter() {
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

    function deleteText() {
        const heading = document.getElementById("typewriter");
        const word = words[i];
        const speed = 75;

        if (heading.textContent.length > 0) {
            heading.textContent = word.substring(0, heading.textContent.length - 1);
            timer = setTimeout(deleteText, speed);
        } else {
            i = (i + 1) % words.length;
            setTimeout(typeWriter, speed * 2);
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
                            I'm &nbsp;
                            <div className='inline-flex font-bold' id='typewriter'></div>
                        </div>
                        <div className='text-gray-200 text-xl'>
                            Software Engineering graduate and a Coding Enthusiast with strong technical skills anchored on extensive engineering coursework
                            and a special focus on Frontend Web Development. Let's create something extraordinary together!
                        </div>
                    </div>
                    <div className='p-1'>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold w-10'
                            onClick={() => { window.open('https://github.com/shubhamtalreja', '_blank') }}>
                            <i className='fa fa-github'> </i></button>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold w-10 ml-5'
                            onClick={() => { window.open('mailto:shubhamtalreja2@gmail.com', '_blank') }}>
                            <i className='fa fa-envelope'> </i></button>
                        <button className='text-white p-2 rounded-xl bg-gradient-to-r from-slate-400 to-slate-500 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring focus:ring-violet-300 font-semibold ml-5'
                         onClick={() => { window.open('https://drive.google.com/file/d/1E836UnLZEHCu5JJcSqcvcL9GSzK9YZdZ/view?usp=drive_link', '_blank') }}>
                            Download CV </button>
                    </div>
                </div>
                <div className='w-full flex justify-center animate-pulse h-3/4'>
                    <img src={devImage} />
                </div>
            </div>
        </>
    )
}

export default Description