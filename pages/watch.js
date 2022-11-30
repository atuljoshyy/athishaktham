import Head from 'next/head'
import Image from 'next/image'
import VideoCard from '../components/VideoCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/playlists'

export async function getStaticProps({ params }) {
    const playlistId = 'PLKLPWIpGjI0OI7w6KXpor4TAni5B2tL6a'
    const API_KEY = process.env.YOUTUBE_API_KEY
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}&maxResults=50`

    const response = await fetch(REQUEST_URL)
    const results = await response.json()

    return {
        props: {
            results: results.items,
        },
        revalidate: 10
    }
}
export default function Home({ results }) {
    const [currentVideo, setCurrentVideo] = useState(results[0])

    useEffect(() => {
        AOS.init();
    })
    console.log(results)
    return (

        <div className="py-12 bg-[#F3F3F3]">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">


                <div class="lg:w-3/4 xl:w-2/4 lg:mx-auto mt-">
                    {results.map((video) => (
                        <VideoCard
                            onClick={() => setCurrentVideo(video)}
                            key={video.id}
                            id={video.id}
                            title={video.snippet.title}
                            date={video.snippet.publishedAt}
                            thumbnail={video.snippet.thumbnails.maxres}
                            description={video.snippet.description}
                            videoId={video.snippet.resourceId.videoId}
                            url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}
