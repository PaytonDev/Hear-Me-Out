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
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useGetAlbumSongsQuery } from "../../../features/now-playing/now-playing-api";
import { setSelectedArtist, playSong } from "../../../features/now-playing/now-playing-slice";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { styles } from "./styles";

export type AlbumSectionProps = {
  handleShowArtist: () => void;
};

// Finish untangling album, music, and song states.
const AlbumSection = (props: AlbumSectionProps) => {
  const [albumSongs, setAlbumSongs] = useState<any>([]);
  const classes = styles();

  const currentArtist = useAppSelector((state) => state.musicPlayer.currentArtist);
  const currentAlbum = useAppSelector((state) => state.musicPlayer.currentAlbum);
  const { data, isLoading } = useGetAlbumSongsQuery(currentAlbum.id ?? skipToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getCurrentAlbumSongs() {
      if (!currentAlbum.id) return;
      setAlbumSongs(data.items);
    }
    getCurrentAlbumSongs();
  }, [currentAlbum, data]);

  const goToArtist = (artist: Artist) => {
    if (currentAlbum) {
      dispatch(setSelectedArtist(artist));
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
      {isLoading ? null : (
        <Fade in={!!currentAlbum.artists} timeout={1000}>
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
                    src={currentAlbum.id ? currentAlbum.images[0].url : ""}
                    alt={`${currentAlbum.id ? currentAlbum.name : ""} album cover`}
                  />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <p className={classes.albumTitleStyles}>
                    {currentAlbum.id ? currentAlbum.name : "Album Name"}
                  </p>

                  {/* Artist Name Link */}
                  <p
                    onClick={() => goToArtist(currentArtist)}
                    className={classes.albumTitleArtistStyles}
                  >
                    {currentAlbum.id ? `by ${currentAlbum.artists[0].name}` : "Artist Name"}
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
                  {currentAlbum.id
                    ? albumSongs.map((song: any, idx: number) => (
                        <TableRow key={idx}>
                          <TableCell className={classes.songTableCell}>
                            <Grid container alignContent="center">
                              <img
                                className={classes.songImageStyles}
                                src={currentAlbum.id ? currentAlbum.images[2].url : ""}
                                alt={`${currentAlbum.id ? currentAlbum.name : ""} album cover`}
                              />

                              {/* Song Link */}
                              <Grid
                                container
                                item
                                alignContent="center"
                                onClick={() => {
                                  dispatch(playSong(song.id));
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
                              onClick={() => goToArtist(currentArtist)}
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
      )}
    </Paper>
  );
};

export default AlbumSection;
