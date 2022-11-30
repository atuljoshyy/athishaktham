import React from 'react'
import Link from 'next/link'

const VideoCard = ({ id, title, date, thumbnail, description, url, videoId, onClick }) => {
    return (

        <div data-aos="fade-up" data-aos-easing="ease-in-out" >
            <div onClick={onClick} class="group relative hover:z-10 -mx-4 sm:-mx-8 px-4 py-2 rounded-2xl  dark:bg-transparent border border-transparent hover:shadow-gray-600/10 cursor-pointer dark:hover:bg-gray-800 shadow-2xl shadow-transparent sm:gap-8 sm:flex transition duration-300">

                <div class="  aspect-video  overflow-hidden transition-all duration-500 ">
                    <img
                        src={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="art cover"
                        loading="lazy"
                        width=''
                        height=''
                        class="  object-contain rounded-xl object-center w-40  transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div class="w-4/6">
                    <span class=" inline-block font-sm text-gray-400 dark:text-gray-500 sm:mt-0">{date.slice(0, -10)}</span>
                    <h3 class=" font-semibold text-gray-800 dark:text-white">
                        {title.slice(0, -38)}...
                    </h3>
                    {/* <div class="flex gap-4 mt-4">
                        <Link href={`/${videoId}`} class="px-4 py-2 rounded-full text-[#251E01] border border-gray-100 text-sm font-medium text-primary transition duration-300 bg-[#FCE400]" >
                            Watch video
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default VideoCard