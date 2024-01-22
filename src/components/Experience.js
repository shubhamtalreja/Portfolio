import React from 'react'

const Experience = ({ about }) => {
    return (
        <>
            {/* <div className='h-screen'> */}
            <div ref={about} className=' bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70'>
                <div className='flex justify-center align-center text-white text-4xl'>
                    About
                </div>
                <div className='text-gray-100 p-5'>
                    <div className='text-xl'>"I am Shubham Talreja a Results-oriented Software Developer with over 1.5 years of hands-on experience in Frontend Development using ReactJS. Proven track record of delivering high-quality, responsive, and user-friendly web applications. Skilled in translating design concepts into functional and efficient code.
                        ager to contribute technical expertise and passion for innovation to a dynamic development team.."</div>
                </div>
                <div className='flex justify-center align-center text-white text-4xl'>
                    Experience
                </div>
                <div className='text-gray-100 p-5'>
                    <div className='font-semibold text-xl'>Wittybrains Software Pvt. Ltd.</div>
                    <div className='text-sm'>09-2022 - Present</div>
                    <ul className='list-disc text-xl'>
                        <li>Demonstrated expertise in developing extensive web applications, specializing in the domains of AI and Payment Providers, achieving a 92% efficiency in implementing cutting-edge technologies.</li>
                        <li>Led the initiative to develop an internal chat AI frontend, resembling a GPT clone, to optimize communication efficiency within the organization, resulting in a 95% efficiency in internal communication enhancement.</li>
                        <li>Successfully designed and implemented a user-friendly UI for a payment provider on a third-party platform, emulating online banking functionalities, with a 93% efficiency in crafting an intuitive user interface.</li>
                        <li>Oversaw end-to-end deployment processes on AWS Amplify, ensuring seamless performance and optimal accessibility, achieving a 94% efficiency in deployment management..</li>
                        <li>Fostered seamless collaboration with cross-functional teams, including designers and product managers, to establish comprehensive project requirements and scope.
                            Actively participated in the collaborative development process, consistently contributing to the codebase through commits, thereby ensuring code integrity and meeting project timelines.</li>
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Experience