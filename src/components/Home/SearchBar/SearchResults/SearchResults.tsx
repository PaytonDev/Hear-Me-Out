import { Box, Grid, Fade, Paper, Link } from "@material-ui/core";
import { Person, Album, MusicNote } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { playSong } from "../../../../features/now-playing/now-playing-slice";
import { useGetArtistQuery } from "../../../../features/now-playing/now-playing-api";
import AlbumSection from "../../AlbumSection/AlbumSection";
import ArtistSection from "../../ArtistSection/ArtistSection";
import "./SearchResults.css";

type SearchResultsProps = {
  artists: Artist[];
  albums: Album[];
  songs: Song[];
  currentSong: any;
  handlePlaySong: any;
  query: string;
  pauseButtonView: boolean;
  playButtonView: boolean;
  nowPlaying: Song | undefined;
  setNowPlaying: React.Dispatch<React.SetStateAction<Song | undefined>>;
};

export default function SearchResults(props: SearchResultsProps) {
  const [currentAlbum, setCurrentAlbum] = useState<any>();
  const [currentArtist, setCurrentArtist] = useState<any>();
  const [albumVisible, setAlbumVisible] = useState(false);
  const [artistVisible, setArtistVisible] = useState(false);

  const { data: artistData, isLoading } = useGetArtistQuery(currentAlbum.artists[0].id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currentAlbum) return;
    async function getArtistFromAlbum() {
      let artist = artistData;
      setCurrentArtist(artist);
    }
    getArtistFromAlbum();
  }, [currentAlbum, artistData]);

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
          setCurrentArtist(artist);
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
          setCurrentAlbum(album);
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
      {isLoading ? null : (
        <>
          <Fade in={props.query ? true : false} timeout={1000}>
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
            <AlbumSection
              currentAlbum={currentAlbum}
              currentArtist={currentArtist}
              handleShowArtist={makeArtistVisible}
              handleCurrentArtist={setCurrentArtist}
              pauseButtonView={props.pauseButtonView}
              playButtonView={props.playButtonView}
              nowPlaying={props.nowPlaying}
              setNowPlaying={props.setNowPlaying}
            />
          </Box>
          <Box style={artistVisible ? { display: "block" } : { display: "none" }}>
            <ArtistSection
              currentArtist={currentArtist}
              currentAlbum={currentAlbum}
              handleShowAlbum={makeAlbumVisible}
              handleCurrentAlbum={setCurrentAlbum}
              pauseButtonView={props.pauseButtonView}
              playButtonView={props.playButtonView}
              nowPlaying={props.nowPlaying}
              setNowPlaying={props.setNowPlaying}
            />
          </Box>
        </>
      )}
    </Box>
  );
}
