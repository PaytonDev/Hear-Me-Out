import { Grid, Typography } from "@material-ui/core";
import PauseCircleOutline from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutlineOutlined";
import "./PlayerWidget.css";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { pauseSong, playSong } from "../../features/now-playing/now-playing-slice";

type PlayerWidgetProps = {
  openRecentlyPlayed: boolean;
  setOpenRecentlyPlayed: React.Dispatch<React.SetStateAction<boolean>>;
};

const PlayerWidget = (props: PlayerWidgetProps) => {
  const currentSong = useAppSelector((store) => store.musicPlayer);

  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      className="widget-container"
      alignItems="center"
      style={currentSong ? { display: "flex" } : { display: "none" }}
    >
      <Grid container item xs={12} justifyContent="center" alignContent="center">
        <Grid container item xs={6} justifyContent="space-evenly" alignContent="center">
          <Grid item xs={4}>
            <p>Now Playing</p>
          </Grid>

          <Grid item xs={1}>
            <PauseCircleOutline
              onClick={() => dispatch(pauseSong())}
              style={
                currentSong.isPlaying === true
                  ? { fontSize: 40, margin: "5px 0" }
                  : { display: "none" }
              }
            />
            <PlayCircleOutline
              onClick={() => dispatch(playSong(currentSong.currentSong))}
              style={
                currentSong.isPlaying === false
                  ? { fontSize: 40, margin: "5px 0" }
                  : { display: "none" }
              }
            />
          </Grid>

          <Grid item className="scroll-left" xs={4}>
            <Typography variant="body1" component="p">
              {currentSong.currentSong.song_details.name
                ? currentSong.currentSong.song_details.name
                : "Select a song to play"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlayerWidget;
