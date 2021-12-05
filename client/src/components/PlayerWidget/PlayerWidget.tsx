import { Grid, Button } from "@material-ui/core";
import PauseCircleOutline from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutlineOutlined";
import "./PlayerWidget.css"

type PlayerWidgetProps = {
    currentSong: any
    handlePlaySong: any
    handlePauseSong: any
    token: string | undefined
    pauseButtonView: boolean
    playButtonView: boolean
    nowPlaying: Song | undefined
    setNowPlaying: React.Dispatch<React.SetStateAction<Song | undefined>>
    openRecentlyPlayed: boolean
    setOpenRecentlyPlayed: React.Dispatch<React.SetStateAction<boolean>>
}


const PlayerWidget = (props: PlayerWidgetProps) => {
    

    return (
        <Grid container className="widget-container" alignItems="center" style={props.currentSong ? {display: "flex"} : {display: "none"}}>
            <Grid container item xs={3} justifyContent="space-between" alignItems="center">

                    <Grid item>
                        <p>Now Playing</p>
                    </Grid>

                    <Grid item>
                        <PauseCircleOutline
                            onClick={() => props.handlePauseSong(props.currentSong)}
                            style={props.pauseButtonView ? { fontSize: 40 } : { display : "none"}}
                        /> 
                        <PlayCircleOutline 
                            onClick={() => props.handlePlaySong(props.currentSong)}
                            style={props.playButtonView ? { fontSize: 40 } : { display : "none"}}
                        /> 
                    </Grid> 

                    <Grid item>
                        <p>{props.nowPlaying ? props.nowPlaying.name : null}</p>
                    </Grid>
                    {/* <Grid item> 
                        <Button variant='contained' color="primary"  onClick={() => props.setOpenRecentlyPlayed(!props.openRecentlyPlayed)}>
                            Recently Played
                        </Button>
                    </Grid> */}
            </Grid>
        </Grid>
    )
}

export default PlayerWidget