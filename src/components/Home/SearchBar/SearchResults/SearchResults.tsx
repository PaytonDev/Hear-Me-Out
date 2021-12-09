import { Box, Grid, Fade, Paper, Link } from "@material-ui/core";
import { Person, Album, MusicNote } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  playSong,
  setSelectedAlbum,
  setSelectedArtist,
} from "../../../../features/now-playing/now-playing-slice";
import { useGetArtistQuery } from "../../../../features/now-playing/now-playing-api";
import AlbumSection from "../../AlbumSection/AlbumSection";
import ArtistSection from "../../ArtistSection/ArtistSection";
import "./SearchResults.css";

type SearchResultsProps = {
  artists: Artist[];
  albums: Album[];
  songs: Song[];
  query: string;
};

export default function SearchResults(props: SearchResultsProps) {
  const [albumVisible, setAlbumVisible] = useState(false);
  const [artistVisible, setArtistVisible] = useState(false);

  // const currentAlbum = useAppSelector((state) => state.musicPlayer.currentAlbum)
  // const { data: artistData, isLoading } = useGetArtistQuery(currentAlbum.artists[0].id);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (!currentAlbum.artists) return;
  //   async function getArtistFromAlbum() {
  //     dispatch(setSelectedArtist(artistData))
  //   }
  //   getArtistFromAlbum();
  // }, [currentAlbum, artistData, dispatch]);

  const makeAlbumVisible = () => {
    setAlbumVisible(true);
    setArtistVisible(false);
  };

  const makeArtistVisible = () => {
    setAlbumVisible(false);
    setArtistVisible(true);
  };

  const listArtists = props.artists.map((artist: any, idx: number) => (
    //  TODO: make onClick one function!!!!
    <li className="searchResults-link" key={idx}>
      <Box className="searchResults-icon">
        <Person fontSize="small" />
      </Box>
      <Link
        className="clickable"
        onClick={() => {
          makeArtistVisible();
          dispatch(setSelectedArtist(artist));
        }}
      >
        {artist.name}
      </Link>
    </li>
  ));
  const listAlbums = props.albums.map((album: any, idx: number) => (
    <li className="searchResults-link" key={idx}>
      <Box className="searchResults-icon">
        <Album fontSize="small" />
      </Box>
      <Link
        className="clickable"
        onClick={() => {
          makeAlbumVisible();
          dispatch(setSelectedAlbum(album));
        }}
      >
        {album.name}
      </Link>
    </li>
  ));
  const listSongs = props.songs.map((song, idx) => {
    const songObj = {
      song_details: song,
      song_audio: new Audio(song.preview_url),
    };
    return (
      <li className="searchResults-link" key={idx}>
        <Box className="searchResults-icon">
          <MusicNote fontSize="small" />
        </Box>
        <Link
          className="clickable"
          onClick={() => {
            dispatch(playSong(songObj));
          }}
        >
          {song.name}
        </Link>
      </li>
    );
  });

  return (
    <Box>
      <>
        <Fade in={!!props.query} timeout={1000}>
          <Paper className="searchResults-box">
            <Grid
              container
              justifyContent="space-between"
              className="searchResults-grid-container"
              style={props.query ? { display: "flex" } : { display: "none" }}
            >
              <Grid item xs={4}>
                <Box className="searchResults-links-box">
                  <small>Artist</small>
                  <ul>{listArtists}</ul>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className="searchResults-links-box">
                  <small>Albums</small>
                  <ul>{listAlbums}</ul>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className="searchResults-links-box">
                  <small>Songs</small>
                  <ul>{listSongs}</ul>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
        <Box style={albumVisible ? { display: "block" } : { display: "none" }}>
          <AlbumSection handleShowArtist={makeArtistVisible} />
        </Box>
        <Box style={artistVisible ? { display: "block" } : { display: "none" }}>
          <ArtistSection handleShowAlbum={makeAlbumVisible} />
        </Box>
      </>
    </Box>
  );
}
