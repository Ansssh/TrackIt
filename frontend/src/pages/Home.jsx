import React, { useState, useContext } from 'react'

import logo from '../assets/logo.svg'
// import { ThemeContext } from '../Context.jsx'

import Sun from '../components/LogosSvg/Sun.jsx'
import Moon from '../components/LogosSvg/Moon.jsx'
import CheckMark from '../components/LogosSvg/CheckMark.jsx'
import IBM from '../components/LogosSvg/IBM.jsx'
import Google from '../components/LogosSvg/Google.jsx'
import Rolex from '../components/LogosSvg/Rolex.jsx'
import Goldman from '../components/LogosSvg/Goldman.jsx'

const Home = () => {
    // const { darkTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='w-screen min-h-screen'>
            <header className='flex h-15 justify-between p-2'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="TrackIt logo" className='h-6 sm:h-8 md:h-10 select-none' />
                    <p className='font-extrabold text-2xl indie-flower-regular select-none'>Track It!</p>
                </div>
                <div className='flex items-center gap-2' >
                    {/* <div className="cursor-pointer" onClick={toggleTheme}>
                        {darkTheme ? <Moon /> : <Sun />}
                    </div> */}
                    <button className='rounded-lg px-2 py-1 indie-flower-regular font-extrabold text-lg cursor-pointer select-none'>
                        Login
                    </button>
                    <button className='bg-black text-white rounded-lg px-2 py-1 indie-flower-regular font-extrabold text-lg cursor-pointer select-none'>
                        Sign Up
                    </button>
                </div>
            </header>
            <main>
                <div className='flex text-center justify-center font-mono mt-3 bg-gray-200 font-extrabold text-sm md:text-base'>JOB TRACKER</div>
                <p className='text-4xl sm:text-5xl md:text-6xl text-center justify-between mt-6 font-extrabold px-8 sm:px-6 md:px-4'><span className='text-blue-full00'>Track, Organize and Optimize</span> Your Job Search</p>
                <p className='text-base sm:text-lg md:text-xl text-center justify-between mt-6 px-6 sm:px-4 md:px-2 font-thin '>Forget spreadsheets and endless bookmarks. Save, apply, track, and revisit job applications - all from 1 streamlined dashboard.</p>
                <div className='flex flex-col items-center justify-center my-5 gap-2'>
                    <div className='flex items-center gap-2 justify-start'>
                        <CheckMark />
                        <p>Centralized Job Tracking</p>
                    </div>
                    <div className='flex items-center gap-2 justify-start'>
                        <CheckMark />
                        <p>Job Insights</p>
                    </div>
                    <div className='flex items-center gap-2 justify-start'>
                        <CheckMark />
                        <p>Track Key Contacts</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-black self-center text-white rounded-lg px-4 py-2 indie-flower-regular font-extrabold text-lg cursor-pointer select-none mt-4'>
                        Start Tracking
                    </button>
                </div>
                <div>
                    <h2 className='text-base sm:text-lg md:text-xl text-center justify-between mt-6 px-6 sm:px-4 md:px-2 font-thin '>Our Users have landed job at these Top Companies</h2>

                    <div className="flex overflow-hidden p-2 space-x-16 bg-white mt-4">
                        <div className="flex space-x-16 animate-scroll shrink-0 justify-around min-w-full">
                            <IBM className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Google className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Rolex className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Goldman className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <IBM className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Google className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Rolex className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Goldman className="h-8 sm:h-10 md:h-12 lg:h-14" />
                        </div>
                        <div className="flex space-x-16 animate-scroll shrink-0 justify-around min-w-full" aria-hidden="true">
                            <IBM className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Google className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Rolex className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Goldman className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <IBM className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Google className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Rolex className="h-8 sm:h-10 md:h-12 lg:h-14" />
                            <Goldman className="h-8 sm:h-10 md:h-12 lg:h-14" />
                        </div>
                    </div>
                </div>
            </main>
            {/* <footer className='w-screen flex justify-center relative bottom-0'>
                <p className='text-sm font-thin'>© 2026 Ansh<sup>TM</sup> Track It! All rights reserved.</p>
            </footer> */}

        </div>
    )
}

export default Home