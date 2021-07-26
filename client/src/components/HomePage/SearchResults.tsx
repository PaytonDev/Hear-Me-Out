import { Box, Link } from "@material-ui/core";
import { useState } from "react";
import { getSong } from "../../API"
import AlbumSection from "./AlbumSection/AlbumSection";
import ArtistSection from "./ArtistSection/ArtistSection";



type SearchResultsProps = {
    artists: Artist[]
    albums: Album []
    songs: Song []
    currentSong: any
    query: string
}

export default function SearchResults(props: SearchResultsProps) {
    const [currentSong, setCurrentSong] = useState(props.currentSong)
    const [currentAlbum, setCurrentAlbum] = useState()
    const [currentArtist, setCurrentArtist] = useState()

    const [albumVisible, setAlbumVisible] = useState(false)
    const [artistVisible, setArtistVisible] = useState(false)

    const playSong = async (song: string) => {
        let selectedSong = await getSong(song)
        let songToPlay = new Audio(selectedSong.data.preview_url)
        if (currentSong) {
            currentSong.pause()
        }
        setCurrentSong(songToPlay)
        songToPlay.play()
    }

    const makeAlbumVisible = () => {
        setAlbumVisible(true)
        setArtistVisible(false)
    }

    const makeArtistVisible = () => {
        setAlbumVisible(false)
        setArtistVisible(true)
    }




    const listArtists = props.artists.map((artist: any, idx: number) => 
    //  TODO: make onClick one function!!!!
        <li key={idx} ><Link onClick={() => {makeArtistVisible(); setCurrentArtist(artist)}}>{artist.name}</Link></li>
    )
    const listAlbums = props.albums.map((album: any, idx: number) => 
        <li key={idx}><Link onClick={() => {makeAlbumVisible(); setCurrentAlbum(album)}}>{album.name}</Link></li>
    )
    const listSongs = props.songs.map((song, idx) => 
        <li key={idx}><Link onClick={() => playSong(song.id)}>{song.name}</Link></li>
    )


    return (
        <Box>
            <Box style={ props.query ? {display : "block"} : {display : "none"}}>
                <ul>{listArtists}</ul>
                <ul>{listAlbums}</ul>
                <ul>{listSongs}</ul>
            </Box>
            <Box style={albumVisible ? {display : "block"} : {display : "none"}}>
                <AlbumSection currentAlbum={currentAlbum}/>
            </Box>
            <Box style={artistVisible ? {display : "block"} : {display : "none"}}>
                <ArtistSection currentArtist={currentArtist}/>
            </Box>
        </Box>
    )
}