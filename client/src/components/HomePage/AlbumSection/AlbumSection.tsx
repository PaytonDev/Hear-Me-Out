import { Box, Grid } from "@material-ui/core";
import { useState, useEffect, SetStateAction } from "react";
import { getAlbumSongs } from "../../../API";
import { muiGridContainer, cssStyles } from "./styles"

type AlbumSectionProps = {
  currentAlbum: any
  currentArtist: any
  token: string | undefined
  handleCurrentArtist: React.Dispatch<SetStateAction<any>>
  handleShowArtist:  () => void
  playSong: any
  pauseButtonView: boolean
  playButtonView: boolean
  nowPlaying: Song | undefined
  setNowPlaying: React.Dispatch<React.SetStateAction<Song | undefined>>
}


const AlbumSection = (props: AlbumSectionProps) => {
    const [albumSongs, setAlbumSongs] = useState<any>([])
    const gridContainerClasses = muiGridContainer()

   useEffect(() => {
     async function getCurrentAlbumSongs() {
       if (!props.currentAlbum) return
       let res = await getAlbumSongs(props.currentAlbum.id, props.token)
       setAlbumSongs(res.data.items)
     }

     getCurrentAlbumSongs()

   },[props.currentAlbum, props.token])

   const goToArtist = (artist: any) => {
       if (props.currentAlbum) {
           props.handleCurrentArtist(artist)
           props.handleShowArtist()
       }
   }


   const convertSongTime = (milliseconds: number) => {
       let min = Math.floor( milliseconds / 60000);
       let sec = ((milliseconds % 60000) / 1000);
       return (
           sec === 60 ? ( min + 1 ).toString() + ":00" : min + ":" + (sec < 10 ? "0" : "") + sec.toFixed(0)
       )
   }

    return (
        <Grid container alignItems="center" justifyContent="center" className={gridContainerClasses.root}>
            <Grid item xs={4}>
                <Box>
                    <img
                        style={cssStyles.albumImageStyles}
                        src={props.currentAlbum ? props.currentAlbum.images[0].url : ""}
                        alt={`${props.currentAlbum ? props.currentAlbum.name : ''} album cover`}
                    />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box>
                    <p style={cssStyles.albumTitleStyles}>{props.currentAlbum ? props.currentAlbum.name : "Album Name"}</p>
                    <p className="clickable" onClick={() => goToArtist(props.currentArtist)}  style={cssStyles.albumTitleArtistStyles}>{props.currentAlbum ? `by ${props.currentAlbum.artists[0].name}` : "Artist Name"}</p>
                </Box>
            </Grid>
            <Grid item xs={10} className="albumSection-songlist-grid">
                <Box >
                    <ul style={cssStyles.songUlStyles}>
                        <li >
                            <Grid container item alignItems="flex-start">
                                <small style={cssStyles.songNameHeaderStyles }>Song</small>
                                <small style={cssStyles.songInfoHeaderStyles}>Artist</small>
                                <small style={cssStyles.songInfoHeaderStyles}>Time</small>
                            </ Grid>
                        </li>
                        {props.currentAlbum ?
                            albumSongs.map((song: any, idx: number) => (
                            <li style={cssStyles.songLiStyles} key={idx}>
                                    <Grid container item alignItems="center">
                                        <img
                                            style={cssStyles.songImageStyles}
                                            src={props.currentAlbum ? props.currentAlbum.images[2].url : ""}
                                            alt={`${props.currentAlbum ? props.currentAlbum.name : ''} album cover`}
                                        />
                                        <div className="clickable" onClick={() => {props.playSong(song.id); props.setNowPlaying(song)}} style={cssStyles.songNameStyles}>{song.name}</div>
                                        <small className="clickable" onClick={() => goToArtist(props.currentArtist)} style={cssStyles.songInfoStyles}>{song.artists[0].name}</small>
                                        <small style={cssStyles.songInfoStyles}>{convertSongTime(song.duration_ms)}</small>
                                    </Grid>
                                </li>
                            )): "Album Songs"}
                    </ul>
                </Box>
            </Grid>
        </Grid>
    )
}

  export default AlbumSection