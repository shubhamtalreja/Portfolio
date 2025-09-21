import React from 'react'

const Skills = ({ skills }) => {
  const Lang = {
    languages: ["JavaScript", "Java"],
    frontend: ["HTML", "CSS", "ReactJs", "Bootstrap", "Tailwind CSS", "Shadcn"],
    backend: ["NodeJs", "Express", "MongoDB", "DynamoDB"],
    tools: [
      "Git", "AWS Amplify", "AWS Lambda", "AWS S3",
      "Figma", "Jira", "Postman", "Jenkins", "Cypress", "Splunk", "FullStory"
    ]
  };

  return (
    <div
      ref={skills}
      className="min-h-screen bg-zinc-800 rounded-xl container mx-auto p-5 opacity-80 mt-20"
    >
      <div className="flex justify-center items-center text-gray-300 text-4xl mb-8">
        Skills
      </div>

      <div className="flex flex-col gap-6 px-2 py-4">
        {/* Languages */}
        <div className="text-white font-semibold flex flex-col sm:flex-row gap-2">
          <div className="text-lg min-w-max">Languages:</div>
          <ul className="flex flex-wrap gap-2">
            {Lang.languages.map((item, idx) => (
              <li key={idx} className="border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 px-3 py-1 rounded-lg text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Frontend */}
        <div className="text-white font-semibold flex flex-col sm:flex-row gap-2">
          <div className="text-lg min-w-max">Frontend:</div>
          <ul className="flex flex-wrap gap-2">
            {Lang.frontend.map((item, idx) => (
              <li key={idx} className="border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 px-3 py-1 rounded-lg text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Backend */}
        <div className="text-white font-semibold flex flex-col sm:flex-row gap-2">
          <div className="text-lg min-w-max">Backend:</div>
          <ul className="flex flex-wrap gap-2">
            {Lang.backend.map((item, idx) => (
              <li key={idx} className="border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 px-3 py-1 rounded-lg text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Tools */}
        <div className="text-white font-semibold flex flex-col sm:flex-row gap-2">
          <div className="text-lg min-w-max">Tools:</div>
          <ul className="flex flex-wrap gap-2">
            {Lang.tools.map((item, idx) => (
              <li key={idx} className="border-2 border-slate-700 bg-slate-300 font-bold text-slate-800 px-3 py-1 rounded-lg text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills
