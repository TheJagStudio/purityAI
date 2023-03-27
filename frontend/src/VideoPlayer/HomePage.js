import React from 'react'

const HomePage = () => {

  //  Handle Menu
  const handleMenu = () => {
    const menu = document.querySelector('#mobile-menu')
    menu.classList.toggle('w-full')
    menu.classList.toggle('w-0')
    menu.classList.toggle('opacity-0')
    menu.classList.toggle('opacity-100')
  }

  return (
    <>
        {/* Header */}
        <header className='bg-[var(--primary-color-blue)] flex items-center justify-center fixed top-0 h-20 w-full z-50'>
            <div className='group py-4 px-5 flex items-center justify-between w-full max-w-[1440px]'>            
                {/* Logo */}
                <div>
                    <a className='cursor-pointer flex items-center justify-center gap-3'>
                        <img src='/images/logo.png' alt='Logo' className='w-[50px] rounded-xl' />
                        <p className='text-[var(--primary-color-orange)] uppercase pt-1 sm:font-bold font-Alkatra text-2xl'>PurityAI</p>
                    </a>
                </div>

                {/* Laptop -- Tablet Menu */}
                <ul className='md:flex hidden items-center justify-center gap-8 pr-5'>
                    <li className='relative group/laptopmenu cursor-pointer'>
                        <a className='text-lg text-white group-hover/laptopmenu:text-[var(--primary-color-orange)] transition-all duration-200'>Home</a>
                        <span className='absolute -bottom-1 left-0 w-0 group-hover/laptopmenu:w-full h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-200'></span>
                    </li>
                    <li className='relative group/laptopmenu cursor-pointer'>
                        <a className='text-lg text-white group-hover/laptopmenu:text-[var(--primary-color-orange)] transition-all duration-200'>About Us</a>
                        <span className='absolute -bottom-1 left-0 w-0 group-hover/laptopmenu:w-full h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-200'></span>
                    </li>
                    <li className='relative group/laptopmenu cursor-pointer'>
                        <a className='text-lg text-white group-hover/laptopmenu:text-[var(--primary-color-orange)] transition-all duration-200'>Blog</a>
                        <span className='absolute -bottom-1 left-0 w-0 group-hover/laptopmenu:w-full h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-200'></span>
                    </li>
                    <li className='relative group/laptopmenu cursor-pointer'>
                        <a className='text-lg text-white group-hover/laptopmenu:text-[var(--primary-color-orange)] transition-all duration-200'>Contact</a>
                        <span className='absolute -bottom-1 left-0 w-0 group-hover/laptopmenu:w-full h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-200'></span>
                    </li>
                    <li className='relative group/laptopmenu cursor-pointer'>
                        <a className='text-lg text-white group-hover/laptopmenu:text-[var(--primary-color-orange)] transition-all duration-200'>Login</a>
                        <span className='absolute -bottom-1 left-0 w-0 group-hover/laptopmenu:w-full h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-200'></span>
                    </li>
                </ul>

                {/* Open Menu Button for Mobile */}
                <button className='md:hidden block' onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill='rgb(255,93,0)' className="bi bi-list text-[var(-primary-color-orange)]" viewBox="0 0 16 16">
                        <path fillRule="rgb(255,93,0)" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div id='mobile-menu' className='h-screen md:hidden block transition-all duration-300 w-0 opacity-0 overflow-hidden absolute top-0 left-0 bg-[var(--primary-color-blue)] z-50'>
                    {/* Close Button */}
                    <button className='absolute top-7 right-5 text-white hover:text-[var(--primary-color-orange)]' onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                    {/* Menu List */}
                    <ul className='flex flex-col gap-3 items-start justify-center w-full h-full px-7 py-5'>
                        <li className='pb-2 relative group/2'>
                            <a className='text-xl text-gray-300 group-hover/2:text-[var(--primary-color-orange)] uppercase transition-all duration-200'>Home</a>
                            <span className='absolute left-0 bottom-0 group-hover/2:w-full w-0 h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-300 rounded-xl'></span>
                        </li>
                        <li className='pb-2 relative group/2'>
                            <a className='text-xl text-gray-300 group-hover/2:text-[var(--primary-color-orange)] uppercase transition-all duration-200'>About Us</a>
                            <span className='absolute left-0 bottom-0 group-hover/2:w-full w-0 h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-300 rounded-xl'></span>
                        </li>
                        <li className='pb-2 relative group/2'>
                            <a className='text-xl text-gray-300 group-hover/2:text-[var(--primary-color-orange)] uppercase transition-all duration-200'>Blog</a>
                            <span className='absolute left-0 bottom-0 group-hover/2:w-full w-0 h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-300 rounded-xl'></span>
                        </li>
                        <li className='pb-2 relative group/2'>
                            <a className='text-xl text-gray-300 group-hover/2:text-[var(--primary-color-orange)] uppercase transition-all duration-200'>Case Studies</a>
                            <span className='absolute left-0 bottom-0 group-hover/2:w-full w-0 h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-300 rounded-xl'></span>
                        </li>
                        <li className='pb-2 relative group/2'>
                            <a className='text-xl text-gray-300 group-hover/2:text-[var(--primary-color-orange)] uppercase transition-all duration-200'>Contact</a>
                            <span className='absolute left-0 bottom-0 group-hover/2:w-full w-0 h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-300 rounded-xl'></span>
                        </li>
                        <li className='pb-2 relative group/2'>
                            <a className='text-xl text-gray-300 group-hover/2:text-[var(--primary-color-orange)] uppercase transition-all duration-200'>Login</a>
                            <span className='absolute left-0 bottom-0 group-hover/2:w-full w-0 h-[1.5px] bg-[var(--primary-color-orange)] transition-all duration-300 rounded-xl'></span>
                        </li>
                        <li className='mt-2 w-full flex justify-center relative group/2'>
                            <a className='text-xl  group-hover/2:text-[var(--primary-color-orange)]  '>
                                <button className='text-gray-300 transition-all duration-200 bg-[var(--primary-color-orange)] px-3 py-1.5 rounded-md'>
                                    Get Demo
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        {/* Special Links for Moderation */}
        <section className='fixed top-20 md:top-[50%] w-full md:w-auto h-12 md:h-auto bg-[var(--primary-color-blue)] z-40 pb-1 md:py-5 flex items-center justify-center md:rounded-r-lg'>
            <ul className='flex flex-row md:flex-col items-center md:items-start justify-around w-full md:w-auto gap-0 md:gap-4'>
                <li className='px-4 cursor-pointer group/mod bg-[var(--primary-color-blue)]'>
                    <a className='flex items-center justify-center gap-2 text-gray-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(209 213 219)" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                            <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                        </svg>
                        <p className='text-[14px] md:z-[-1] w-auto md:group-hover/mod:px-2 md:group-hover/mod:rounded-r md:group-hover/mod:py-2 md:font-semibold overflow-hidden md:absolute bg-[var(--primary-color-blue)] md:-translate-x-2 md:group-hover/mod:translate-x-14 transition-all duration-300'>Profanity</p>
                    </a>
                </li>
                <li className='px-4 cursor-pointer group/mod bg-[var(--primary-color-blue)]'>
                    <a className='flex items-center justify-center gap-2 text-gray-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(209 213 219)" className="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                        <p className='text-[14px] md:z-[-1] w-auto md:group-hover/mod:px-2 md:group-hover/mod:rounded-r md:group-hover/mod:py-2 md:font-semibold overflow-hidden md:absolute bg-[var(--primary-color-blue)] md:translate-x-0 md:group-hover/mod:translate-x-12 transition-all duration-300'>Photo</p>
                    </a>
                </li>
                <li className='px-4 cursor-pointer group/mod bg-[var(--primary-color-blue)]'>
                    <a className='flex items-center justify-center gap-2 text-gray-300 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(209 213 219)" className="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                        </svg>
                        <p className='text-[14px] md:z-[-1] w-auto md:group-hover/mod:px-2 md:group-hover/mod:rounded-r md:group-hover/mod:py-2 md:font-semibold overflow-hidden md:absolute bg-[var(--primary-color-blue)] md:translate-x-0 md:group-hover/mod:translate-x-12 transition-all duration-300'>Video</p>
                    </a>
                </li>
            </ul>
        </section>

        <section className='w-full h-screen'>

        </section>

        {/* Footer */}
        <footer className='bg-[var(--primary-color-blue)] w-full h-full mt-24'>
            <div className='py-4 px-5 flex flex-col items-center justify-center  gap-5 w-full max-w-[1440px]'>
                <div className='lg:flex md:grid grid-cols-2 flex flex-col lg:flex-row items-start justify-center xl:gap-28 md:gap-12 gap-5 w-full'>
                    <div className='flex items-center justify-start mt-3 mb-3 col-span-2'>
                        <a className='cursor-pointer flex flex-col md:flex-row items-start justify-center gap-2'>
                            <img src='/images/logo.png' alt='Logo' className='w-[40px] rounded-lg' />
                            <p className='text-[var(--primary-color-orange)] uppercase pt-1 sm:font-bold font-Alkatra text-2xl'>PurityAI</p>
                        </a>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:mt-3 mt-0 text-slate-400'>
                        <h3 className='text-[var(--primary-color-orange)] text-lg font-semibold mb-2'>Photo Moderation</h3>
                        <p>Features</p>
                        <p>Documentation</p>
                        <p>API Documentation</p>
                        <p>FAQs</p>
                        <p>Terms Of Service</p>
                        <p>Service Level Agreement</p>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:mt-3 mt-0 text-slate-400'>
                        <h3 className='text-[var(--primary-color-orange)] text-lg font-semibold mb-2'>Video Moderation</h3>
                        <p>Documentation</p>
                        <p>API Documentation</p>
                        <p>FAQs</p>
                        <p>Terms Of Service</p>
                        <p>Service Level Agreement</p>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:mt-3 mt-0 text-slate-400'>
                        <h3 className='text-[var(--primary-color-orange)] text-lg font-semibold mb-2'>Profanity Filter</h3>
                        <p>CMS Integrations</p>
                        <p>Third Party Extensions</p>
                        <p>API Documentation</p>
                        <p>FAQs</p>
                        <p>Terms Of Service</p>
                        <p>Service Level Agreement</p>
                    </div>
                    <div className='flex flex-col items-start justify-start lg:mt-3 mt-0 text-slate-400'>
                        <h3 className='text-[var(--primary-color-orange)] text-lg font-semibold mb-2'>Company</h3>
                        <p>Blogs</p>
                        <p>API Status</p>
                        <p>Contact</p>
                        <p>Cookie Policy</p>
                        <p>GDPR</p>
                        <p>CCPA</p>
                    </div>
                </div>
                <h3 className='text-center text-slate-400 text-md relative pt-4 pb-2 w-full before:absolute before:top-0 before:left-0 before:content-[""] before:w-full before:h-[1px] before:bg-slate-400'>Copyrights &copy; 2023 PurityAI, LLC. All rights reserved</h3>
            </div>
        </footer>
    </>
  )
}

export default HomePage