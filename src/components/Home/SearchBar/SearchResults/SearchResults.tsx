import { Box, Grid, Fade, Paper, Link } from "@material-ui/core";
import { Person, Album, MusicNote } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../state/hooks";
import {
  playSong,
  setSelectedAlbum,
  setSelectedArtist,
} from "../../../../features/now-playing/now-playing-slice";
import { useGetSearchResultsQuery } from "../../../../features/now-playing/now-playing-api";
import AlbumSection from "../../AlbumSection/AlbumSection";
import ArtistSection from "../../ArtistSection/ArtistSection";
import "./SearchResults.css";

type SearchResultsProps = {
  query: string;
};

export default function SearchResults(props: SearchResultsProps) {
  const [albumVisible, setAlbumVisible] = useState(false);
  const [artistVisible, setArtistVisible] = useState(false);
  const [albums, setAlbums] = useState<Album[] | []>([]);
  const [artists, setArtists] = useState<Artist[] | []>([]);
  const [songs, setSongs] = useState<Song[] | []>([]);

  const { data, isLoading, error } = useGetSearchResultsQuery(props.query);

  useEffect(() => {
    if (!props.query) return;

    const handleChange = async (query: string) => {
      if (query === "") {
        return;
      }
      if (data && !isLoading) {
        setAlbums(data.albums.items);
        setArtists(data.artists.items);
        setSongs(data.tracks.items);
      }
    };

    handleChange(props.query);
  }, [props.query, data, isLoading]);

  const dispatch = useAppDispatch();

  const makeAlbumVisible = () => {
    setAlbumVisible(true);
    setArtistVisible(false);
  };

  const makeArtistVisible = () => {
    setAlbumVisible(false);
    setArtistVisible(true);
  };

  const listArtists = artists.map((artist: any, idx: number) => (
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
  const listAlbums = albums.map((album: any, idx: number) => (
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
  const listSongs = songs.map((song, idx) => {
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
        <Fade in={!!props.query || artistVisible} timeout={1000}>
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
