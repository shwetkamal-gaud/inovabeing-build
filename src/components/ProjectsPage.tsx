'use client'
import { ProjectData } from '@/types/types';
import { Figma, Github, Globe, Youtube } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import GlassCard from './GlassCard';

const ProjectsPage = () => {
    const ProjectData = [
        {
            id: 1,
            title: 'Cruptocurrency Tracking Platform',
            skills: ['TypeScript', "ReactJs", "Next.js", "Redux", "Redux-Saga", "Bootstrap", "HTML", "CSS"],
            description: [`A real-time cryptocurrency tracking platform with historical data and a profit calculator.`,
                `Integrated the CoinGecko RESTful APIs for live updates and TradingWidget for visual analytics.`,
                `Optimized state management and reusable components implemented for a faster and seamlessUI.`],
            cardImage: '/crypto.svg',
            githubUrl: 'https://github.com/shwetkamal-gaud/koinX-app',
            isPrivate: true,
            liveUrl: 'https://koin-x-app.vercel.app/'
        },
        {
            id: 2,
            title: 'TaskBuddy',
            skills: ['TypeScript', "ReactJs", "React Query", "Redux", "TailwindCSS", "HTML", "CSS"],
            cardImage: '/task.svg',
            isPrivate: true,
            description: [`A real-time cryptocurrency tracking platform with historical data and a profit calculator.`,
                `Integrated the CoinGecko RESTful APIs for live updates and TradingWidget for visual analytics.`,
                `Optimized state management and reusable components implemented for a faster and seamlessUI.`],
            githubUrl: 'https://github.com/shwetkamal-gaud/task-management-system',
            liveUrl: 'https://task-management-system-sepia.vercel.app/'
        },
        {
            id: 3,
            title: 'Multi Factor Authentication',
            skills: ["React Native", "Redux", "Redux-Saga", "Native Base", "React-Native-Paper", "yup"],
            description: [`The primary aim of Multifactor Authentication app is to enhance security by requiring users to provide
                        multiple forms of verification to prove their identity.`,
                `By requiring multiple factors, this feature significantly reduce the risk of unauthorized access, even if one
                        factor is compromised. This makes system or data more secure against cyber attacks`],
            cardImage: '/app.svg',
            githubUrl: 'https://github.com/shwetkamal-gaud/multifactor-authentication',
            isPrivate: true
        }
    ]
    const ProjectCard = ({ data }: { data: ProjectData[] }) => {
        return (
            <div className="grid md:grid-cols-3 grid-cols-1  gap-4 justify-between">
                {data.map((item) => (
                    <GlassCard
                        key={item.id}
                    >
                        <div className="border-b border-gray-400 flex justify-center w-full">
                            <Image
                                className="w-[15rem] h-[13rem] object-cover"
                                alt={item.title}
                                src={item.cardImage || ''}
                                width={1000}
                                height={1000}
                            />
                        </div>

                        <ul className="w-full p-3 border-b border-gray-300 flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="px-3 py-1 text-gray-900 dark:text-white text-sm font-normal bg-gray-200 dark:bg-gray-700 rounded-lg font-mono"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>

                
                        <div className="p-4 flex flex-col h-full justify-between">
                            <div className="text-xl font-medium text-gray-900 dark:text-white font-mono flex items-center gap-2">
                                {item.title}
                                <span className="ml-2 text-xs px-2 py-1 font-normal border border-purple-400 rounded-full">
                                    Public
                                </span>
                            </div>

                            <ul className="mt-2 space-y-1">
                                {item.description.map((desc, index) => (
                                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 flex  flex-wrap gap-2 justify-self-end font-mono">
                                {item.liveUrl && (
                                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <button >
                                            <Globe/>
                                        </button>
                                    </a>
                                )}
                                {item.figma && (
                                    <a href={item.figma} target="_blank" rel="noopener noreferrer">
                                        <button >
                                            <Figma/>
                                        </button>
                                    </a>
                                )}
                                {item.githubUrl && (
                                    <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <button >
                                            <Github/>
                                        </button>
                                    </a>
                                )}
                                {item.youtubeUrl && (
                                    <a href={item.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                        <button >
                                            <Youtube/>
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        );
    };
    
  return (
      <div className='mt-10 p-3 flex flex-grow w-full  items-center justify-center flex-col dark:text-white'>
           <ProjectCard data={ProjectData}/>
    
      </div>
  )
}

export default ProjectsPage