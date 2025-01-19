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
                    <div className='text-xl'>"I am Shubham Talreja a Results-oriented Software Developer with around 2.5 years of hands-on experience in Software Development using ReactJS. Proven track record of delivering high-quality, responsive, and user-friendly web applications. Skilled in translating design concepts into functional and efficient code.
                        ager to contribute technical expertise and passion for innovation to a dynamic development team.."</div>
                </div>
                <div className='flex justify-center align-center text-white text-4xl'>
                    Experience
                </div>
                <div className='text-gray-100 p-5'>
                    <div className='font-semibold text-xl'>Wittybrains Software Technologies Pvt. Ltd.</div>
                    <div className='text-sm'>Sept-2022 - Present</div>
                    <ul className='list-disc text-xl'>
                        <li>Delivered scalable web applications in the AI and Payment domains, achieving up to 95% efficiency through the
                            use of modern technologies.</li>
                        <li>
                            Built an internal AI chatbot frontend to improve communication within the organization, featuring chat
                            functionality, file sharing, and an insights dashboard with permission-based access for tracking user activity,
                            feedback, and ratings. Integrated Jira for handling negative feedback, improving issue resolution efficiency by
                            95%.
                        </li>
                        <li>
                            Implemented a file management module within the chatbot’s insights dashboard, accessible only to admins. This
                            feature enabled AWS S3 CRUD operations and file previews, achieving 92% efficiency in file handling processes.
                        </li>
                        <li>
                            Integrated a Capex Tracker module for logging working hours by project, generating detailed reports, and
                            allowing data exports. Enabled administrators to manage project lists, improving productivity by 94%.
                        </li>
                        <li>
                            Created a user-friendly UI for a payment provider platform, supporting seamless transactions, such as custom
                            date range filters, bank transfers, scheduled payments, and autopayments. This project enhanced client reach
                            and operational efficiency by 93%, leveraging a third-party platform for increased visibility.
                        </li>
                        <li>
                            Managed end-to-end deployment processes on AWS Amplify, ensuring smooth performance and achieving 94%
                            efficiency in deployment workflows, as part of the chatbot UI project.
                        </li>
                        <li>
                            Implemented Splunk RUM (Real User Monitoring) in both the chatbot and payment UIs to monitor UI and API
                            errors, ensuring efficient troubleshooting and performance optimization.
                        </li>
                        <li>
                            Recently integrated FullStory UI monitoring into the AI chatbot, enhancing the ability to track user behavior and
                            identify performance issues for further improvement.
                        </li>
                        <li>
                            Used Cypress framework for automation testing to automate UI and API tests, ensuring consistent quality and
                            performance across the application.
                        </li>
                        <li>
                            Collaborated closely with designers and product managers to define project requirements, contributing to 92%
                            efficiency in meeting project timelines.
                        </li>
                        <li>
                            Consistently committed high-quality code, maintaining project integrity and ensuring timely delivery.
                        </li>
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Experience