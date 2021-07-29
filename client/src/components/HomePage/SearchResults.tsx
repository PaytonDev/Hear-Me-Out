import { Box, Grid, Fade } from "@material-ui/core";
import { Person, Album, MusicNote } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { getArtist, getSong } from "../../controller/API"
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
    pauseButtonView: boolean
    playButtonView: boolean
    nowPlaying: Song | undefined
    setNowPlaying: React.Dispatch<React.SetStateAction<Song | undefined>>
}

export default function SearchResults(props: SearchResultsProps) {
    const [currentAlbum, setCurrentAlbum] = useState<any>()
    const [currentArtist, setCurrentArtist] = useState<any>()
    const [albumVisible, setAlbumVisible] = useState(false)
    const [artistVisible, setArtistVisible] = useState(false)


    useEffect(() => {
        if (!currentAlbum) return
        async function getArtistFromAlbum () {
            let artist =  await getArtist(currentAlbum.artists[0].id, props.token)
            setCurrentArtist(artist.data)
        }
        getArtistFromAlbum()
       
    }, [props.token, currentAlbum])

    const playSong = async (song: string) => {
        let selectedSong = await getSong(song, props.token)
        let songToPlay = {
            song: new Audio(selectedSong.data.preview_url),
            isPlaying : false
        }
        if (props.currentSong) {
            props.currentSong.song.pause()
        }
        console.log(songToPlay)
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
            <div className="clickable" onClick={() => {makeArtistVisible(); setCurrentArtist(artist); console.log(artist)}}>{artist.name}</div>
        </li>
    )
    const listAlbums = props.albums.map((album: any, idx: number) => 
        <li className="searchResults-link" key={idx}>
            <Box className="searchResults-icon">
                <Album fontSize="small" />
            </Box>
            <div className="clickable" onClick={() => {makeAlbumVisible(); setCurrentAlbum(album);}}>{album.name}</div>
        </li>
    )
    const listSongs = props.songs.map((song, idx) => 
        <li className="searchResults-link" key={idx}>
            <Box className="searchResults-icon">
                <MusicNote fontSize="small" />
            </Box>
            <div className={"clickable"} onClick={() =>{playSong(song.id); props.setNowPlaying(song)}}>{song.name}</div>
        </li>
    )


    return (
        <Box>
            <Fade in={props.query ? true : false} timeout={1000}>
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
            </Fade>
            <Box style={albumVisible ? {display : "block"} : {display : "none"}}>
                <AlbumSection
                    currentAlbum={currentAlbum}
                    currentArtist={currentArtist}
                    token={props.token}
                    handleShowArtist={makeArtistVisible}
                    handleCurrentArtist={setCurrentArtist}
                    playSong={playSong}
                    pauseButtonView={props.pauseButtonView}
                    playButtonView={props.playButtonView}
                    nowPlaying={props.nowPlaying}
                    setNowPlaying={props.setNowPlaying}
                />
            </Box>
            <Box style={artistVisible ? {display : "block"} : {display : "none"}}>
                <ArtistSection
                    currentArtist={currentArtist}
                    currentAlbum={currentAlbum}
                    handleShowAlbum={makeAlbumVisible}
                    handleCurrentAlbum={setCurrentAlbum}
                    token={props.token}
                    playSong={playSong}
                    pauseButtonView={props.pauseButtonView}
                    playButtonView={props.playButtonView}
                    nowPlaying={props.nowPlaying}
                    setNowPlaying={props.setNowPlaying}
                />
            </Box>
      
    </Box>
    )
}