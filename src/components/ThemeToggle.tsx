'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react';
import React from 'react'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 relative transition-colors"
        >
            <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out
                            ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
            >
                <div className="absolute left-1 text-yellow-400"><Sun size={14} /></div>
                <div className="absolute right-1 text-gray-200"><Moon size={14} /></div>
            </div>

        </button>
    )
}

export default ThemeToggle