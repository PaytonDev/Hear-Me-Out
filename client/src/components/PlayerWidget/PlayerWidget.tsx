import { Grid} from "@material-ui/core";
import { NavigateBefore, NavigateNext, PauseCircleOutline } from "@material-ui/icons";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutlineOutlined";
import "./PlayerWidget.css"

type PlayerWidgetProps = {
    currentSong: any
    handlePlaySong: any
    handlePauseSong: any
    token: string | undefined
}


const PlayerWidget = (props: PlayerWidgetProps) => {

    return (
        <Grid
            container 
            spacing={2} 
            className="widget-container" 
            alignItems="center" 
            style={props.currentSong ? {display: "flex"} : {display: "none"}}
        >
            <Grid item xs={1}>
                <NavigateBefore style={{ fontSize: 36 }}/>
            </Grid>
            <Grid item xs={1}>
                {props.currentSong?.isPlaying ?
                    <div onClick={() => props.handlePauseSong(props.currentSong)} >
                        <PauseCircleOutline style={{ fontSize: 40 }} /> 
                    </div> :
                    <div onClick={props.handlePlaySong(props.currentSong)} >
                        <PlayCircleOutline style={{ fontSize: 40 }}/> 
                    </div> 
                }
            </Grid>
            <Grid item xs={1}>
                <NavigateNext style = {{ fontSize: 36}} />
            </Grid>
        </Grid>
    )
}

export default PlayerWidget