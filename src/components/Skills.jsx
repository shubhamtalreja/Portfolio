import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress, SiAwslambda, SiJira, SiGithub, SiFigma, SiPostman, SiJenkins, SiAwsamplify } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Autoplay from 'embla-carousel-autoplay';


const Skills = ({ skills }) => {
  const skillIcons = [
    { icon: <SiJavascript size={50} color="#f7df1e" />, name: "JavaScript" },
    { icon: <SiReact size={50} color="#61dafb" />, name: "ReactJs" },
    { icon: <SiBootstrap size={50} color="#7952b3" />, name: "Bootstrap" },
    { icon: <SiTailwindcss size={50} color="#38bdf8" />, name: "Tailwind CSS" },
    { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
    { icon: <FaNodeJs size={50} color="#339933" />, name: "NodeJs" },
    { icon: <SiExpress size={50} color="#bfbdbdff" />, name: "Express" },
    { icon: <SiAwslambda size={50} color="#ff9900" />, name: "AwsLambda" },
    { icon: <SiAwsamplify size={50} color="#007396" />, name: "AwsAmplify" },
    { icon: <SiJira size={50} color="#0052cc" />, name: "Jira" },
    { icon: <SiGithub size={50} color="#9b9a9aff" />, name: "GitHub" },
    { icon: <SiFigma size={50} color="#F24E1E" />, name: "Figma" },
    { icon: <SiPostman size={50} color="#ff6c37" />, name: "Postman" },
    { icon: <SiJenkins size={50} color="#d24939" />, name: "Jenkins" },
  ]

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
      <div className="mt-16 flex flex-col items-center">
        {/* <div className="text-gray-300 text-2xl mb-5">Skill Icons</div> */}
        <Carousel className="w-full mx-auto" opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
          <CarouselContent className='-ml-1'>
            {skillIcons.map((item, idx) => (
              <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/5">
                <Card className="bg-zinc-900 flex flex-col items-center p-6 rounded-xl shadow-lg">
                  <CardContent>
                    <div className="flex flex-col items-center">
                      {item.icon}
                      <span className="mt-2 text-gray-200 text-lg">{item.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
        </Carousel>
      </div>
    </div>
  );
};

export default Skills
