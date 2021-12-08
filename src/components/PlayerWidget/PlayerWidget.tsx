import { useState } from "react";
import { Grid, Button, Drawer, Box } from "@material-ui/core";
import PauseCircleOutline from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutlineOutlined";
import { styles } from "./styles";
import "./PlayerWidget.css";

type PlayerWidgetProps = {
  currentSong: any;
  handlePlaySong: any;
  handlePauseSong: any;
  pauseButtonView: boolean;
  playButtonView: boolean;
  nowPlaying: Song | undefined;
  setNowPlaying: React.Dispatch<React.SetStateAction<Song | undefined>>;
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

  const classes = styles();

  return (
    <Grid
      container
      className="widget-container"
      alignItems="center"
      style={props.currentSong ? { display: "flex" } : { display: "none" }}
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
              onClick={() => props.handlePauseSong(props.currentSong)}
              style={
                props.pauseButtonView ? { fontSize: 40, margin: "5px 0" } : { display: "none" }
              }
            />
            <PlayCircleOutline
              onClick={() => props.handlePlaySong(props.currentSong)}
              style={props.playButtonView ? { fontSize: 40, margin: "5px 0" } : { display: "none" }}
            />
          </Grid>

          <Grid item className="scroll-left" xs={4}>
            <p>{props.nowPlaying ? props.nowPlaying.name : null}</p>
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
