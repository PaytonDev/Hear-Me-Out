import { Container } from "@material-ui/core/";
import { useEffect, useState } from "react";
import useAuth from "../../controller/useAuth";
import PlayerWidget from "../PlayerWidget/PlayerWidget";
import SearchBar from "./SearchBar/SearchBar";
import SpotifyWebApi from "spotify-web-api-node";
import "./Home.css";
import { credentials } from "../../../server/app";

interface HomeProps {
  code: string | null;
}

const spotifyApi = new SpotifyWebApi({
  clientId: credentials.clientId,
});

const Home = ({ code }: HomeProps) => {
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement>();
  const [pauseButtonView, setPauseButtonView] = useState(false);
  const [playButtonView, setPlayButtonView] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Song>();
  const [openRecentlyPlayed, setOpenRecentlyPlayed] = useState(false);

  let token = useAuth(code);
  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
  }, [token]);

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
          token={token}
          nowPlaying={nowPlaying}
          setNowPlaying={setNowPlaying}
        />
      </Container>
      <PlayerWidget
        currentSong={currentSong}
        handlePlaySong={handlePlaySong}
        handlePauseSong={handlePauseSong}
        token={token}
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
