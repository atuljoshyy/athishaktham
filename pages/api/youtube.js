import fetch from 'axios'
import getConfig from 'next/config'
const key = process.env.YOUTUBE_API_KEY
const playlist = 'PLu8zOjAkv2yx487WLSyekN7n7B_dAurZE'
const maxResults = 50
const apiURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&type=video&order=date&maxResults=${maxResults}&playlistId=${playlist}&key=${key}`
module.exports = async (req, res) => {

    try {
        const result = await fetch(apiURL)
        res.status(200).json(result.data)

        // res.status(200).json(apiURL)
    } catch (err) {
        res.status(500).json('Whoops, something went wrong')
    }

}