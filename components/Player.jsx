import React from 'react'

const Player = ({ video, title, description, date }) => {
    return (
        <div className='max-w-6xl px-5 py-4   font-poppins'>
            <div className='flex  mt-10'>
                <iframe className='aspect-video w-full rounded-3xl shadow-xl select-none' src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen" allowFullScreen></iframe>
            </div>
            <div className='mt-3 px-2'>
                <h1 className='text-2xl font-semibold text-black dark:text-white'>{title}</h1>
                <p className='text-black dark:text-gray-500 text-sm mt-2'>{date.slice(0, -10)}</p>
            </div>
        </div>
    )
}

export default Player