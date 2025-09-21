import React from 'react'
import portfolioImage from '../assets/img/portfolio.PNG'
import itSupportImage from '../assets/img/it-support.PNG'
import bookingPageImage from '../assets/img/booking-page.PNG'
import privateChatImage from '../assets/img/private-chat.PNG'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Button } from './ui/button'

const Project = ({ projects }) => {
    const projectsArray = [
        {
            image: portfolioImage,
            title: 'Portfolio',
            description: 'Portfolio app showcasing projects, skills, and experience.',
            path: 'https://github.com/shubhamtalreja/Portfolio'
        },
        {
            image: itSupportImage,
            title: 'IT-Support',
            description: 'IT-Support app for ticketing, issue tracking, and admin management.',
            path: 'https://github.com/shubhamtalreja/IT-Support'
        },
        {
            image: bookingPageImage,
            title: 'TapApt',
            description: 'TapApt app for appointment booking with user and admin panels.',
            path: 'https://github.com/shubhamtalreja/Booking-app'
        },
        {
            image: privateChatImage,
            title: 'Chatapp',
            description: 'Chatapp for real-time messaging with user-friendly interface.',
            path: 'https://github.com/shubhamtalreja/Chat-app'
        }

    ]
    return (
        <div ref={projects} className='h-screen bg-zinc-800 rounded-xl container mx-auto p-5 opacity-70 mb-20 mt-20'>
            <div className='flex justify-center items-center text-gray-300 text-4xl mb-8'>
                Projects
            </div>
            <div className='flex flex-wrap justify-evenly'>

                <Carousel className="w-full" opts={{
                    align: "start",
                    loop: true,
                }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="-ml-1">
                        {projectsArray.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="bg-zinc-800 text-gray-100 rounded-xl flex flex-col h-[400px]">
                                            <img src={item.image} alt={item.title} className="rounded-t-xl object-cover h-[400px] w-full" />
                                            <CardHeader className="flex-grow px-4 py-2">
                                                <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                                                <CardDescription className="text-gray-400 text-base">{item.description}</CardDescription>
                                            </CardHeader>
                                            <CardFooter className="flex justify-center gap-2 px-4 pb-4 pt-2">
                                                {/* <Button className="bg-zinc-900 text-gray-50 hover:bg-indigo-500">Live</Button> */}
                                                <Button className="bg-zinc-700 text-gray-100 hover:bg-purple-500"
                                                 onClick={() => { window.open(item.path, "_blank") }}>Source Code</Button>
                                            </CardFooter>
                                        </Card>

                                    </div>

                                </CarouselItem>)
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full shadow-md" />
                </Carousel>
            </div>
        </div>



    )
}

export default Project