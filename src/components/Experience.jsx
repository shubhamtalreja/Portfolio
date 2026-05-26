import React from 'react'

const Experience = ({ about }) => {
    return (
        <>
            <div ref={about} className='bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70 relative z-10'>

                <div className='flex justify-center align-center text-white text-4xl'>
                    Experience
                </div>

                <div className='text-gray-100 p-5'>
                    <div className='font-semibold text-xl'>
                        Wittybrains Software Technologies Pvt. Ltd.
                    </div>

                    <div className='text-sm mb-4'>
                        September 2022 - Present
                    </div>

                    <div className='mb-8'>
                        <div className='text-2xl font-semibold mb-2 text-white'>
                            AI Chatbot Platform
                        </div>

                        <ul className='list-disc text-lg pl-5 space-y-2'>
                            <li>
                                Developed an AI-powered chatbot platform enabling organization users to query internal knowledge directly from a web dashboard using ReactJS and AWS serverless architecture.
                            </li>

                            <li>
                                Built the chatbot interface with real-time messaging, chat history, file sharing, and a role-based insights dashboard to monitor usage metrics and user feedback.
                            </li>

                            <li>
                                Integrated Claude LLM models via AWS Bedrock and implemented a Retrieval-Augmented Generation (RAG) pipeline to generate contextual responses, improving response accuracy and relevance by approximately 70%.
                            </li>

                            <li>
                                Implemented streaming responses using AWS Lambda (NodeJs) and integrated an MCP server to enable tool-based integrations, reducing response latency and improving system responsiveness by around 60%.
                            </li>

                            <li>
                                Integrated Jira APIs to automatically create support tickets from negative feedback and implemented monitoring using Splunk RUM and FullStory, improving issue tracking and debugging efficiency by nearly 80%.
                            </li>
                        </ul>
                    </div>

                    <div className='mb-8'>
                        <div className='text-2xl font-semibold mb-2 text-white'>
                            Payment Integration Platform
                        </div>

                        <ul className='list-disc text-lg pl-5 space-y-2'>
                            <li>
                                Developed a payment platform UI within the Q2 banking portal enabling users to securely make loan payments through REPAY services.
                            </li>

                            <li>
                                Built Accounts and Account Details pages with ReactJS and Context API to manage global state and enable real-time transaction workflows.
                            </li>

                            <li>
                                Integrated REPAY APIs to support ACH and card payments, including scheduled payments and dynamic convenience fee calculations.
                            </li>

                            <li>
                                Implemented transaction history and scheduled payments modules with advanced filtering and API-driven data rendering, improving transaction visibility and user experience by approximately 65%.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-2xl font-semibold mb-2 text-white'>
                            Capex Tracker System
                        </div>

                        <ul className='list-disc text-lg pl-5 space-y-2'>
                            <li>
                                Developed a CAPEX tracking system enabling employees to log working hours against assigned projects and generate operational reports.
                            </li>

                            <li>
                                Built admin dashboards to monitor user submissions, manage project lists, and track compliance across teams, improving administrative reporting efficiency by nearly 75%.
                            </li>

                            <li>
                                Implemented push notifications using Web Push API and automated monthly reminders using AWS EventBridge scheduled Lambda jobs, reducing missed CAPEX submissions by around 80%.
                            </li>

                            <li>
                                Managed deployments using AWS Amplify and automated UI/API testing using Cypress to ensure application stability.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
