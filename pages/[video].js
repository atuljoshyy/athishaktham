import React, { useState, useEffect } from 'react'
import VideoCard from '../components/VideoCard'
import results from './index'
import { useRouter } from 'next/router'

const watch = () => {
    const router = useRouter()
    const [currentVideo, setCurrentVideo] = useState()
    const video = router.query.video
    console.log(video)
    return (
        <div className='max-w-7xl px-5 py-4 md:px-20 md:py-4 font-poppins mx-auto'>
            <div className='flex justify-center items-center mt-10'>
                <iframe className='aspect-video w-full rounded-3xl' src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default watch