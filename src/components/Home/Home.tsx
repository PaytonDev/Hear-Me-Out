import { Container } from "@material-ui/core/";
import { useEffect, useState } from "react";
import useAuth from "../../controller/useAuth";
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import SearchBar from "./SearchBar/SearchBar";
import SpotifyWebApi from "spotify-web-api-node";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setToken } from "../../features/auth/auth-slice";
import "./Home.css";
import { CLIENT_ID } from "../../server/credentials";

interface HomeProps {
  code: string | null;
}

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});

const Home = ({ code }: HomeProps) => {
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement>();
  const [pauseButtonView, setPauseButtonView] = useState(false);
  const [playButtonView, setPlayButtonView] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Song>();
  const [openRecentlyPlayed, setOpenRecentlyPlayed] = useState(false);

  let token = useAuth(code);
  const dispatch = useAppDispatch();
  let storeToken = useAppSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
    dispatch(setToken(token));
  }, [token, dispatch]);

  const handlePlaySong = (song: any) => {
    if (song === undefined) return;
    setCurrentSong(song);
    song.song.play();
    setPlayButtonView(!playButtonView);
    setPauseButtonView(!pauseButtonView);
  };

  const handlePauseSong = (song: any) => {
    if (song === undefined) return;
    song.song.pause();
    setPauseButtonView(!pauseButtonView);
    setPlayButtonView(!playButtonView);
  };

  return (
    <div className="home-container">
      <Container>
        <header className="home-hero">Hear Me Out</header>
        <SearchBar
          currentSong={currentSong}
          handlePlaySong={handlePlaySong}
          pauseButtonView={pauseButtonView}
          playButtonView={playButtonView}
          nowPlaying={nowPlaying}
          setNowPlaying={setNowPlaying}
        />
      </Container>
      <PlayerWidget
        currentSong={currentSong}
        handlePlaySong={handlePlaySong}
        handlePauseSong={handlePauseSong}
        pauseButtonView={pauseButtonView}
        playButtonView={playButtonView}
        nowPlaying={nowPlaying}
        setNowPlaying={setNowPlaying}
        openRecentlyPlayed={openRecentlyPlayed}
        setOpenRecentlyPlayed={setOpenRecentlyPlayed}
      />
    </div>
  );
};

export default Home;
