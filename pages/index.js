import Head from 'next/head'
import Image from 'next/image'
import VideoCard from '../components/VideoCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import Player from '../components/Player';
import Header from '../components/Header';
import useDarkMode from '../hooks/useDarkmode';
import Credits from '../components/Credits';

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
  // console.log(results)
  console.log(currentVideo)
  return (
    <>

      <Header />
      <div className="py-12 bg-[#ffffff] dark:bg-[#0A090E]">
        <div className="flex mt-14  text-gray-600">
          <div className='w-full mt-14 fixed z-5 top-0 '>
            <Player
              video={currentVideo.snippet.resourceId.videoId}
              title={currentVideo.snippet.title}
              description={currentVideo.snippet.description}
              date={currentVideo.snippet.publishedAt} />
          </div>
          <div class="w-1/4 ml-[1190px] mt-2 ">
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
      <Credits />
    </>

  )
}
