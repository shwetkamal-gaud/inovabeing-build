'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'


const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tasks', href: '/todo' },
]
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { authUser, setAuthUser } = useAuthContext()
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await fetch(`/api/auth/logout`, {
                method: 'POST'
            });

            localStorage.removeItem('user')
            setAuthUser(null);
            router.push('/login');
        } catch (err) {
            console.error("Logout failed", err);
        }
    }
    return (
        <nav className="sticky top-0 z-50 w-full  shadow-xl  bg-[#ffffff1a] dark:bg-[#00000026] backdrop-blur-[32px] ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    <h1 className='dark:text-white text-black text-3xl'>{authUser?.name ?? "User Web"}</h1>
                </div>
                <div className="hidden md:flex gap-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-100 hover:text-[#eeb2b6] transition"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className=" flex items-center text-white  md:gap-8 gap-2">
                    {authUser !== null ? (
                        <div className='flex gap-2 items-center'>
                            <button onClick={handleLogout} className="btn bg-[#eeb2b6] dark:bg-[#310320] rounded-md px-3 h-9 self-center items-center hidden md:flex">Logout</button>
                        </div>
                    ) : (
                        <Link href="/login" className="btn bg-[#eeb2b6] dark:bg-[#310320] rounded-md px-3 h-9 self-center items-center hidden md:flex">Login</Link>
                    )}

                    <ThemeToggle />
                    <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X className='dark:text-white text-black' size={24} /> : <Menu className='text-[#eeb2b6] dark:text-[#6a3a58]' size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden border-[2px] border-[#aaaaaa1a] dark:border-[#76757526] bg-[#ffffff1a] dark:bg-[#00000026] rounded-xl p-6 space-y-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-gray-700 dark:text-gray-100 hover:text-[#eeb2b6]"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="md:hidden flex items-center text-white md:gap-8 gap-2">
                            {authUser ? (
                                <button onClick={handleLogout} className="btn bg-[#eeb2b6] dark:bg-[#310320] rounded-md px-3 h-9 self-center items-center flex">Logout</button>
                            ) : (
                                <Link href="/login" className="btn bg-[#eeb2b6] dark:bg-[#310320] rounded-md px-3 h-9 self-center items-center flex">Login</Link>
                            )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar