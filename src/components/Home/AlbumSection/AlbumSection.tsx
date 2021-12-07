// General Desc: Section to display album songs after an Album selection is made from the Artist Section or Search Results.

// User Interactions:
//  - Artist Name is a Link.
//  - A Song name is a link that plays the song.

import {
  Box,
  Grid,
  Paper,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Fade,
} from "@material-ui/core";
import { useState, useEffect, SetStateAction } from "react";
import { getAlbumSongs } from "../../../controller/API";
import { styles } from "./styles";

export type AlbumSectionProps = {
  currentAlbum: any;
  currentArtist: any;
  token: string | undefined;
  handleCurrentArtist: React.Dispatch<SetStateAction<any>>;
  handleShowArtist: () => void;
  playSong: any;
  pauseButtonView: boolean;
  playButtonView: boolean;
  nowPlaying: Song | undefined;
  setNowPlaying: React.Dispatch<React.SetStateAction<Song | undefined>>;
};

const AlbumSection = (props: AlbumSectionProps) => {
  const [albumSongs, setAlbumSongs] = useState<any>([]);
  const classes = styles();

  useEffect(() => {
    async function getCurrentAlbumSongs() {
      if (!props.currentAlbum) return;
      let res = await getAlbumSongs(props.currentAlbum.id, props.token);
      setAlbumSongs(res.data.items);
    }
    getCurrentAlbumSongs();
  }, [props.currentAlbum, props.token]);

  const goToArtist = (artist: any) => {
    if (props.currentAlbum) {
      props.handleCurrentArtist(artist);
      props.handleShowArtist();
    }
  };

  const convertSongTime = (milliseconds: number) => {
    let min = Math.floor(milliseconds / 60000);
    let sec = (milliseconds % 60000) / 1000;
    return sec === 60
      ? (min + 1).toString() + ":00"
      : min + ":" + (sec < 10 ? "0" : "") + sec.toFixed(0);
  };

  return (
    <Paper className={classes.albumSectionContainer}>
      <Fade in={!!props.currentAlbum} timeout={1000}>
        <Grid container>
          <Grid
            container
            item
            alignItems="center"
            justifyContent="space-evenly"
            className={classes.albumSectionContainer}
          >
            <Grid item xs={3}>
              <Box>
                <img
                  className={classes.albumImageStyles}
                  src={props.currentAlbum ? props.currentAlbum.images[0].url : ""}
                  alt={`${props.currentAlbum ? props.currentAlbum.name : ""} album cover`}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <p className={classes.albumTitleStyles}>
                  {props.currentAlbum ? props.currentAlbum.name : "Album Name"}
                </p>

                {/* Artist Name Link */}
                <p
                  onClick={() => goToArtist(props.currentArtist)}
                  className={classes.albumTitleArtistStyles}
                >
                  {props.currentAlbum ? `by ${props.currentAlbum.artists[0].name}` : "Artist Name"}
                </p>
              </Box>
            </Grid>
          </Grid>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="album info table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Typography variant="body1" component="header">
                      Song
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1" component="header">
                      Artist
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1" component="header">
                      Time
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.currentAlbum
                  ? albumSongs.map((song: any, idx: number) => (
                      <TableRow key={idx}>
                        <TableCell className={classes.songTableCell}>
                          <Grid container alignContent="center">
                            <img
                              className={classes.songImageStyles}
                              src={props.currentAlbum ? props.currentAlbum.images[2].url : ""}
                              alt={`${
                                props.currentAlbum ? props.currentAlbum.name : ""
                              } album cover`}
                            />

                            {/* Song Link */}
                            <Grid
                              container
                              item
                              alignContent="center"
                              onClick={() => {
                                props.playSong(song.id);
                                props.setNowPlaying(song);
                              }}
                              className={classes.songNameStyles}
                            >
                              <Link>{song.name}</Link>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell>
                          {/* Artist Link */}
                          <Link
                            onClick={() => goToArtist(props.currentArtist)}
                            className={classes.songInfoStyles}
                          >
                            {song.artists[0].name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <small className={classes.songInfoStyles}>
                            {convertSongTime(song.duration_ms)}
                          </small>
                        </TableCell>
                      </TableRow>
                    ))
                  : "Album Songs"}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Fade>
    </Paper>
  );
};

export default AlbumSection;
