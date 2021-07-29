import { Box, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getArtistAlbums, getArtistTopSongs } from "../../../API";
import  cssStyles from "./styles"
import { makeStyles } from "@material-ui/core/styles";


type ArtistSectionProps = {
    currentArtist: any
    currentAlbum: any
    handleShowAlbum: () => void
    handleCurrentAlbum: React.Dispatch<React.SetStateAction<undefined>>
    playSong: any
    token: string | undefined
}



const styles = makeStyles(() => ({
    containerHide: {
        marginTop: "2em",
        backgroundColor: "#1D1F22",
        borderRadius: 10,
        maxHeight: 675,
        padding: "2em",
        overflow: "hidden",
        marginBottom: 80,
    },
    containerShow: {
        marginTop: "2em",
        backgroundColor: "#1D1F22",
        borderRadius: 10,
        padding: "2em",
        marginBottom: 80,
    }
}))


const ArtistSection = (props: ArtistSectionProps) => {
    const [artistAlbums, setArtistAlbums] = useState<any>([])
    const [artistTopSongs, setArtistTopSongs] = useState<any>([])
    const [seeAllOpen, setSeeAllOpen] = useState(false)



    const classes = styles(seeAllOpen)

    useEffect(() => {
      async function getCurrentArtistMusic() {
        if (!props.currentArtist) return
        let resAlbums = await getArtistAlbums(props.currentArtist.id, props.token)
        let resSongs = await getArtistTopSongs(props.currentArtist.id, props.token)
        setArtistAlbums(resAlbums.data.items)
        setArtistTopSongs(resSongs.data.tracks)
      }
      getCurrentArtistMusic()
    },[props.currentArtist, props.token])
 
 
    const convertSongTime = (milliseconds: number) => {
        let min = Math.floor( milliseconds / 60000);
        let sec = ((milliseconds % 60000) / 1000);
        return (
            sec === 60 ? ( min + 1 ).toString() + ":00" : min + ":" + (sec < 10 ? "0" : "") + sec.toFixed(0)
        )
    }

    const seeAllToggle = () => {
        setSeeAllOpen(!seeAllOpen)
    }

    return (
        <Grid container spacing={2} className={seeAllOpen ? classes.containerShow : classes.containerHide} alignItems={"center"}>

            <Grid item xs={6} alignItems="center">
                <img
                    src={props.currentArtist ? props.currentArtist.images[0].url : "Artist Image"}
                    alt={`${props.currentArtist ? props.currentArtist.name : ''} avatar`}
                    style= {{maxHeight : 250, borderRadius: "50%"}}
                />
                    <p style={{fontSize: 54, marginTop: 10, marginBottom: 0}}>{props.currentArtist ? props.currentArtist.name : "Artist Name"}</p>
            </Grid>


            <Grid item container xs={6}>
                <Grid item xs={12}>
                    <header>Top Tracks</header>
                    <ul>
                    {props.currentArtist ?
                            artistTopSongs.slice(0, 5).map((song: any, idx: number) => (
                            <li style={cssStyles.songLiStyles} key={idx}>
                                    <Grid container item alignItems="center">
                                        <Grid container alignItems="center" item xs={6}>
                                        <img
                                            style={cssStyles.songImageStyles}
                                            src={props.currentArtist ? song.album.images[2].url : ""}
                                            alt={`${props.currentArtist ? song.album.name : ''} album cover`}
                                        />
                                        <div onClick={() => props.playSong(song.id)} style={cssStyles.songNameStyles}>{song.name}</div>
                                        </Grid>
                                        <Grid item xs={3} >
                                            <div>
                                                <small style={cssStyles.songInfoStyles}>{song.artists[0].name}</small>
                                            </div>
                                        </Grid>
                                        <Grid item container xs={3} justifyContent="center">
                                            <div>
                                                <small style={cssStyles.songInfoStyles}>{convertSongTime(song.duration_ms)}</small>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </li>
                            )): "Album Songs"}
                    </ul>
                </Grid>
            </Grid>
            <Grid container item  xs={12} spacing={4} justifyContent="center">
                <Grid container item xs={11} alignItems='center' justifyContent="space-between">
                    <p>Albums</p>
                    <p onClick={seeAllToggle}>See All</p>
                </Grid>
                {props.currentArtist ? artistAlbums.map((album: any, idx: number) => (
                    <Grid item sm={4} md={3} lg={2} key={idx} spacing={1}>
                        <Box onClick={() => {props.handleCurrentAlbum(album); props.handleShowAlbum()}}>
                            <img key={`${idx}-image`} src={album.images[1].url} alt={`${album.name} avatar`} style={{maxHeight : 150}}/>
                            <div key={`${idx}-album`} >{album.name}</div>
                        </Box>
                    </Grid>
                )): "Album Songs"}
            </Grid>
        </Grid>
    )
}

export default ArtistSection;