import React from 'react'

const Skills = ({ skills }) => {
    const Lang = [
        { progLanguage: "JavaScript" },
        { progLanguage: "Java" },
        { frontEnd: "HTML" },
        { frontEnd: "CSS" },
        { frontEnd: "JavaScript" },
        { frontEnd: "ReactJs" },
        { frontEnd: "BootStrap" },
        { frontEnd: "Tailwind CSS" },
        { backend: "NodeJs" },
        { backend: "Express" },
        { backend: "MongoDB" },
        { otherSkill: "Git" },
        { otherSkill: "AWS Amplify" },
        { otherSkill: "AWS Lambda" },
        { otherSkill: "AWS S3" },
        { otherSkill: "Figma" },
        { otherSkill: "Jira" },
        { otherSkill: "Postman" },
        { otherSkill: "Jenkins" },
        { otherSkill: "Cypress" },
        { otherSkill: "Splunk" },
        { otherSkill: "FullStory" },

    ];
    return (
        <div ref={skills} className='h-screen bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70 mt-20 overflow-hidden'>
        <div className='flex justify-center items-center text-gray-300 text-4xl mb-8'>
            Skills
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
            <div className='text-white font-semibold'>
                <div className='text-lg'>Languages</div>
                <ul>
                    {Lang.filter(item => item.progLanguage).map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item.progLanguage}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-white font-semibold'>
                <div>Frontend</div>
                <ul>
                    {Lang.filter(item => item.frontEnd).map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item.frontEnd}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-white font-semibold'>
                <div>Backend</div>
                <ul>
                    {Lang.filter(item => item.backend).map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item.backend}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-white font-semibold'>
                <div>Tools</div>
                <ul>
                    {Lang.filter(item => item.otherSkill).map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item.otherSkill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    
    )
}

export default Skills