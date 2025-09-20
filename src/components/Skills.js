import React from 'react'

const Skills = ({ skills }) => {
    const Lang = {
        languages: ["JavaScript", "Java"],
        frontend: ["HTML", "CSS", "ReactJs", "Bootstrap", "Tailwind CSS", "Shadcn"],
        backend: ["NodeJs", "Express", "MongoDB", "DynamoDB"],
        tools: [
            "Git",
            "AWS Amplify",
            "AWS Lambda",
            "AWS S3",
            "Figma",
            "Jira",
            "Postman",
            "Jenkins",
            "Cypress",
            "Splunk",
            "FullStory"
        ]
    };
    return (
        <div ref={skills} className=' bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70 mt-20 overflow-hidden'>
        <div className='flex justify-center items-center text-gray-300 text-4xl mb-8'>
            Skills
        </div>
        <div className='gap-4 p-8'>
            <div className='text-white font-semibold flex flex-row'>
                <div className='text-lg'>Languages: </div>
                <ul className='flex flex-row'>
                    {Lang.languages.map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-white font-semibold flex flex-row'>
                <div>Frontend:</div>
                <ul className='flex flex-row'>
                    {Lang.frontend.map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-white font-semibold flex flex-row'>
                <div>Backend:</div>
                <ul className='flex flex-row'>
                    {Lang.backend.map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='text-white font-semibold flex flex-row'>
                <div>Tools:</div>
                <ul className='flex flex-row'>
                    {Lang.tools.map((item, idx) => (
                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    
    )
}

export default Skills