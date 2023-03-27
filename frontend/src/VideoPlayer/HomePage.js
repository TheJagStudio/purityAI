import React from 'react'

const HomePage = () => {

    return (
        <>
            {/* Special Links for Moderation */}
            <section className='fixed top-20 md:top-[50%] w-full md:w-auto h-12 md:h-auto bg-[var(--primary-color-blue)] z-40 pb-1 md:py-5 flex items-center justify-center md:rounded-r-lg'>
                <ul className='flex flex-row md:flex-col items-center md:items-start justify-around w-full md:w-auto gap-0 md:gap-4'>
                    <li className='px-4 cursor-pointer group/mod bg-[var(--primary-color-blue)]'>
                        <a className='flex items-center justify-center gap-2 text-gray-300 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(209 213 219)" className="bi bi-chat-right-quote" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                            </svg>
                            <p className='text-[14px] md:z-[-1] w-auto md:group-hover/mod:px-2 md:group-hover/mod:rounded-r md:group-hover/mod:py-2 md:font-semibold overflow-hidden md:absolute bg-[var(--primary-color-blue)] md:-translate-x-2 md:group-hover/mod:translate-x-14 transition-all duration-300'>Profanity</p>
                        </a>
                    </li>
                    <li className='px-4 cursor-pointer group/mod bg-[var(--primary-color-blue)]'>
                        <a className='flex items-center justify-center gap-2 text-gray-300 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(209 213 219)" className="bi bi-camera" viewBox="0 0 16 16">
                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                            <p className='text-[14px] md:z-[-1] w-auto md:group-hover/mod:px-2 md:group-hover/mod:rounded-r md:group-hover/mod:py-2 md:font-semibold overflow-hidden md:absolute bg-[var(--primary-color-blue)] md:translate-x-0 md:group-hover/mod:translate-x-12 transition-all duration-300'>Photo</p>
                        </a>
                    </li>
                    <li className='px-4 cursor-pointer group/mod bg-[var(--primary-color-blue)]'>
                        <a className='flex items-center justify-center gap-2 text-gray-300 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(209 213 219)" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                            </svg>
                            <p className='text-[14px] md:z-[-1] w-auto md:group-hover/mod:px-2 md:group-hover/mod:rounded-r md:group-hover/mod:py-2 md:font-semibold overflow-hidden md:absolute bg-[var(--primary-color-blue)] md:translate-x-0 md:group-hover/mod:translate-x-12 transition-all duration-300'>Video</p>
                        </a>
                    </li>
                </ul>
            </section>

            <section className='w-full h-screen'>

            </section>
        </>
    )
}

export default HomePage