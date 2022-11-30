import React from 'react'

import useDarkMode from '../hooks/useDarkmode';

const Header = () => {
    const [colorTheme, setTheme] = useDarkMode();
    console.log(colorTheme)
    return (
        <header aria-label="Page Header">
            <div class="mx-auto fixed z-10 inset-x-0 max-w-screen px-10 py-3  bg-[#ffffff] dark:bg-[#0A090E] dark:text-white ">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="text-center sm:text-left">
                        <h1 class="text-2xl font-bold sm:text-4xl">
                            Learn Stock Market A-Z For Free | marketfeed
                        </h1>

                        <p class="mt-1.5 text-sm text-gray-500 max-w-4xl">
                        Stock Market A-Z, a complete video series to learn everything about the stock market, from basics to fundamental & technical analysis to futures & options to advanced trading strategies, all for FREE, presented by Sharique Samsudheen.
                        </p>
                    </div>

                    {/* <div onClick={() => setTheme(!colorTheme)} class="mt-4 cursor-pointer px-4 py-2 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        dark
                    </div> */}
                    <div className='p-4'>
                        {colorTheme === "light" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setTheme("light")} class="icon icon-tabler icon-tabler-brightness-up cursor-pointer bg-[#1F2024] p-2 rounded-full" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="12" y1="5" x2="12" y2="3" />
                                <line x1="17" y1="7" x2="18.4" y2="5.6" />
                                <line x1="19" y1="12" x2="21" y2="12" />
                                <line x1="17" y1="17" x2="18.4" y2="18.4" />
                                <line x1="12" y1="19" x2="12" y2="21" />
                                <line x1="7" y1="17" x2="5.6" y2="18.4" />
                                <line x1="6" y1="12" x2="4" y2="12" />
                                <line x1="7" y1="7" x2="5.6" y2="5.6" />
                            </svg>


                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setTheme("dark")} class="icon icon-tabler icon-tabler-moon cursor-pointer bg-white rounded-full p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>

                        )}
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header