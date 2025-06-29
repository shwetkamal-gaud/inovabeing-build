'use client'
import React from 'react'
import GlassCard from './GlassCard'
import Image from 'next/image'

const AboutPage = () => {
    const aboutData = [
        {
            id: 1,
            text: `An extremely positive individual & who can stay focused and motivated. Responsible, dependable, and takes great pride in all my work. Can work both independently and in a team, which has been proven from past work experience and academic experiences.`,
        },
        {
            id: 2,
            text: `In my previous role as a Software Developer(Frontend) Intern at Medkart Pharmacy PVT LTD Company, Medkart Pharmacy PVT LTD is a
pharmacy-based company located in Ahmedabad, Gujarat. We have a small team to develop program
management tools for managing whole Ecommerce & Store projects. We implemented more than 50 features
for these projects, like creating new-bill, advance-bill and return-bill, track of expenses & till, Loyalty Points,
Referral Program, Gift Voucher & Cash Voucher, Users and user's roles management, data grid view, calendar view, user permissions module,
multilevel user permissions segment, etc. I was responsible for developing and maintaining multiple
web applications that received high praise for their performance and user experience. I have a deep
understanding of React’s core principles and best practices, and I am proficient in using Redux for
state management. Additionally, I have experience working with RESTful APIs, integrating
third-party libraries to enhance functionality and Next Js which is optimize website performance and simplify developement giving inbuilt features such as SSR, Routing etc.`
        },
        {
            id: 4,
            text: `I have knowledge in HTML, CSS, JavaScript, and Typescript, and I have a strong understanding of
responsive design principles. I am also experienced in using version control systems such as Git. My ability to collaborate effectively
with cross-functional teams and my strong problem-solving skills have been instrumental in delivering
successful projects on time and within budget.`

        },
    ]
    return (
        <div className='mt-10  flex flex-grow h-full w-full px-5 overflow-y-auto scrollbar-none items-center justify-center flex-col dark:text-white'>
            <GlassCard className='max-w-7xl'>
                <div className="flex    justify-center">
                    <div className="container flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square overflow-hidden rounded-full">
                                <Image
                                    src={'/profile.svg'}
                                    alt="about-image"
                                    className="w-full h-full object-cover"
                                    width={1400}
                                    height={1400}
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <div className="flex flex-col gap-4 py-5">
                                {aboutData.map((data) => (
                                    <p
                                        key={data.id}
                                        className={`text-base  dark:text-gray-200 text-gray-600'}`}
                                    >
                                        {data.text}
                                    </p>
                                ))}

                                
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </div>
    )
}

export default AboutPage