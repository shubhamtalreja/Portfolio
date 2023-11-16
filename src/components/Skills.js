import React from 'react'

const Skills = ({ skills }) => {
    const Lang = [
        { progLanguage: "JavaScript" },
        { progLanguage: "Java" },
        { frontEnd: "HTML" },
        { frontEnd: "CSS" },
        { frontEnd: "JavaScript" },
        { frontEnd: "ReactJs" },
        { frontEnd: "Tailwind CSS" },
        { otherSkill: "Git" },
        { otherSkill: "Jira" },
        { otherSkill: "Postman" },
    ];
    return (
        <>
            <div ref={skills} className=' bg-zinc-800 rounded-xl container mx-auto p-5 mt-28 opacity-70'>
                <div className='flex justify-center align-center text-gray-300 text-4xl'
                >Skills
                </div>
                <div className='grid grid-rows-1 grid-flow-col p-8'>
                    <div className='flex justify-evenly gap-4 text-white font-semibold'>
                        <div className='text-lg'>Languages
                            <ul>
                                {Lang.filter(item => item.progLanguage).map((item, idx) => {
                                    return (
                                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                                            {item.progLanguage}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>Frontend
                            <ul>
                                {Lang.filter(item => item.frontEnd).map((item, idx) => {
                                    return (
                                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                                            {item.frontEnd}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>Others
                            <ul>
                                {Lang.filter(item => item.otherSkill).map((item, idx) => {
                                    return (
                                        <li key={idx} className='border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 w-fit px-2 py-1 rounded-lg my-1 text-sm'>
                                            {item.otherSkill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills