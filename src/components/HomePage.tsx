'use client'
import React, { useEffect } from 'react'
import GlassCard from "@/components/GlassCard";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import Spinner from './Spinner';

const HomePage = () => {
    const { authUser, loading } = useAuthContext()
    const router = useRouter()
    useEffect(() => {
        console.log(authUser, loading)
        if (authUser === null && !loading) {
            router.push('/login')
        }
    }, [authUser, loading])
    return (
        <>
            {loading ? <Spinner /> : <div className="mt-10 space-y-6 px-5 flex flex-grow w-full items-center justify-center flex-col dark:text-white">

                <GlassCard className='md:w-4xl'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='border-b border-[pink] dark:border-[#44145B]'>Hi! I am {authUser?.name}</h1>
                        <p>React JS Developer skilled in building robust web and mobile
                            applications using  React.js and Next.js. Proficient in creating professional mobile
                            solutions with a strong focus on user experience. Passionate about delivering user-centric experiences through
                            technology and dedicated to crafting high-quality applications!.</p>
                    </div>
                </GlassCard>
            </div>}
        </>
    )
}

export default HomePage