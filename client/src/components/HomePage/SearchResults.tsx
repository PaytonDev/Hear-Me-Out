import { Box, Link, Grid } from "@material-ui/core";
import { Person, Album, MusicNote } from "@material-ui/icons";
import { useState } from "react";
import { getSong } from "../../API"
import AlbumSection from "./AlbumSection/AlbumSection";
import ArtistSection from "./ArtistSection/ArtistSection";
import "./SearchResults.css"



type SearchResultsProps = {
    artists: Artist[]
    albums: Album []
    songs: Song []
    currentSong: any
    handlePlaySong: any
    query: string
    token: string | undefined
}

export default function SearchResults(props: SearchResultsProps) {
    const [currentAlbum, setCurrentAlbum] = useState()
    const [currentArtist, setCurrentArtist] = useState()
    const [albumVisible, setAlbumVisible] = useState(false)
    const [artistVisible, setArtistVisible] = useState(false)
    

    const playSong = async (song: string) => {
        let selectedSong = await getSong(song, props.token)
        let songToPlay = {
            song: new Audio(selectedSong.data.preview_url),
            isPlaying : false
        }
        if (props.currentSong) {
            props.currentSong.song.pause()
        }
        props.handlePlaySong(songToPlay)
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
        <li className="searchResults-link" key={idx} >
            <Box className="searchResults-icon">
                <Person fontSize="small" />
            </Box>
            <Link onClick={() => {makeArtistVisible(); setCurrentArtist(artist)}}>{artist.name}</Link>
        </li>
    )
    const listAlbums = props.albums.map((album: any, idx: number) => 
        <li className="searchResults-link" key={idx}>
            <Box className="searchResults-icon">
                <Album fontSize="small" />
            </Box>
            <Link onClick={() => {makeAlbumVisible(); setCurrentAlbum(album)}}>{album.name}</Link>
        </li>
    )
    const listSongs = props.songs.map((song, idx) => 
        <li className="searchResults-link" key={idx}>
            <Box className="searchResults-icon">
                <MusicNote fontSize="small" />
            </Box>
            <Link onClick={() => playSong(song.id)}>{song.name}</Link>
        </li>
    )


    return (
        <Box>
            <Box className="searchResults-box">
                <Grid container justifyContent="space-between" className="searchResults-grid-container" style={ props.query ? {display : "flex"} : {display : "none"}}>
                    <Grid item xs={4}>
                        <Box className="searchResults-links-box">
                            <small>Artist</small>
                            <ul>{listArtists}</ul>
                        </Box>
                    </Grid>
                    <Grid  item xs={4} >
                        <Box className="searchResults-links-box">
                            <small>Albums</small>
                            <ul>{listAlbums}</ul>
                        </Box>
                    </Grid>
                    <Grid  item xs={4}>
                        <Box className="searchResults-links-box">
                            <small>Songs</small>
                            <ul>{listSongs}</ul>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box style={albumVisible ? {display : "block"} : {display : "none"}}>
                <AlbumSection currentAlbum={currentAlbum} currentArtist={currentArtist} token={props.token} handleShowArtist={makeArtistVisible} handleCurrentArtist={setCurrentArtist} playSong={playSong}/>
            </Box>
            <Box style={artistVisible ? {display : "block"} : {display : "none"}}>
                <ArtistSection currentArtist={currentArtist} currentAlbum={currentAlbum} handleShowAlbum={makeAlbumVisible} handleCurrentAlbum={setCurrentAlbum} token={props.token} playSong={playSong}/>
            </Box>
        </Box>
    )
}