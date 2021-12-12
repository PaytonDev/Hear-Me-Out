import { Box, Grid, Paper, Link, Fade } from "@material-ui/core";
import { useEffect, useState } from "react";
import cssStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import { useAppSelector, useAppDispatch } from "../../../state/hooks";
import {
  useGetArtistAlbumsQuery,
  useGetArtistTopSongsQuery,
} from "../../../features/now-playing/now-playing-api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { playSong, setSelectedAlbum } from "../../../features/now-playing/now-playing-slice";

type ArtistSectionProps = {
  handleShowAlbum: () => void;
};

const styles = makeStyles(() => ({
  containerHide: {
    marginTop: "2em",
    borderRadius: 10,
    maxHeight: 675,
    padding: "2em",
    overflow: "hidden",
    marginBottom: 80,
  },
  containerShow: {
    marginTop: "2em",
    borderRadius: 10,
    padding: "2em",
    marginBottom: 80,
  },
}));

const ArtistSection = (props: ArtistSectionProps) => {
  const [artistAlbums, setArtistAlbums] = useState<any>([]);
  const [artistTopSongs, setArtistTopSongs] = useState<any>([]);
  const [seeAllOpen, setSeeAllOpen] = useState(false);

  const classes = styles(seeAllOpen);

  const currentArtist = useAppSelector((state) => state.musicPlayer.currentArtist);
  const { data: albums, isLoading: albumsLoading } = useGetArtistAlbumsQuery(
    currentArtist.id ?? skipToken
  );
  const { data: songs, isLoading: songsLoading } = useGetArtistTopSongsQuery(currentArtist.id, {
    skip: albumsLoading,
  });
  const dispatch = useAppDispatch();

  console.log(songs);
  console.log(currentArtist);

  useEffect(() => {
    async function getCurrentArtistMusic() {
      if (!currentArtist.id) return;
      if (songsLoading || albumsLoading) return;
      setArtistAlbums(albums.items);
      console.log("inside effect songs", songs);
      console.log("inside effect albums", albums);
      setArtistTopSongs(songs.tracks);
    }
    getCurrentArtistMusic();
  }, [currentArtist, albums, songs, albumsLoading, songsLoading]);

  const convertSongTime = (milliseconds: number) => {
    let min = Math.floor(milliseconds / 60000);
    let sec = (milliseconds % 60000) / 1000;
    return sec === 60
      ? (min + 1).toString() + ":00"
      : min + ":" + (sec < 10 ? "0" : "") + sec.toFixed(0);
  };

  const seeAllToggle = () => {
    setSeeAllOpen(!seeAllOpen);
  };

  return (
    <Paper>
      {albumsLoading || songsLoading ? null : (
        <Fade in={!!currentArtist} timeout={1000}>
          <Grid
            container
            spacing={2}
            className={seeAllOpen ? classes.containerShow : classes.containerHide}
            alignItems={"center"}
          >
            <Grid item xs={6}>
              <img
                src={currentArtist.id ? currentArtist.images[0].url : "Artist Image"}
                alt={`${currentArtist.id ? currentArtist.name : ""} avatar`}
                style={{ maxHeight: 250, borderRadius: "50%" }}
              />
              <p style={{ fontSize: 54, marginTop: 10, marginBottom: 0 }}>
                {currentArtist ? currentArtist.name : "Artist Name"}
              </p>
            </Grid>

            <Grid item container xs={6}>
              <Grid item xs={12}>
                <header>Top Tracks</header>
                <ul>
                  {currentArtist.id && songs
                    ? artistTopSongs.slice(0, 5).map((song: any, idx: number) => (
                        <li style={cssStyles.songLiStyles} key={idx}>
                          <Grid container item alignItems="center">
                            <Grid container alignItems="center" item xs={6}>
                              <img
                                style={cssStyles.songImageStyles}
                                src={currentArtist.id ? song.album.images[2].url : ""}
                                alt={`${currentArtist.id ? song.album.name : ""} album cover`}
                              />
                              <Link
                                onClick={() => {
                                  dispatch(playSong(song.id));
                                }}
                                style={cssStyles.songNameStyles}
                              >
                                {song.name}
                              </Link>
                            </Grid>
                            <Grid item xs={3}>
                              <Link>
                                <small style={cssStyles.songInfoStyles}>
                                  {song.artists[0].name}
                                </small>
                              </Link>
                            </Grid>
                            <Grid item container xs={3} justifyContent="center">
                              <div>
                                <small style={cssStyles.songInfoStyles}>
                                  {convertSongTime(song.duration_ms)}
                                </small>
                              </div>
                            </Grid>
                          </Grid>
                        </li>
                      ))
                    : "Top Songs"}
                </ul>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={4} justifyContent="center">
              <Grid container item xs={11} alignItems="center" justifyContent="space-between">
                <p>Albums</p>
                <p onClick={seeAllToggle}>See All</p>
              </Grid>
              {currentArtist.id
                ? artistAlbums.map((album: any, idx: number) => (
                    <Grid item sm={4} md={3} lg={2} key={idx}>
                      <Box
                        onClick={() => {
                          dispatch(setSelectedAlbum(album));
                        }}
                      >
                        <img
                          key={`${idx}-image`}
                          src={album.images[1].url}
                          alt={`${album.name} avatar`}
                          style={{ maxHeight: 150 }}
                        />
                        <div key={`${idx}-album`}>{album.name}</div>
                      </Box>
                    </Grid>
                  ))
                : "Album Songs"}
            </Grid>
          </Grid>
        </Fade>
      )}
    </Paper>
  );
};

export default ArtistSection;
