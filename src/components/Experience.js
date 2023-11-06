import React from 'react'

const Experience = ({ about }) => {
    return (
        <>
            {/* <div className='h-screen'> */}
            <div ref={about} className=' bg-zinc-800 rounded-xl container mx-auto p-5'>
                <div className='flex justify-center align-center text-white text-4xl'>
                    About
                </div>
                <div className='text-gray-100 p-5'>
                    <div className='text-xl'>"I am Shubham Talreja a Software Developer 🧑‍💻 with 1.4 years of industry experience in Frontend development, specializing in AI and payment provider web applications. I have honed my skills of HTML5, CSS3, JavaScript, ReactJS and many more technologies.
                        Passionate about creating robust and user-friendly web applications, I thrive in collaborative environments where I can contribute my technical expertise and problem-solving abilities.With this I am dedicated to creating efficient and scalable solutions.
                        My work experience has provided me with a deep understanding of industry best practices, compliance standards, and data security. I am constantly staying updated with the latest technologies and trends in web development to ensure the applications I build are modern, intuitive, and meet the evolving needs of users."</div>
                </div>
                <div className='flex justify-center align-center text-white text-4xl'>
                    Experience
                </div>
                <div className='text-gray-100 p-5'>
                    <div className='font-semibold text-xl'>Wittybrains Software Pvt. Ltd.</div>
                    <div className='text-sm'>02-2022 - Present</div>
                    <ul className='list-disc text-xl'>
                        <li>Experience on building extensive web application in the domain of AI and Payment Providers</li>
                        <li>Collaborated with cross-functional teams including designers and product managers to define project requirements and scope</li>
                        <li>Ensured code quality and maintainability through unit testing and code reviews, following industry-standard best</li>
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Experience