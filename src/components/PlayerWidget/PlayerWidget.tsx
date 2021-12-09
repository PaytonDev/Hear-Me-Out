import { useState } from "react";
import { Grid, Button, Drawer, Box } from "@material-ui/core";
import PauseCircleOutline from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutlineOutlined";
import { styles } from "./styles";
import "./PlayerWidget.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { pauseSong, playSong } from "../../features/now-playing/now-playing-slice";

type PlayerWidgetProps = {
  openRecentlyPlayed: boolean;
  setOpenRecentlyPlayed: React.Dispatch<React.SetStateAction<boolean>>;
};

const PlayerWidget = (props: PlayerWidgetProps) => {
  const [showRecentlyPlayed, setShowRecentlyPlayed] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  const handleShowRecentlyPlayed = () => setShowRecentlyPlayed(true);
  const handleCloseRecentlyPlayed = () => setShowRecentlyPlayed(false);
  const handleShowQueue = () => setShowQueue(true);
  const handleCloseQueue = () => setShowQueue(false);

  const currentSong = useAppSelector((store) => store.musicPlayer);

  const dispatch = useAppDispatch();

  const classes = styles();

  return (
    <Grid
      container
      className="widget-container"
      alignItems="center"
      style={currentSong ? { display: "flex" } : { display: "none" }}
    >
      <Grid container item xs={12} justifyContent="space-between" alignContent="center">
        <Grid item container xs={3} alignContent="center" justifyContent="center">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleShowQueue}
            className={classes.playerButtons}
          >
            Queue
          </Button>
          <Drawer anchor="left" open={showQueue} onClose={handleCloseQueue}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={handleCloseQueue}
              onKeyDown={handleCloseQueue}
            ></Box>
          </Drawer>
        </Grid>
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
              onClick={() => dispatch(playSong(currentSong.currentSong.song_audio))}
              style={
                currentSong.isPlaying === false
                  ? { fontSize: 40, margin: "5px 0" }
                  : { display: "none" }
              }
            />
          </Grid>

          <Grid item className="scroll-left" xs={4}>
            <p>{currentSong ? currentSong.currentSong.song_details.name : null}</p>
          </Grid>
        </Grid>
        <Grid item container xs={3} alignContent="center" justifyContent="center">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleShowRecentlyPlayed}
            className={classes.playerButtons}
          >
            Recently Played
          </Button>
          <Drawer anchor="right" open={showRecentlyPlayed} onClose={handleCloseRecentlyPlayed}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={handleCloseRecentlyPlayed}
              onKeyDown={handleCloseRecentlyPlayed}
            ></Box>
          </Drawer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlayerWidget;
